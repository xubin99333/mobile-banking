import bridge from '../bridge'

/**
 * @相册
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'tools', 'selectPhoto', option, successFunc, errorFunc
  )
}

