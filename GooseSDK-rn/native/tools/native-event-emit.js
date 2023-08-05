import bridge from '../bridge'

/**
 * @H5触发RN监听事件
 * @author 卢鹏宇
 */
export default (option, successFunc, errorFunc) => {
	bridge.callGooseSDK(
		'tools', 'nativeEventEmit', option, successFunc, errorFunc
	)
}

