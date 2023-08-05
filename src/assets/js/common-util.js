import Vue from 'vue'
import { logout } from '@/assets/api/rpc-person-center'

/**
 * 公共方法
 */
export default {

  /**
   * 从本地缓存获取用户信息
   */
  getUserInfo () {
    return new Promise((resolve, reject) => {
      Vue.prototype.$goose.tools.getAPPDataCache({ keys: ['userInfo'] },
        res => {
          console.log('getUserInfo - 从本地缓存获取用户信息：' + JSON.stringify(res))
          if (res) {
            if (res.data.userInfo && res.statusCode == 1) {
              resolve(res.data.userInfo)
            } else {
              reject()
            }
          } else {
            reject()
          }
        },
        err => {
          console.warn('getUserInfo - 从本地缓存获取用户信息方法出错！' + JSON.stringify(err))
          reject()
        })
    })
  },

  /*
   * 获取登录方式
   */
  getLoginType () {
    let myoption = {},
      //此方法返回的对象：传给登陆页的底部生物识别选择栏内容；生物识别是否可用;singel
      typeParams = {},
      //传给登陆页的底部生物识别选择栏内容
      actions = [],
      //生物识别是否可用
      faceIsUse = true,
      //faceToken or fingerToken
      singel = ''

    return new Promise((resolve, reject) => {
      // 检测生物识别是否可用
      Vue.prototype.$goose.native.isSensorAvailable(succ => {
        console.log('getLoginType - 生物识别可用：' + JSON.stringify(succ))
        //生物识别可用时，给定对应的actions和myoption,singel
        if (succ.biometryType === 'FaceID') {
          actions = [{ name: '面容登录' }]
          myoption = {
            keys: ['faceToken']
          }
          singel = 'faceToken'
        } else if (
          succ.biometryType === 'Biometrics' ||
          succ.biometryType === 'TouchID'
        ) {
          actions = [{ name: '指纹登录' }]
          myoption = {
            keys: ['fingerToken']
          }
          singel = 'fingerToken'
        } else {
          actions = []
          myoption = {}
        }
        // 判断是否存在生物识别Token
        Vue.prototype.$goose.tools.getAPPDataStorage(myoption,
          res => {
            let data = res.data[singel]

            if (data) {
              console.log('getLoginType - 存在生物识别Token：' + JSON.stringify(data))
              // 再判断是否存在生物识别签名，都存在才可以直接跳转生物识别登录
              Vue.prototype.$goose.native.biometricKeysExist(success => {
                let resObj = success
                
                console.log('getLoginType - 检测当前是否存在生物识别Key：' + JSON.stringify(resObj))
                if (resObj.keysExist) {
                  console.log('getLoginType - data.keysExist存在-跳转生物识别登陆页')
                  //存在就跳转生物识别登陆页
                  if (singel === 'faceToken') {
                    typeParams = {
                      faceIsUse: faceIsUse,
                      action: actions,
                      singel: 'GestureLogin'
                    }
                    resolve(typeParams)
                  } else if (singel === 'fingerToken') {
                    typeParams = {
                      faceIsUse: faceIsUse,
                      action: actions,
                      singel: 'FingerLogin'
                    }
                    resolve(typeParams)
                  }
                } else {
                  //签名不存在，不跳转但保留生物识别
                  console.log('goToLogin - data.keysExist不存在-不跳转生物识别登陆页')
                  typeParams = {
                    faceIsUse: faceIsUse,
                    action: actions
                  }
                  resolve(typeParams)
                }
              },
              err => {
                console.warn('goToLogin - 检测当前是否存在生物识别签名方法出错！' + JSON.stringify(err))
                typeParams = {
                  faceIsUse: faceIsUse,
                  action: actions
                }
                reject(typeParams)
              })
            } else {
              console.log('getLoginType - 不存在生物识别Token：' + JSON.stringify(data))
              // 判断不存在生物识别TOken,移除签名
              Vue.prototype.$goose.native.biometricsDeleteKeys(Success => {
                console.log('getLoginType - 移除Key: ' + JSON.stringify(Success))
                typeParams = {
                  faceIsUse: faceIsUse,
                  action: actions
                }
                reject(typeParams)
              },
              error => {
                console.warn('getLoginType - 移除Key方法出错！' + JSON.stringify(error))
                typeParams = {
                  faceIsUse: faceIsUse,
                  action: actions
                }
                reject(typeParams)
              })
            }
          },
          err => {
            console.warn('getLoginType - 判断是否存在生物识别Token方法出错！' + JSON.stringify(err))
            //生物识别不可用提示
            if (succ.available === false) {
              faceIsUse = false
            }
            typeParams = {
              faceIsUse: faceIsUse,
              action: actions
            }
            reject(typeParams)
          })
      }, err => {
        console.warn('getLoginType - 检测生物识别是否可用方法出错！' + JSON.stringify(err))
        typeParams = {
          faceIsUse: false,
          action: []
        }
        reject(typeParams)
      })
    })
  },

  /*
   * 判断是否登录-未登录自动跳转登录页
   * target参数格式：
   *      {
   *        appId: '', //登录成功后将要跳转的离线包ID
   *        param: {
   *          url: '', //登录成功后将要跳转的离线包url
   *          canJumpLogin: false,  //传false仅判断是否登陆，但不跳转登录
   *          loginType: {} //跳转登录时登录方式，必传 (由公共方法getLoginType获取或首页props: ['loginType']获取)
   *       },
   *        closeCurrentApp: false
   *      }
   */
  isUserLogin (target) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$goose.tools.getAPPDataCache({ keys: ['token'] },
        res => {
          console.log('isUserLogin - getToken：' + JSON.stringify(res))
          if (res) {
            if (res.data.token && res.statusCode == 1) {
              console.log('isUserLogin - 当前为登录状态')
              if (target && target.appId && target.param && target.param.url) {
                //已经登录，直接跳转离线包
                Vue.prototype.$goose.context.startH5App(target)
                resolve(res.data)
              } else {
                //已经登录，直接进行操作
                resolve(res.data)
              }
            } else {
              console.warn('isUserLogin - 当前为未登录状态(获取Token为空或没有Token)')
              if (target && target.param && target.param.canJumpLogin === false) {
                //不自动跳转登录
                reject()
              } else if (String(target) === 'undefined') {
                //跳转登录
                this.goToLogin({})
              } else {
                //跳转登录
                this.goToLogin(target)
              }
            }
          } else {
            console.warn('isUserLogin - 当前为未登录状态(没有获取到结果)')
            if (target && target.param && target.param.canJumpLogin === false) {
              //不自动跳转登录
              reject()
            } else if (String(target) === 'undefined') {
              //跳转登录
              this.goToLogin({})
            } else {
              //跳转登录
              this.goToLogin(target)
            }
          }
        },
        err => {
          console.warn('isUserLogin - 获取token方法出错！' + JSON.stringify(err))
          reject()
        })
    })
  },

  /**
   * 跳转登录
   * target参数格式：
   *       {
   *         appId: '', //登录成功后将要跳转的离线包ID
   *         param: {
   *           url: '', //登录成功后将要跳转的离线包url
   *          canJumpLogin: false,  //传false仅判断是否登陆，但不跳转登录
   *          loginType: {},//跳转登录时登录方式，必传 (由公共方法getLoginType获取或首页props: ['loginType']获取)
   *           passData:{} //跳转登录要携带的参数
   *         },
   *         closeCurrentApp: false
   *       }
   */
  goToLogin (target) {
    let myurl = ''

    if (target && target.param && target.param.loginType && target.param.loginType.singel) {
      myurl = '/www/login_index.html?indexJump=' + target.param.loginType.singel
    } else {
      myurl = '/www/login_index.html'
    }
    let options = {
      appId: '00010002',
      param: {
        url: myurl,
        jumpToPage: target,
        passData: {}
      },
      isShowTitleBar: false
    }

    Vue.prototype.$goose.context.startH5App(options)
  },

  /**
   * 登出-公共方法
   */
  userLogout () {
    return new Promise((resolve, reject) => {
      let params = {}

      logout(params, res => {
        console.log('userLogout - 登出 ' + JSON.stringify(res))
        if (res.header.code == 200) {
          window.name = ''
          this.getUserInfo()
            .then(userInfo => {
              console.log('userLogout - 缓存中获取到的用户信息' + JSON.stringify(userInfo))
              Vue.prototype.$goose.tools.userUnBind({
                useId: userInfo.userId
              })
              let option = {
                keys: [ 'token', 'userInfo' ]
              }

              Vue.prototype.$goose.tools.removeAPPDataCache(option, () => {
                resolve(res)
              })
            })
        } else {
          reject(res.data)
        }
      })
    })
  }
}
