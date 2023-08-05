import bridge from '../bridge'

export default () => {
  bridge.callGooseSDK('Tools', 'exitApplication')
}
