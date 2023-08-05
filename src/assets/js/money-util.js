export const softKeyboardHeight = 300

export default {

  /*
   * @description: 格式化百分比
   */
  formatPercent (num) {
    let newNum = num

    if (!/\d+(\.\d+)?/.test(newNum)) {
      newNum = 0
    }
    let result = (newNum * 100).toString(),
      index = result.indexOf('.')

    if (index == -1 || result.substr(index + 1).length <= 4) {
      return result + '%'
    }

    return result.substr(0, index + 5) + '%'
  },

  /*
   * @Description: 格式化金额
   */
  formatCurrency (num) {
    let newNum = num

    if (String(newNum) == 'undefined' || newNum == null || newNum == '') {
      return '0.00'
    } else if (parseFloat(newNum) > -0.01 && parseFloat(newNum) < 0.0) {
      return '0.00'
    } else {
      newNum = newNum.toString().replace(/\$|,/g, '')
      if (isNaN(newNum)) {
        newNum = '0.00'
      } else {
        let sign = (newNum == (newNum = Math.abs(newNum)))

        newNum = Math.floor((newNum * 100) + 0.50000000001)
        let cents = newNum % 100

        newNum = Math.floor(newNum / 100).toString()
        if (cents < 10) {
          cents = '0' + cents
        }
        for (let i = 0; i < Math.floor((newNum.length - (1 + i)) / 3); i++) {
          newNum = newNum.substring(0, newNum.length - ((4 * i) + 3)) + ',' +
          newNum.substring(newNum.length - ((4 * i) + 3))
        }

        return '' + (((sign) ? '' : '-') + '' + newNum + '.' + cents)
      }
    }
  },

  /*
   * @description: 输入金额小数点后最多保留两位的方法
   */
  moneyToFixed (money) {
    //参数值为要进行动态修改的金额属性
    if (!money) {
      return
    }
    let store = money,
      regStrs = [
        //禁止录入整数部分两位以上，但首位为0
        [ '^0(\\d+)$', '$1' ],
        //禁止录入任何非数字和点
        [ '[^\\d\\.]+$', '' ],
        //禁止录入两个以上的点
        [ '\\.(\\d?)\\.+', '.$1' ],
        //禁止录入小数点后两位以上
        [ '^(\\d+\\.\\d{2}).+', '$1' ]
      ],
      i

    for (i = 0; i < regStrs.length; i++) {
      let reg = new RegExp(regStrs[i][0])

      store = store.replace(reg, regStrs[i][1])
    }
    
    return store
  },

  /*
   * @description: 数字金额大写转换(可以处理整数,小数,负数)
   */
  currencyToUpCase (n) {
    let newValue = n,
      fraction = [ '角', '分' ],
      digit = [ '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' ],
      unit = [
        [ '元', '万', '亿', '兆' ],
        [ '', '拾', '佰', '仟' ]
      ],
      head = n < 0 ? '欠' : ''

    newValue = Math.abs(n)
    if (String(newValue) == 'undefined' || newValue == '' || newValue == 0 || isNaN(parseInt(newValue, 10))) {
      return '零元整'
    } else {
      let s = ''

      for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(newValue * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
      }
      s = s || '整'
      newValue = Math.floor(newValue)

      for (let i = 0; i < unit[0].length && newValue > 0; i++) {
        let p = ''

        for (let j = 0; j < unit[1].length && newValue > 0; j++) {
          p = digit[newValue % 10] + unit[1][j] + p
          newValue = Math.floor(newValue / 10)
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
      }

      return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整')
    }
  },
  
  /*
   * @description: 将数字按规则格式为小数，小数的位数和小数点符号可定制
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * decPoint：小数点符号
   * thousandsSep：千分位符号
   */
  numberFormat (number, decimals, decPoint, thousandsSep) {
    let argNumber = number

    argNumber = (argNumber + '').replace(/[^0-9+-Ee.]/g, '')
    let n = !isFinite(+argNumber) ? 0 : +argNumber,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
      dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
      s = '',
      toFixedFix = function (nn, prece) {
        let k = Math.pow(10, prece)

        return '' + (Math.ceil(nn * k) / k)
      }

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    let re = /(-?\d+)(\d{3})/

    while (re.test(s[0])) {
      s[0] = s[0].replace(re, '$1' + sep + '$2')
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join('0')
    }

    return s.join(dec)
  },

  /*
   * @description: 将数字转换成金额显示
   */
  toMoney (num) {
    let NUM = num

    NUM = parseFloat(NUM)
    NUM = NUM.toFixed(2)
    NUM = NUM.toLocaleString()

    return NUM
  }
}
