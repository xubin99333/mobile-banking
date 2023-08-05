
/**
 * @删除缓存localStorage
 * @author 卢鹏宇
 */
export default (key) => {
  if (key) {
    localStorage.removeItem(key)
  }
}
