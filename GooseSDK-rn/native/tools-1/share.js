import bridge from '../bridge'

/**
 * @分享
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'share', option, successFunc, errorFunc
  )
}
