import bridge from '../bridge'

/**
 * @相册
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callAMAPSDK(
    'Tools', 'selectPhoto', option, successFunc, errorFunc
  )
}

