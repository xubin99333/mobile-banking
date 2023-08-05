/**
 * 打开离线包（基座调试环境）
 */
import bridge from '../../native/bridge'

import pageInfo from '../../../package-offline.json'

export default (params, callback) => {
  let appid = params.appId
  let destUrl = params.param ? params.param.url : ''

  let url = window.location.protocol + '//' + window.location.host

  // 根据离线包ID查找路径
  for (let i in pageInfo) {
    if (pageInfo[i].packageid === appid) {
      if (destUrl) {
        url += destUrl.substr(4) + '?lang=' + window.defaultLanguage
      } else {
        url += pageInfo[i].url.substr(4) + '?lang=' + window.defaultLanguage
      }
      break
    }
  }
  let obj = params.param
  delete obj.url
  let options = {
    url: url,
    appId: params.appId,
    param: { 
      closeCurrentWindow: params.closeCurrentApp ? true : false, 
      canPullDown: false,
      isShowTitleBar: params.isShowTitleBar
    },
    passData: {...obj}
  }

  let startParams = {};
  startParams.url = options.url;
  startParams.params = options;
  
  bridge.callGooseSDK("context", "pushWindow", startParams);
}
