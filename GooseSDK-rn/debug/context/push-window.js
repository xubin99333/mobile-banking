import bridge from '../../native/bridge'

export default options => {
  let url = window.location.protocol + '//' + window.location.host
  if (url.indexOf('?') !== -1) {
    url += '/' + options.url + '&lang=' + window.defaultLanguage
  } else {
    url += '/' + options.url + '?lang=' + window.defaultLanguage
  }
  options.url = url
  if (options.param) {
    options.param.canPullDown = false
  } else {
    options.param = { canPullDown: false }
  }
  let obj = {};
  obj.url = url;
  obj.params = options;
  bridge.callGooseSDK("context", "pushWindow", obj);
}