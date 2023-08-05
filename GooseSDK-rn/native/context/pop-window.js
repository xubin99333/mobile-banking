import bridge from '../bridge'

export default option => {
  let options = option
  
  if (!options) {
    options = {}
  }
  bridge.callGooseSDK('context', 'popWindow', options)
}
