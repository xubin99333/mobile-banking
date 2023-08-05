import bridge from '../bridge'

/**
 * @生物识别验证
 * @author 卢鹏宇
 */
export default (options, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'biometricCreateSignature', options, successFunc, errorFunc
  )
}
