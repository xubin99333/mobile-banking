import Vue from 'vue'
import axios from 'axios'
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

export function callRPC (
  operationType,
  params,
  headers,
  config,
  func,
  errFunc
) {
  if (config.showLoading) {
    // 展示Loading
    Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner'
    })
  }

  axios.post(window.location.protocol + '//' + window.location.host + '/mock/' + operationType)
    .then(result => {
      const rspData = result.data
      
      if (rspData.header.code === 200) {
        func(rspData)
      } else if (rspData.header.code === 50004) {
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
      } else if (errFunc) {
        errFunc(rspData)
      }
    })
    .catch(err => {
      if (errFunc) {
        errFunc(err)
      }
    })
}
