import bridge from '../bridge'

/**
 * @检测密钥是否已经生成并且存在于密钥库中
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'biometricKeysExist', {}, successFunc, errorFunc
  )
}
