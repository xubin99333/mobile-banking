/**
 * @description 生成全部离线包
 * @author lu
 */
const os = require('os')
const concurrently = require('concurrently')
//所有打包命令列表
let packageCommandList = []
//一次执行打包命令数量
let onceExecuteCommandCount = os.cpus().length / 2
//打包计时开始时间
let startDate = 0
//执行失败的命令列表
let executeFailCommandList = []

let packageList = require('../package-offline.json')

// 执行打包命令
let execute = executeCommandCount => {
  let executeCommandList = []
  try {
    for (let i = 0; i < executeCommandCount; i++) {
      executeCommandList[i] = packageCommandList[i]
    }
    console.log(`即将执行以下打包命令`)
    console.log(executeCommandList)
    concurrently(executeCommandList).then(() => {
      for (let i = 0; i < executeCommandList.length; i++) {
        console.log(`离线包: ${executeCommandList[i].substring(14)} 打包完成`)
      }
      packageCommandList.splice(0, executeCommandList.length)
      handle()
    }, err => {
      console.log(err)
      for (let j = 0; j < err.length; j++) {
        if (err[j] == 1) {
          console.log(`${executeCommandList[j]} 命令执行失败，等待打包完毕后执行`)
          executeFailCommandList.push(executeCommandList[j])
        } else {
          console.log(`离线包: ${executeCommandList[j].substring(14)} 打包完成`)
        }
      }
      packageCommandList.splice(0, executeCommandList.length)
      handle()
    })
  } catch (error) {
    console.log(`打包出错，错误信息如下 ${error}`)
    console.log(`耗时 ${(new Date().getTime() - startDate) / 1000} 秒`)
  }
}

// 处理离线包
let handle = () => {
  //未执行的打包命令数量>0
  if (packageCommandList.length > 0) {
    console.log(`剩余${packageCommandList.length}个。`)
    //未执行的打包命令数量>设置的一次执行的打包命令数量
    if (packageCommandList.length > onceExecuteCommandCount) {
      execute(onceExecuteCommandCount)
    } else {
      execute(packageCommandList.length)
    }
  } else if (executeFailCommandList.length > 0) {
    //如果打包失败命令数量>0，则重新执行打包失败的命令
    console.log(`执行失败命令列表如下,即将重新执行`)
    console.log(executeFailCommandList)
    packageCommandList = Object.assign(packageCommandList, executeFailCommandList)
    executeFailCommandList.splice(0, executeFailCommandList.length)
    execute(packageCommandList.length)
  } else {
    console.log(`所有离线包已打包完成! 耗时 ${(new Date().getTime() - startDate) / 1000} 秒,请前往offline-packages文件夹查看`)
  }
}

//开始
let start = () => {
  startDate = new Date().getTime()
  // 获取npm参数
  console.log(packageList)

  let buildList = []

  Object.keys(packageList).forEach(key => {
    buildList.push(key)
  })

  for (let i = 0; i < buildList.length; i++) {
    packageCommandList.push(`npm run build ${buildList[i]}`)
  }
  handle()

  // 判断传入参数是否是需要根据packageid来启动对应交易
}

start()
