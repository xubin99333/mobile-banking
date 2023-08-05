import bridge from '../bridge'

/**
 * @获取当前离线包信息
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'getOfflinePackageInformation', {}, successFunc, errorFunc
  )
}