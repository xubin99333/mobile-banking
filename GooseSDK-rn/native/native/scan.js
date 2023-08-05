import bridge from '../bridge'

/**
 * @扫一扫
 * @author 卢鹏宇
 */
export default () => {
  bridge.callGooseSDK('tools', 'scan')
}