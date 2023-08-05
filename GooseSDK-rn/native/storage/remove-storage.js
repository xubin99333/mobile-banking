
/**
 * @删除缓存sessionStorage
 * @author 卢鹏宇
 */
export default (key) => {
  if (key) {
    sessionStorage.removeItem(key)
  }
}
