import bridge from '../bridge'

/**
 * @相机
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'takePhoto', option, successFunc, errorFunc
  )
}
