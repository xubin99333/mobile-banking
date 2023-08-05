/**
 * @设置标题栏右侧按钮点击事件
 * @author 卢鹏宇
 */
export default (successFunc, errorFunc) => {
  document.addEventListener('RightOptionMenu', res => {
    console.warn('SDK:RightOptionMenu注入完成，继续执行 ' + new Date())
    successFunc(res.data)
  }, false)
}
