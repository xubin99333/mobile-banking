/**
 * @description 调用SDK基础方法
 */

const sdkExcutor = (modelName, funName, data, success, failure) => {
  gooseSDK[modelName][funName](data, (successData, extData) => {
    let requestData
    try {
      requestData = JSON.parse(successData)
    } catch (error) {
      requestData = successData
    }
    success(requestData, extData)
  }, (errData, extData) => {
    let errMsg
    try {
      errMsg = JSON.parse(errData)
    } catch (error) {
      errMsg = errData
    }
    failure(errMsg, extData)
  })
}

export default {
  callGooseSDK (modelName, funName, data, success, failure) {
    if (typeof success !== 'function') {
      success = () => {}
    }
    if (typeof failure !== 'function') {
      failure = () => {}
    }

    if (window.gooseSDK) {
      console.warn(`当前执行GooseSDK.${modelName}.${funName}接口`)
      sdkExcutor(modelName, funName, data, success, failure)
    } else {
      console.warn(`当前准备执行GooseSDK.${modelName}.${funName}接口，SDK未注入完成，等待注入完成后继续`)
      window.addEventListener(
        'gooseSDKReady',
        () => {
          console.warn(`SDK注入完成，继续执行GooseSDK.${modelName}.${funName}接口`)
          sdkExcutor(modelName, funName, data, success, failure)
        },
        true
      )
    }
  }
}
