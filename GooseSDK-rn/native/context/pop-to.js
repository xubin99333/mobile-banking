import bridge from '../bridge'

export default (param, data) => {
  let params = param

  if (String(params) == 'undefined') {
    params = -1
  }
  let options = {}

  if (params.urlPattern) {
    options = params
  } else {
    options.number = params
  }
  options.data = data || {}
  bridge.callGooseSDK('context', 'popTo', options)
}
