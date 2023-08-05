import bridge from '../bridge'

/**
 * @缓存存储-获取缓存存储数据
 * @author 卢鹏宇
 */
export default (data, successFun, errorFun) => {
  bridge.callAMAPSDK('getAPPDataCache', data, res => {
    let resultData = {
      statusCode: '',
      data: {}
    }
    
    if (res.code == 1) {
      Object.keys(res.data).forEach(key => {
        try {
          res.data[key] = JSON.parse(res.data[key])
        } catch (error) {
        }
      })
      Object.assign(resultData, res)
      resultData.statusCode = res.code
    }
    successFun(resultData)
  }, err => {
    errorFun ? errorFun(err) :''
  })

}