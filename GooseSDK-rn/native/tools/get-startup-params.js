import bridge from '../bridge'

/**
 * @获取参数
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'getStartupParams', option, successFunc, errorFunc
  )
}