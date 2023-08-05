import bridge from '../bridge'

/**
 * @定位获取当前地理位置
 * @author 卢鹏宇
 */
export default (successFunc) => {
  bridge.callAMAPSDK('getLocation', {}, res => {
    console.log('获取地理位置getLocation', res);
    if (res.code == '1' && res.data) {
      successFunc(res.data)
    }
  })
}

