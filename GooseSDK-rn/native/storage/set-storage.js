
/**
 * @设置缓存sessionStorage
 * @author 卢鹏宇
 */
export default (key, value) => {
  if (key && (value || value == 0)) {
    sessionStorage.setItem(key, value)
  }
}
