import bridge from '../bridge'

/**
 * @数据库存储-存储数据到客户端
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'setAPPDataStorage', option, successFunc, errorFunc
  )
}

