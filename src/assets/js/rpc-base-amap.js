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
    if (res.code == '1' && res.data.header.code == '200') {
      let requestBody = JSON.parse(res.data.body)
      
      console.log(requestBody)
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
      }
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
    url: '',
    params: { reqMsg: params },
    headers: {
      SERVERCODE: operationType
    }
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
    if (res.code == '1' && res.data.token) {
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
