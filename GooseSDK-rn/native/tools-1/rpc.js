import bridge from '../bridge'

/**
 * @rpc请求
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  console.log('查询账户信息请求时间测试: => rpc', new Date().getTime())
  bridge.callAMAPSDK('netWork', option, successFunc, errorFunc)
}

