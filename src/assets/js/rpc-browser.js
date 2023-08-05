import Vue from 'vue'
import axios from 'axios'
import { Dialog, Toast } from 'gooseui'
const { runtime, runtimeConfig } = require('../../../environment'),

  /*
   * 展示错误提示
   */
  showAlert = (msg, callback) => {
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
  
  let header = Object.assign({
      'Content-Type': 'application/json',
      operationType: operationType,
      appId: runtimeConfig[runtime]['appId'],
      workspaceId: runtimeConfig[runtime]['workspaceId'],
      deviceId: 'browser',
      platform: '1'
    }, headers),
    // 代理地址
    url = `${location.protocol}//${location.host}/api`,
    reqParams = [{ _requestBody: { reqMsg: params } }]

  Vue.prototype.$goose.tools.getAPPDataCache({ keys: ['token'] }, res => {
    if (res && res.data && res.data.token) {
      header.MBToken = res.data.token
    }
  })

  axios
    .request({
      url: 'https://cms.xu6070.com:50358/cms-static-service/755785536530022400/acmssitesource/20230324/73d8597f-af67-42b4-bae3-b4d9db3bd65a.json',
      headers: header,
      method: 'post',
      data: reqParams
    })
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
