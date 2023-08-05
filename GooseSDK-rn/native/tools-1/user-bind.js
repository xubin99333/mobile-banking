import bridge from '../bridge'

/**
 * @用户信息绑定
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK('userBind', option, successFunc, errorFunc)
}
