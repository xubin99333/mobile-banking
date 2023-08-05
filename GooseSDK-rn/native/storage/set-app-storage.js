
/**
 * @设置缓存localStorage
 * @author 卢鹏宇
 */
export default (key, value) => {
  if (key && (value || value == 0)) {
    localStorage.setItem(key, value)
  }
}
