/**
 * @设置副标题点击事件
 * @author 卢鹏宇
 */
 export default (successFunc, errorFunc) => {
  document.addEventListener('subtitleClick', res => {
    console.warn('SDK:subtitleClick注入完成，继续执行 ' + new Date())
    successFunc(res.data)
  }, false)
}
