let tools = {
  /**
   * @获取参数
   * @author 卢鹏宇
   * @param {*} options
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  getStartupParams(options, successFunc, errorFunc) {
    let result = {}
    const keys = options.key
    for (let i in keys) {
      if (i === 'url') {
        result[i] = window.location.href
      } else {

        let dataList = sessionStorage.getItem('/www' + location.pathname)
        
        if (dataList && JSON.parse(dataList)[keys[i]]) {
          result[keys[i]] = JSON.parse(dataList)[keys[i]]
        } else {
          if (errorFunc) {
            errorFunc(result)
          }
        }

      }
    }
    if (successFunc) {
      successFunc(result)
    }
  },
  /**
   * @获取设备ID
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  getDeviceInfo(successFunc, errorFunc) {
    console.warn('当前调用SDK：getDeviceInfo => 获取设备ID，选择图片，请更换基座调试！');
  },
  /**
   * @获取当前离线包信息
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  getOfflinePackageInformation(successFunc, errorFunc) {
    console.warn('当前调用SDK：getOfflinePackageInformation => 获取当前离线包信息，选择图片，请更换基座调试！');
  },
  
  /**
   * @数据库存储-存储数据到客户端
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  setAPPDataStorage(option, successFunc, errorFunc) {
    let saveData = option.data
    for (let i in saveData) {
      localStorage.setItem(saveData[i].key, saveData[i].value)
    }
    if (successFunc) {
      successFunc({ status: '1' })
    }
  },
  /**
   * @数据库存储-获取客户端存储数据
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  getAPPDataStorage(option, successFunc, errorFunc) {
    let result = {},
      keys = option.keys
    for (let i in keys) {
      if (localStorage.getItem(keys[i])) {
        result[keys[i]] = localStorage.getItem(keys[i])
      }
    }
    if (successFunc) {
      successFunc({ status: '1', data: result })
    }
  },
  /**
   * @数据库存储-删除客户端存储数据
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  removeAPPDataStorage(option, successFunc, errorFunc) {
    let keys = option.keys
    for (let i in keys) {
      sessionStorage.removeItem(keys[i])
    }
    if (successFunc) {
      successFunc({ status: '1' })
    }
  },

  /**
   * @缓存存储-存储数据到缓存
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  setAPPDataCache(option, successFunc, errorFunc) {
    let saveData = option.data,
      cacheData = JSON.parse(sessionStorage.getItem('CACHEDATA'))

    if (cacheData) {
      sessionStorage.removeItem('CACHEDATA')
    } else {
      cacheData = {}
    }

    for (let i in saveData) {
      cacheData[saveData[i].key] = saveData[i].value
      sessionStorage.setItem('CACHEDATA', JSON.stringify(cacheData))
    }
    if (successFunc) {
      successFunc({ status: '1' })
    }
  },
  /**
   * @缓存存储-获取缓存存储数据
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  getAPPDataCache(option, successFunc, errorFunc) {
    let result = {},
      keys = option.keys,
      cacheData = JSON.parse(sessionStorage.getItem('CACHEDATA'))

    if (cacheData) {
      for (let i in keys) {
        if (cacheData[keys[i]]) {
          result[keys[i]] = cacheData[keys[i]]
        }
      }
    } else {
      if (errorFunc) {
        errorFunc({ status: '0' })
      }
    }

    if (successFunc) {
      successFunc({ status: '1', data: result })
    }
  },
  /**
   * @缓存存储-删除缓存存储数据
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  removeAPPDataCache(option, successFunc, errorFunc) {
    let keys = option.keys,
      cacheData = JSON.parse(sessionStorage.getItem('CACHEDATA'))
      sessionStorage.removeItem('CACHEDATA')
    for (let i in keys) {
      if (cacheData[keys[i]]) {
        delete cacheData[keys[i]]
      }
      sessionStorage.setItem('CACHEDATA', JSON.stringify(cacheData))
    }
    if (successFunc) {
      successFunc({ status: '1' })
    }
  },

  /**
   * @定位获取当前地理位置
   * @author 卢鹏宇
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  location(successFunc, errorFunc) {
    console.warn('当前调用SDK：location => 定位获取当前地理位置，选择图片，请更换基座调试！');
  },

  /**
   * @选择相机或者相册，选择图片
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  chooseImage(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：chooseImage => 选择相机或者相册，选择图片，请更换基座调试！');
  },
  /**
   * @相机
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  takePhoto(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：takePhoto => 相机，请更换基座调试！')
  },
  /**
   * @相册
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  selectPhoto(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：selectPhoto => 相册，请更换基座调试！')
  },
  /**
   * @分享
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  share(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：share => 分享，请更换基座调试！')
  },
  /**
   * @设置手势密码
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  setGestureLock(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：setGestureLock => 设置手势密码，请更换基座调试！');
  },
  /**
   * @验证手势密码
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  decryptLock(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：decryptLock => 验证手势密码，请更换基座调试！');
  },
  /**
   * @重置手势密码
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  resetGestureLock(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：resetGestureLock => 重置手势密码，请更换基座调试！');
  },
  /**
   * @用户信息绑定
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  userBind(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：userBind => 用户信息绑定，请更换基座调试！');
    successFunc({status: true})
  },
  /**
   * @解除用户信息与设备绑定
   * @author 卢鹏宇
   * @param {*} option
   * @param {*} successFunc
   * @param {*} errorFunc
   */
  userBind(option, successFunc, errorFunc) {
    console.warn('当前调用SDK：userBind => 解除用户信息与设备绑定，请更换基座调试！');
    successFunc({status: true})
  },

}

export default tools;