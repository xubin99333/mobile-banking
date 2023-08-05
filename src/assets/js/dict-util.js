// string工具类
export default {

  /*
   * @description: 通过key 找value
   */
  getValue (array, key) {
    if (!array) {
      // console.log('数据为空')
      return
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].key == key) {
        return array[i].value
      }
    }
  },

  /*
   * @description: 通过value找key
   */
  getKey (array, value) {
    if (!array) {
      // console.log('数据为空')
      return
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].value == value) {
        console.log(array[i].key)

        return array[i].key
      }
    }
  },

  /*
   * @description: 根据字典名称获取字典列表
   */
  getDictList (dictName) {
    for (let item in window.dictInfo) {
      if (item == dictName) {
        return window.dictInfo[item]
      }
    }
  },

  /*
   * @description: 根据字典value获取字典key
   */
  getDictKey (value, dictList) {
    if (value || value == 0) {
      if (dictList) {
        for (let i = 0; i < dictList.length; i++) {
          if (value == dictList[i].value) {
            return dictList[i].key
          }
        }
      }
    }

    return ''
  },

  /*
   * @description:将数据库查询到的数组字典转换为数据对象字典
   */
  changeDictObject (data) {
    let dataRet = {},
      DataKey = '',
      dictTmp = []

    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        DataKey = data[i].DataKey
      }
      if (DataKey != data[i].DataKey) {
        dataRet[DataKey] = dictTmp

        DataKey = data[i].DataKey
        dictTmp = []
      }
      let dictItem = {}

      dictItem.key = data[i].DataKeyVal
      dictItem.value = data[i].Meaning
      dictTmp.push(dictItem)

      if (i == data.length - 1) {
        dataRet[DataKey] = dictTmp
      }
    }

    return dataRet
  },

  /*
   * @description:截取url参数
   */
  getUrlObject (data) {
    let url = data.search,
      theRequest = {}

    if (url.indexOf('?') != -1) {
      let str = url.substr(1),
        strs = str.split('&')

      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
      }
    }

    return theRequest
  },

  /*
   * @description:截取url?后json参数,并转换成obj
   */
  JsonUrlToObj (data) {
    let url = data,
      theRequest = {}

    if (url.indexOf('?') != -1) {
      let str = url.substr(1)

      theRequest = JSON.parse(str)
    }

    return theRequest
  }
}
