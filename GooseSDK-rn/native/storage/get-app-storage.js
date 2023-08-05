
/**
 * @获取缓存localStorage
 * @author 卢鹏宇
 */
export default (key) => {
  if (key) {
    return localStorage.getItem(key)
  }
}
