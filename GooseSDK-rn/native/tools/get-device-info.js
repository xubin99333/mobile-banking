import bridge from '../bridge'

/**
 * @获取设备ID
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'getDeviceInfo', {}, successFunc, errorFunc
  )
}