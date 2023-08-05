import bridge from '../bridge'

/**
 * @缓存存储-删除缓存存储数据
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK('removeAPPDataStorage', option, successFunc, errorFunc)
}

