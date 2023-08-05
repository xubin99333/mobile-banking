import bridge from '../bridge'

/**
 * @生成将存储在设备密钥库中的公私RSA2048密钥对
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'biometricsCreateKeys', {}, successFunc, errorFunc
  )
}
