import bridge from '../bridge'

/**
 * @检验当前设备是否支持生物认证
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'isSensorAvailable', {}, successFunc, errorFunc
  )
}