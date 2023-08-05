import bridge from '../bridge'

export default () => {
  bridge.callGooseSDK('context', 'exitApp')
}
