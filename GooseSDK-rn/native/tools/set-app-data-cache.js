import bridge from '../bridge'

/**
 * @缓存存储-存储数据到缓存
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'setAPPDataCache', option, successFunc, errorFunc
  )
}

