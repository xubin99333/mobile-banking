// string工具类
export default {

  /*
   * @description: 获取客户姓氏
   */
  getShortName (custname) {
    let engRegex = /^[A-Za-z]+$/,
      custshortname = '',
      familyNameArray = [ '欧阳', '太史', '端木', '上官', '司马', '东方', '独孤', '南宫', '万俟', '闻人', '夏侯', '诸葛', '尉迟', '公羊', '赫连', '澹台', '皇甫',
        '宗政', '濮阳', '公冶', '太叔', '申屠', '公孙', '慕容', '仲孙', '钟离', '长孙', '宇文', '城池', '司徒', '鲜于', '司空', '汝嫣', '闾丘', '子车', '亓官',
        '司寇', '巫马', '公西', '颛孙', '壤驷', '公良', '漆雕', '乐正', '宰父', '谷梁', '拓跋', '夹谷', '轩辕', '令狐', '段干', '百里', '呼延', '东郭', '南门',
        '羊舌', '微生', '公户', '公玉', '公仪', '梁丘', '公仲', '公上', '公门', '公山', '公坚', '左丘', '公伯', '西门', '公祖', '第五', '公乘', '贯丘', '公皙',
        '南荣', '东里', '东宫', '仲长', '子书', '子桑', '即墨', '达奚', '褚师' ]

    if (engRegex.test(custname.replace(new RegExp(/ /g), ''))) {
      //正则表达式校验通过，英文姓名
      let custnames = custname.split(' ')

      custshortname = custnames[custnames.length - 1]
    } else {
      //正则表达式校验不通过，中文姓名
      let familyName = custname.substr(0, 2)

      for (let i = 0; i < familyNameArray.length; i++) {
        if (familyNameArray[i] == familyName) {
          //是复姓
          custshortname = familyName

          return custshortname
        }
      }
      // custshortname = custname.substr(1, custname.length - 1)
      custshortname = custname[0]
    }

    return custshortname
  },

  /*
   * @description: 判断是否为空
   */
  isEmpty (obj) {
    try {
      if (obj == null || String(obj) == 'undefined') {
        return true
      }
      //判断数字是否是NaN
      if (typeof obj === 'number') {
        if (isNaN(obj)) {
          return true
        } else {
          return false
        }
      }
      //判断参数是否是布尔、函数、日期、正则，是则返回false
      if (typeof obj === 'boolean' || typeof obj === 'function' || obj instanceof Date || obj instanceof RegExp) {
        return false
      }
      //判断参数是否是字符串，去空，如果长度为0则返回true
      if (typeof obj === 'string') {
        if (obj.trim().length == 0) {
          return true
        } else {
          return false
        }
      }

      if (typeof obj === 'object') {
        //判断参数是否是数组，数组为空则返回true
        if (obj instanceof Array) {
          if (obj.length == 0) {
            return true
          } else {
            return false
          }
        }

        //判断参数是否是对象，判断是否是空对象，是则返回true
        if (obj instanceof Object) {
          //判断对象属性个数
          if (Object.getOwnPropertyNames(obj).length == 0) {
            return true
          } else {
            return false
          }
        }
      }
    } catch (e) {
      console.error(e)

      return false
    }
  },

  /*
   * @description: 判断是否不为空
   */
  isNotEmpty (obj) {
    try {
      if (obj == null || String(obj) == 'undefined') {
        return false
      }
      //判断数字是否是NaN
      if (typeof obj === 'number') {
        if (isNaN(obj)) {
          return false
        } else {
          return true
        }
      }
      //判断参数是否是布尔、函数、日期、正则，是则返回true
      if (typeof obj === 'boolean' || typeof obj === 'function' || obj instanceof Date || obj instanceof RegExp) {
        return true
      }
      //判断参数是否是字符串，去空，如果长度为0则返回false
      if (typeof obj === 'string') {
        if (obj.trim().length == 0) {
          return false
        } else {
          return true
        }
      }

      if (typeof obj === 'object') {
        //判断参数是否是数组，数组为空则返回false
        if (obj instanceof Array) {
          if (obj.length == 0) {
            return false
          } else {
            return true
          }
        }

        //判断参数是否是对象，判断是否是空对象，是则返回false
        if (obj instanceof Object) {
          //判断对象属性个数
          if (Object.getOwnPropertyNames(obj).length == 0) {
            return false
          } else {
            return true
          }
        }
      }
    } catch (e) {
      console.error(e)

      return false
    }
  },

  /*
   * @description: 判断是否包含空格
   */
  containsWhitespace (str) {
    if (str.indexOf(' ') == -1) {
      // 不存在
      return true
    } else {
      // 存在
      return false
    }
  },

  /*
   * @description: 删除所有空格
   */
  trimAllWhitespace (str) {
    return str.replace(/\s/g, '')
  },

  /*
   * @description: 是否以给定字符串开头（忽略大小写)
   */
  startsWithIgnoreCase (strCode, str) {
    let strCode1 = strCode.toLocaleUpperCase(),
      str1 = str.toLocaleUpperCase()

    if (strCode1.indexOf(str1) == 0) {
      return true
    } else {
      return false
    }
  },

  /*
   * @description: 是否以给定字符串开头（不忽略大小写）
   */
  startsWith (strCode, str) {
    if (strCode.indexOf(str) == 0) {
      return true
    } else {
      return false
    }
  },

  /*
   * @description: 是否以给定字符串结束（忽略大小写）
   */
  endsWithIgnoreCase (strCode, str) {
    let strCode1 = strCode.toLocaleUpperCase(),
      str1 = str.toLocaleUpperCase()

    return strCode1.slice(-str1.length) == str1
  },

  /*
   * @description: 是否以给定字符串结束（不忽略大小写）
   */
  endsWith (strCode, str) {
    return strCode.slice(-str.length) == str
  },

  /*
   * @description: 替换出现的字符串
   */
  replace (str, oldStr, newStr) {
    return str.replace(oldStr, newStr)
  },

  /*
   * @description: 替换全部出现的字符串
   */
  replaceAll (str, oldStr, newStr) {
    return str.replace(new RegExp(oldStr, 'gm'), newStr)
  },

  /*
   * @description: 拆分字符串
   */
  split (strCode, str) {
    let reg = new RegExp(str, 'g')

    return strCode.replace(reg, '')
  }
}
