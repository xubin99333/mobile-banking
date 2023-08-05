import bridge from '../bridge'

/**
 * @设置标题栏
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
  bridge.callGooseSDK(
    'ui', 'setTitle', option, successFunc, errorFunc
  )
}