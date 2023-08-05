/**
 * @description 【适配IDE传参】根据传入参数生成离线包。注意：onceExecuteCommandCount为一次并行执行打包命令的条数，根据个人电脑配置设置，会启用onceExecuteCommandCount个进程
 * 命令为：npm run build-multiple -- --packageList 离线包名称，多个离线包用,隔开，如：npm run build-multiple -- --packageList login,index
 * @author 李振华
 * @modify 聂薇苇 lu
 */
const os = require('os')
const process = require('process')
const concurrently = require('concurrently')
const chalk = require('chalk')
//所有打包命令列表
let packageCommandList = []
//一次执行打包命令数量
let onceExecuteCommandCount = os.cpus().length / 2
//打包计时开始时间
let startDate = 0
//执行失败的命令列表
let executeFailCommandList = []

//开始
let start = () => {
  startDate = new Date().getTime()
  // 获取npm参数
  let packageConfig = process.argv
  // 判断传入参数是否是需要根据packageid来启动对应交易
  let configIndex = packageConfig.indexOf('--packageList')
  if (configIndex != -1 && packageConfig.length >= configIndex + 2) {
    let packList = packageConfig[configIndex + 1].split(',')
    for (let i = 0; i < packList.length; i++) {
      packageCommandList.push(`npm run build ${packList[i]}`)
    }
  } else {
    console.log(chalk.red('没有找到要打包的内容'))
    process.exit(0)
  }
  handle()
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
  } 
  //如果打包失败命令数量>0，则重新执行打包失败的命令
  else if (executeFailCommandList.length > 0) {
    console.log(`执行失败命令列表如下,即将重新执行`)
    console.log(executeFailCommandList)
    packageCommandList = Object.assign(packageCommandList,executeFailCommandList)
    executeFailCommandList.splice(0,executeFailCommandList.length)
    execute(packageCommandList.length)
  } else {
    console.log(`所有离线包已打包完成! 耗时 ${ (new Date().getTime() - startDate)/1000 } 秒,请前往offline-packages文件夹查看`)
  }
}
// 执行打包命令
let execute = (executeCommandCount) => { 
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
    }, (err) => {
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
    console.log(`耗时 ${ (new Date().getTime() - startDate)/1000} 秒`)
  }
}

start()