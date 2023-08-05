import bridge from '../bridge'
import osInfo from '../os'
/**
 * @获取参数
 * @author 卢鹏宇
 */
export default (data, successFunc, errorFunc) => {
  let key = data.key
  let os = osInfo()
  bridge.callGooseSDK('getStartupParams', data, result => {
    if (os.android) {
        console.log('获取 Android 启动参数', result)
        let object = Object.assign(result['data'], result['data']['data'] ? result['data']['data'] : {})
        
        if (key.length > 0) {
          let res = {}
          for (let node in key) {
            if (object[key[node]]) {
              res[key[node]] = object[key[node]]
            }
          }
          successFunc(res)
        } else {
          successFunc(object)
        }
        // callback(result)
    } else {
      console.log('获取 Ios 启动参数')
      let object = {}
      AMAPJSBridge.call('getStartupParams', data, function(result) {
        console.log( '获取startH5App启动参数 => ' + JSON.stringify(result) )
        if (result.code == '1'  && Object.keys(result.data).length > 0 ) {
          object = result.data
        }
        AMAPJSBridge.call('startupParams', data, startupParams => {
          console.log( '获取pushWindow启动参数 => ' + JSON.stringify(startupParams) )
          if (startupParams.code == '1'  && Object.keys(startupParams.data).length > 0 ) {
            object = startupParams.data
          }
          if (key.length > 0) {
            let res = {}
            for (let node in key) {
              res[key[node]] = object[key[node]]
            }
            successFunc(res)
          } else {
            successFunc(object)
          }

        })
         
      }, err => {
        console.log('获取ios启动参数失败', JSON.stringify(err))
      })
    }
  }, errorFunc)
}