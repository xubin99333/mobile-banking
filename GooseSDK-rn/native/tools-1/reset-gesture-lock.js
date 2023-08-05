import bridge from '../bridge'

/**
 * @重置手势密码
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'resetGestureLock', option, successFunc, errorFunc
  )
}

