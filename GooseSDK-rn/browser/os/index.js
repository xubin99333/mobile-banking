/**
 * @description 获取操作系统的相关信息
 * @author 孟庆云
 */
export default () => {
  let userAgentStr = navigator.userAgent

  const isAndroid = userAgentStr.indexOf('Android') > -1
  const isiPhone = userAgentStr.indexOf('iPhone') > -1
  const isiPad = userAgentStr.indexOf('iPad') > -1

  userAgentStr = userAgentStr.toLowerCase()

  let systemVersion = ''

  if (isAndroid) {
    const androidVersion = userAgentStr.match(/ android (.*?);/)
    if (androidVersion && androidVersion.length > 1) {
      systemVersion = androidVersion[1].replace(/_/g, '.')
    } else {
      systemVersion = '-'
    }
  }
  if (isiPhone) {
    const iPhoneVersion = userAgentStr.match(/cpu iphone os (.*?) like mac os/)
    if (iPhoneVersion && iPhoneVersion.length > 1) {
      systemVersion = iPhoneVersion[1].replace(/_/g, '.')
    } else {
      systemVersion = '-'
    }
  }
  if (isiPad) {
    const iPadVersion = userAgentStr.match(/ipad; cpu os (.*?) like mac os/)
    if (iPadVersion && iPadVersion.length > 1) {
      systemVersion = iPadVersion[1].replace(/_/g, '.')
    } else {
      systemVersion = '-'
    }
  }

  return {
    //移动终端浏览器版本信息
    android: isAndroid, //android终端
    iPhone: isiPhone, //是否为iPhone或者QQHD浏览器
    iPad: isiPad, //是否iPad
    version: systemVersion,
    runtime: window.AlipayJSBridge ? 'app' : 'browser'
  }
}

