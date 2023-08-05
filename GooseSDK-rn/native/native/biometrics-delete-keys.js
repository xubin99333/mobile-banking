import bridge from '../bridge'

/**
 * @删除设备中储存的指纹或面容的keys
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'biometricsDeleteKeys', {}, successFunc, errorFunc
  )
}
