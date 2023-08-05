import bridge from '../bridge'

/**
 * @缓存存储-获取缓存存储数据
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'getAPPDataCache', option, successFunc, errorFunc
  )
}