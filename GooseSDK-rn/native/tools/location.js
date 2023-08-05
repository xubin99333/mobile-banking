import bridge from '../bridge'

/**
 * @定位获取当前地理位置
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'location', {}, successFunc, errorFunc
  )
}

