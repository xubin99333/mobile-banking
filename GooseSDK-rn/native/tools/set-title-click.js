/**
 * @设置主标题点击事件
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  document.addEventListener('titleClick', res => {
    console.warn('SDK:titleClick注入完成，继续执行 ' + new Date())
    successFunc(res.data)
  }, false)
}
