// string工具类
export default {

  /*
   * @description: 正则表达式实现trim()去掉开始和结尾的空格
   */
  trimStr (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },

  /*
   * @description: 横线转驼峰命名
   */
  camelize (str) {
    let camelizeRE = /-(\w)/g

    return str.replace(camelizeRE, (_, c) => {
      return c ? c.toUpperCase() : ''
    })
  },

  /*
   * @description: 驼峰命名转横线命名：拆分字符串，使用 - 相连，并且转换为小写
   */
  hyphenate (str) {
    let hyphenateRE = /\B([A-Z])/g

    return str.replace(hyphenateRE, '-$1').toLowerCase()
  },

  /*
   * @description: 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
   */
  isNumber (val) {
    //非负浮点数
    let regPos = /^\d+(\.\d+)?$/,
      //负浮点数
      regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/

    if (regPos.test(val) || regNeg.test(val)) {
      return true
    } else {
      return false
    }
  },

  /*
   * @description: 身份证脱敏
   */
  cdCardDesensitization (param) {
    if (param) {
      return param.replace(/^(.{6})(?:\d+)(.{4})$/, '$1******$2')
    } else {
      return ''
    }
  },

  /*
   * @description: 车牌号脱敏
   */
  carNumDesensitization (val) {
    let result = ''

    if (val) {
      let symbol = val.slice(4, val.length),
        str = ''

      for (let i = 0; i < symbol.length; i++) {
        str = str + '*'
      }
      
      result = val.replace(symbol, str)
    }

    return result
  },

  /*
   * @description: 验证Email格式
   */
  validateEmail (Email) {
    if (Email == null || Email == '') {
      return false
    } else {
      let r = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      if (r.test(Email)) {
        return true
      } else {
        return false
      }
    }
  },

  /*
   * @description: 验证URL格式
   */
  validateURL (url) {
    if (url != '') {
      let r = /^http:\/\/([\w-]+\.)+[\w-]+(\/[\w-]*)?$|^([\w-]+\.)+[\w-]+(\/[\w-]*)?$/

      if (!r.test(url)) {
        return false
      }
    }

    return true
  },

  /*
   * @description: 手机号码合法性验证
   */
  validateMobile (telphone) {
    let Reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/

    if (Reg.test(telphone)) {
      return true
    }

    return false
  }

}
