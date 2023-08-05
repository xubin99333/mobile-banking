import bridge from '../bridge'

export default () => {
  let options = {}
  
  bridge.callGooseSDK('context', 'popToRoot', options)
}
