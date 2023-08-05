import bridge from '../bridge'

/**
 * @获取设备ID getDeviceInfo => getAppInformation
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callAMAPSDK('getAppInformation', {}, res => {
    if (res.code == '1') {
      successFunc(res.data)
    }
  }, errorFunc)
}