import bridge from '../../native/bridge'

export default option => {
  let obj = {};
  obj.url = option.url;
  obj.params = option;
  bridge.callGooseSDK("context", "pushWindow", obj);
}