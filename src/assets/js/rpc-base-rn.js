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

export function callRPC (
  operationType,
  params,
  header,
  config,
  func,
  errFunc
) {
  let headers = header

  if (config.showLoading != false) {
    config.showLoading = true
  }
  if (headers == null || String(headers) == 'undefined' || typeof headers === 'string') {
    headers = {}
  }

  if (config.showLoading) {
    // 展示Loading
    Toast.loading({
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner'
    })
  }
  let goosePlatformExtData = {
    operationType,
    params,
    headers,
    config
  }

  const eventHandler = data => {
    if (data.detail.type === 'success') {
      console.log(`接口 ${data.detail.ext.operationType} 处理结果: ${data.detail.type}`)
      console.log(`接口 ${data.detail.ext.operationType} 响应报文: ${JSON.stringify(data.detail.param)}`)

      if (func && typeof func === 'function') {
        func(data.detail.param)
      }
    } else {
      console.warn(`接口 ${data.detail.ext.operationType} 处理结果: ${data.detail.type}`)
      console.warn(`接口 ${data.detail.ext.operationType} 响应报文: ${JSON.stringify(data.detail.param)}`)

      if (errFunc && typeof errFunc === 'function') {
        errFunc(data.detail.param)
      }
    }
    document.removeEventListener(`rpcResult-${operationType}`, eventHandler)
  }

  // 声明事件，处理回调函数
  document.addEventListener(`rpcResult-${operationType}`, eventHandler)

  Vue.prototype.$goose.tools.getAPPDataCache({
    keys: ['token'],
    goosePlatformExtData
  }, (res, data) => {
    let extData = data

    if (extData) {
      extData = JSON.parse(extData)
    }
    let requestParams = [
        { _requestBody: { reqMsg: extData.params } }
      ], headerData = {
        channel: 'mbank'
      }
    
    if (res.data.token) {
      headerData.MBToken = res.data.token
    }

    if (Object.keys(extData.headers).length > 0) {
      Object.assign(headerData, extData.headers)
    }

    let reqParams = {
      operationType: extData.operationType,
      method: 'POST',
      headerData: JSON.stringify(headerData),
      paramBody: JSON.stringify(requestParams)
    }

    console.log(`接口 ${operationType} 的请求参数: ${JSON.stringify(reqParams)}`)

    Vue.prototype.$goose.tools.rpc(Object.assign(reqParams, { goosePlatformExtData: extData }),
      (rspData, rpcData) => {
        let rpcExtData = rpcData

        try {
          if (config.showLoading) {
            Toast.clear()
          }
          if (rpcExtData) {
            rpcExtData = JSON.parse(rpcExtData)
          }
          let response = rspData

          if (response.header && response.header.code == 200) {
            let errEvent = new CustomEvent(`rpcResult-${rpcExtData.operationType}`, {
              detail: {
                type: 'success',
                param: response,
                ext: rpcExtData
              }
            })

            document.dispatchEvent(errEvent)
          } else if (response.header && response.header.code == 50004) {
            Vue.prototype.$goose.tools.removeAPPDataCache({ keys: ['token'] })

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
            let errEvent = new CustomEvent(`rpcResult-${rpcExtData.operationType}`, {
              detail: {
                type: 'failure',
                param: response,
                ext: rpcExtData
              }
            })

            document.dispatchEvent(errEvent)
          }
        } catch (error) {
          console.log(error)
        }
      },
      (errData, rpcData) => {
        let rpcExtData = rpcData

        if (config.showLoading) {
          Toast.clear()
        }
        if (rpcExtData) {
          rpcExtData = JSON.parse(rpcExtData)
        }
        let errEvent = new CustomEvent(`rpcResult-${rpcExtData.operationType}`, {
          detail: {
            type: 'failure',
            param: errData,
            ext: rpcExtData
          }
        })

        document.dispatchEvent(errEvent)
      })
  })
}

