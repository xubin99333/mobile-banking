import bridge from '../bridge'

/**
 * @解除用户信息绑定
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK('userUnBind', option, successFunc, errorFunc)
}
