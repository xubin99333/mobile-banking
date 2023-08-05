import bridge from '../bridge'

/**
 * @打开通讯录
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'getContacts', {}, successFunc, errorFunc
  )
}