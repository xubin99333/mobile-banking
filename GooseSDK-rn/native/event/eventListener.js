
import bridge from '../bridge'

export default (eventName, func) => {
  console.warn(`当前即将执行GooseSDK=>on事件监听 eventName = ${eventName}`)
  document.addEventListener(eventName,
    e => {
      e.preventDefault()
      console.warn(`当前执行on事件监听，eventName = ${eventName}, 当前监听返回值为：${e.detail.data}`)
      func(e.detail.data ? e.detail.data : new Object())
    },
    false)
  
  bridge.callGooseSDK(
    'on',
    'eventListener',
    {
      eventName: eventName
    },
    '',
    ''
  )
}
