import bridge from '../bridge'

/**
 * @rpc请求
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'rpc', option, successFunc, errorFunc
  )
}

