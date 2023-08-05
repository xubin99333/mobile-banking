let storage = {
  /**
   * 设置本地存储
   * */
  setAppStorage (key, value) {
    if (key && (value || value == 0)) {
      localStorage.setItem(key, value);
    }
  },
  /**
   * 获取本地存储数据
   * */
  getAppStorage (key) {
    if (key) {
      return localStorage.getItem(key);
    }
  },
  removeAppStorage (key) {
    if (key) {
      localStorage.removeItem(key);
    }
  },
  /**
   * 设置缓存数据
   * */
  setStorage (key, value) {
    if (key && (value || value == 0)) {
      sessionStorage.setItem(key, value);
    }
  },
  /**
   * 获取缓存数据
   * */
  getStorage (key) {
    if (key) {
      return sessionStorage.getItem(key);
    }
  },
  removeStorage (key) {
    if (key) {
      sessionStorage.removeItem(key);
    }
  }
}

export default storage;