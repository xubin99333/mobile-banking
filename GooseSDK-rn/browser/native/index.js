let native = {

  /**
   * @扫一扫
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  scan () {
    console.warn('当前调用SDK：scan => 扫一扫，请更换基座调试！')
  },

  /**
   * @检验当前设备是否支持生物认证
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  isSensorAvailable (successFunc, errorFunc) {
    console.warn('当前调用SDK：isSensorAvailable => 检验当前设备是否支持生物认证，请更换基座调试！')
  },

  /**
   * @生成将存储在设备密钥库中的公私RSA2048密钥对
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  biometricsCreateKeys (successFunc, errorFunc) {
    console.warn('当前调用SDK：biometricsCreateKeys => 生成生物识别秘钥，请更换基座调试！')
  },

  /**
   * @删除设备中储存的指纹或面容的keys
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  biometricsDeleteKeys (successFunc, errorFunc) {
    console.warn('当前调用SDK：biometricsDeleteKeys => 生成生物识别秘钥，请更换基座调试！')
  },

  /**
   * @生物识别验证
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  biometricCreateSignature (options, successFunc, errorFunc) {
    console.warn('当前调用SDK：biometricCreateSignature => 生物识别验证，请更换基座调试！')
  },

  /**
   * @检测密钥是否已经生成并且存在于密钥库中
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  biometricKeysExist (successFunc, errorFunc) {
    console.warn('当前调用SDK：biometricKeysExist => 检测秘钥是否存在于指纹库中，请更换基座调试！')
  }

}

export default native
