/**
 * @设置标题栏左侧按钮点击事件
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  document.addEventListener('LeftOptionMenu', res => {
    console.warn('SDK:LeftOptionMenu ' + new Date())
    successFunc(res.data)
  }, false)
}
