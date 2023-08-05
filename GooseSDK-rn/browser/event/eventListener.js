
export default function on(eventName, func) {
  console.warn('当前调用SDK：on => 事件监听，当前事件名称：' + eventName)
  document.addEventListener(
    eventName,
    function (e) {
      e.preventDefault()

      func(e.detail.data ? e.detail.data : new Object());
    },
    false
  );
}
