// string工具类
let class2type = {},
  getProto = Object.getPrototypeOf,
  toString = class2type.toString,
  hasOwn = class2type.hasOwnProperty,
  fnToString = hasOwn.toString,
  ObjectFunctionString = fnToString.call(Object),
  // 获取数据详细类型
  getRawType = value => {
    let str = Object.prototype.toString.apply(value)

    return str
      .replace('[object', '')
      .replace(']', '')
      .trim()
  },
  // 判断是否为数组非数组
  isArrayLike = obj => {
    if (typeof obj === 'number') {
      return false
    }
    let length = !!obj && 'length' in obj && obj.length,
      type = getRawType(obj).toLowerCase()
      
    if (type === 'function' || (obj != null && obj == obj.window)) {
      return false
    }

    return (type === 'array' || length === 0 || typeof length === 'number') && length > 0 && (length - 1) in obj
  },
  isPrimitive = obj => {
    if (typeof obj !== 'function' && typeof obj !== 'object') {
      return true
    }
    if (obj === null) {
      return true
    }

    return false
  },
  // 判断输入是否为一个纯粹的对象
  isPlainObject = obj => {
    let proto, Ctor

    if (!obj || toString.call(obj) !== '[object Object]') {
      return false
    }
    proto = getProto(obj)
    if (!proto) {
      return true
    }
    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor

    return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
  },
  // 检测数据是不是除了symbol外的原始数据
  isStatic = value => {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'undefined' ||
      value === null
    )
  }

export default {

  /*
   * @description: 深度克隆
   */
  clone (obj) {
    let buf

    if (obj instanceof Array) {
      buf = []
      let i = obj.length

      while (i--) {
        buf[i] = this.clone(obj[i])
      }

      return buf
    } else if (obj instanceof Object) {
      buf = {}
      for (let k in obj) {
        // 为这个对象添加新的属性
        buf[k] = this.clone(obj[k])
      }

      return buf
    } else {
      return obj
    }
  },

  /*
   * @description: 浅克隆函数
   */
  shallowClone (o) {
    const obj = {}

    for (let i in o) {
      obj[i] = o[i]
    }

    return obj
  },

  /*
   * @description: 数组去重，返回一个新数组
   */
  unique (arr) {
    if (!isArrayLike(arr)) {
      return arr
    }
    let result = [],
      objarr = [],
      obj = Object.create(null)

    arr.forEach(item => {
      if (isStatic(item)) {
        let key = item + '_' + getRawType(item)
        
        if (!obj[key]) {
          obj[key] = true
          result.push(item)
        }
      } else if (!objarr.includes(item)) {
        objarr.push(item)
        result.push(item)
      }
    })

    return result
  }
}
