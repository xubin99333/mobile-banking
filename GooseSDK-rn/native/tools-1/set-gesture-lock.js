import bridge from '../bridge'

/**
 * @设置手势密码
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'setGestureLock', option, successFunc, errorFunc
  )
}
