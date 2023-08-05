import bridge from '../bridge'

/**
 * @数据库存储-获取数据到客户端
 * @author 卢鹏宇
 */
export default (data, successFun, errorFun) => {
  bridge.callAMAPSDK('getAPPDataStorage', data, res => {
    let resultData = {
      statusCode: '',
      data: {}
    }
    Object.assign(resultData, res)
    resultData.statusCode = res.code
    successFun(resultData)
  }, err => {
    errorFun ? errorFun(err) :''
  })
  
}