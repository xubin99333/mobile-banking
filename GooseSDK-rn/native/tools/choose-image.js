import bridge from '../bridge'

/**
 * @选择相机或者相册，选择图片
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'chooseImage', option, successFunc, errorFunc
  )
}