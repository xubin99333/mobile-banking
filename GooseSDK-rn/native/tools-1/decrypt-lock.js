import bridge from '../bridge'

/**
 * @验证手势密码
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'decryptLock', option, successFunc, errorFunc
  )
}