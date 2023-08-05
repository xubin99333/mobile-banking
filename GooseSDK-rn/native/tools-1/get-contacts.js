import bridge from '../bridge'

/**
 * @打开通讯录
 * @author 卢鹏宇
 */
export default (successFunc) => {
  bridge.callAMAPSDK('getMailList', {type: '0'}, res => {
    if (res.code == 1) {
      res.data.phoneNumArr = res.data.phoneNumber
      delete res.data.phoneNumber
      successFunc(res.data)
    }
  })
}