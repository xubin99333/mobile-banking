//方法一扩展（C#中PadLeft、PadRight）
String.prototype.PadLeft = (len, charStr) => {
  let s = this + ''

  return new Array(len - s.length + 1).join(charStr, '') + s
}
String.prototype.PadRight = (len, charStr) => {
  let s = this + ''

  return s + new Array(len - s.length + 1).join(charStr, '')
}

/**
 * 日期时间处理函数
 */
export default {

  /*
   * @description: 获取当天的日期yyyyMMdd
   */
  getCurrentDate (split) {
    let date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      strDate = date.getDate()

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    date = 'undefined'
    if (split) {
      return year + split + month + split + strDate
    } else {
      return year + '' + month + '' + strDate
    }
  },

  /*
   * @description: 获取传入日期yyyyMMdd格式
   */
  getFormatDate (date, split) {
    let year = date.getFullYear(),
      month = date.getMonth() + 1,
      strDate = date.getDate()

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }

    if (split) {
      return year + split + month + split + strDate
    } else {
      return year + '' + month + '' + strDate
    }
  },

  /*
   * @description: 获取当天的时间HHmmss
   */
  getCurrentTime (split, millisecondsFlag) {
    let date = new Date(),
      hour = date.getHours()

    if (hour <= 9) {
      hour = '0' + hour
    }
    let minute = date.getMinutes()

    if (minute <= 9) {
      minute = '0' + minute
    }
    let second = date.getSeconds()

    if (second <= 9) {
      second = '0' + second
    }
    let mill = date.getMilliseconds() + ''

    if (split) {
      if (millisecondsFlag) {
        second += '.' + mill.PadLeft(3, 0)
      }

      return hour + split + minute + split + second
    } else {
      if (millisecondsFlag) {
        second += '' + mill.PadLeft(3, 0)
      }

      return hour + '' + minute + '' + second
    }
  },

  /*
   * @description: 获取年月日时分秒
   */
  getCurrentDatetime (split, millisecondsFlag) {
    if (split) {
      return (
        this.getCurrentDate(split) +
        ' ' +
        this.getCurrentTime(':', millisecondsFlag)
      )
    } else {
      return this.getCurrentDate() + this.getCurrentTime('', millisecondsFlag)
    }
  },

  /*
   * @description: 日期字符串格式化
   */
  transformDate (dateString, split) {
    let year = dateString.substring(0, 4),
      month = dateString.substring(4, 6),
      day = dateString.substring(6, 8)

    return year
      .concat(split)
      .concat(month)
      .concat(split)
      .concat(day)
  },

  /*
   * @description: 时间字符串格式化
   */
  transformTime (timeString) {
    let hour = timeString.substring(0, 2),
      minute = timeString.substring(2, 4),
      second = timeString.substring(4, 6)

    return hour.concat(':')
      .concat(minute)
      .concat(':')
      .concat(second)
  },

  /*
   * @description: 年月日时分秒字符串格式化
   */
  transformDatetime (datetimeString, split) {
    let year = datetimeString.substring(0, 4),
      month = datetimeString.substring(4, 6),
      day = datetimeString.substring(6, 8),
      hour = datetimeString.substring(8, 10),
      minute = datetimeString.substring(10, 12),
      second = datetimeString.substring(12, 14)

    return year
      .concat(split)
      .concat(month)
      .concat(split)
      .concat(day)
      .concat(' ')
      .concat(hour)
      .concat(':')
      .concat(minute)
      .concat(':')
      .concat(second)
  },

  /*
   * @description: 日期格式化
   * Created by ruibing on 2015/11/6
   * 对Date的扩展，将 Date 转化为指定格式的String
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   * 例子：
   * (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
   * (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
   */
  
  dateFormat (date, fmt) {
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
      },
      fmtData = fmt

    if (/(y+)/.test(fmtData)) {
      fmtData = fmtData.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmtData)) {
        fmtData = fmtData.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }

    return fmtData
  },

  /**
   * @description: 获取当前月最后一天日期YYYYMMDD
   */
  getCurrentMonthLastDate (split) {
    let date = new Date(),
      lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0),
      year = lastDate.getFullYear(),
      month = lastDate.getMonth() + 1,
      strDate = lastDate.getDate()
    
    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    if (split) {
      return year + split + month + split + strDate
    } else {
      return year + '' + month + '' + strDate
    }
  },

  /**
   * @description: 获取当前月第一天日期YYYYMMDD
   */
  getCurrentMonthFirstDate (split) {
    let date = new Date(),
      lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0),
      year = lastDate.getFullYear(),
      month = lastDate.getMonth() + 1

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (split) {
      return year + split + month + split + '01'
    } else {
      return year + '' + month + ' 01'
    }
  },

  /**
   * @description: 计算两个日期相差天数
   */
  differentDays (startTime, endTime) {
    let trem = Date.parse(new Date(endTime)) - Date.parse(new Date(startTime))

    return Math.floor(trem / (24 * 3600 * 1000))
  },

  /**
   * 获取系统当前年月
   */
  getYearMouth () {
    let date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    let currentData = '' + year + month

    return currentData
  },

  /*
   * 获取三个月前日期
   */
  getThreeMonthsAgoDate (split) {
    let cc = new Date().getTime(),
      halfYear = 365 / 4 * 24 * 3600 * 1000,
      pastResult = cc - halfYear,
      pastDate = new Date(pastResult),
      year = pastDate.getFullYear(),
      month = pastDate.getMonth() + 1,
      strDate = pastDate.getDate()

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    console.log('三个月前=====' + year + '' + month + '' + strDate)
    if (split) {
      return year + split + month + split + strDate
    } else {
      return year + '' + month + '' + strDate
    }
  },

  /*
   * 获取半年前日期
   */
  getHalfAYearAgoDate (split) {
    let cc = new Date().getTime(),
      halfYear = 365 / 2 * 24 * 3600 * 1000,
      pastResult = cc - halfYear,
      pastDate = new Date(pastResult),
      year = pastDate.getFullYear(),
      month = pastDate.getMonth() + 1,
      strDate = pastDate.getDate()

    if (month >= 1 && month <= 9) {
      month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate
    }
    console.log('半年前=====' + year + '' + month + '' + strDate)
    if (split) {
      return year + split + month + split + strDate
    } else {
      return year + '' + month + '' + strDate
    }
  }
}
