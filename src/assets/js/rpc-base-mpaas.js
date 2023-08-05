import Vue from 'vue'
import { Dialog, Toast } from 'gooseui'

/*
 * 展示错误提示
 */
const showAlert = (msg, callback) => {
  Dialog.alert({
    message: msg,
    overlay: true
  }).then(() => {
    if (callback) {
      callback()
    }
  })
}

/**
 * @description 网关请求
 * @author lupengyu
 */
const rpcPost = (data, func, errFunc) => {
  Vue.prototype.$goose.tools.rpc(data, res => {
    console.log('数据请求返回值 => ', res)
    if (res && res.resData && res.resData.header && res.resData.header.code == '200') {
      let requestBody = res.resData
      
      console.log('requestBody', requestBody)
      if (requestBody.header.code == 200) {
        func(requestBody)
      } else if (requestBody.header.code === 50004) {
        showAlert('登录超时，请重新登录', () => {
          let options = {
            appId: '00010002',
            param: {
              url: '/www/login_index.html'
            },
            isShowTitleBar: false
          }

          Vue.prototype.$goose.context.startH5App(options)
        })
      } else {
        Toast('网络请求失败,请稍后再试!')
        errFunc(requestBody)
      }
    } else {
      Toast('网络请求失败,请稍后再试!')
      errFunc(res)
    }
  }, err => {
    errFunc(err)
  })
}

export function callRPC (
  operationType,
  params,
  header,
  config,
  func,
  errFunc
) {
  let data = {
    operationType,
    requestData: [{ _requestBody: { reqMsg: params } }],
    headers: {},
    getResponse: true,
    timeout: 40
  }
  
  if (Object.keys(header).length > 0) {
    Object.assign(data.headers, header)
  }

  if (config.showLoading != false) {
    config.showLoading = true
  }
  
  if (config.showLoading) {
    // 展示Loading
    Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner'
    })
  }

  Vue.prototype.$goose.tools.getAPPDataCache({ keys: ['token'] }, res => {
    if (res && res.data && res.status == true && res.data.token) {
      data.headers['MBToken'] = res.data.token
    }
    if (config.showLoading) {
      Toast.clear()
    }
    console.log('数据请求 => ', data)
    rpcPost(data, func, errFunc)
  }, () => {
    if (config.showLoading) {
      Toast.clear()
    }
    rpcPost(data, func, errFunc)
  })
}
