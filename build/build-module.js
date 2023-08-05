/**
 * @deprecated 生成mPaaS公共资源包
 * @author lu
 */

const path = require('path')
const chalk = require('chalk')
const glob = require('glob')
const fs = require('fs-extra')
const archiver = require('archiver')
const process = require('process')
const inquirer = require('inquirer')

console.log('开始构建公共离线包...\n')

const resolve = dir => path.join(__dirname, '../', dir)
const { runtime, runtimeConfig } = require('../environment')
const defaultProtocolPorts = {
  'https:': 443,
  'http:': 80
}
const config = runtimeConfig[runtime]

const outputPath = 'offline-packages/'

const publicResourceParser = new URL(config.publicResource)
const publicResource = publicResourceParser.pathname.substr(1)
//  是否使用默认端口，如果不是默认端口，禁止在windows上构建
const useDefaultPort = defaultProtocolPorts[publicResourceParser.protocol] == publicResourceParser.port

const finallyPath = `${publicResource}/${config.appId}_${config.workspaceId}/`

let packageId = ''

console.log('当前环境配置：\n', config, '\n')

const replaceContent = (file, replaceText) => {
  let str = fs.readFileSync(file, { encoding: 'utf-8' })
  str = str.replace(/\${commonPackagePath}/g, replaceText)
  fs.writeFileSync(file, str, { encoding: 'utf-8' })
}

/**
 * @description 将文件压缩zip
 * @author lu
 */
const archive = () => {
  const arch = archiver('zip')
  const output = fs.createWriteStream(resolve(`${outputPath}/${packageId}.zip`))
  arch.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.warn('stat故障和其他非阻塞错误')
    } else {
      throw err
    }
  })
  output.on('close', () => {
    let size = arch.pointer() / 1024
    size = size > 1024 ? (size / 1024).toFixed(2) + 'MB' : size.toFixed(2) + 'KB'
    console.log(chalk.yellow(`${packageId}.zip => ${size}`))
  })
  arch.pipe(output)
  
  arch.directory(resolve(`${outputPath}/${packageId}`), packageId)

  arch.finalize()
}

/**
 * @description 拷贝文件
 * @author lu
 */
const copyFiles = (sourcePath, targetPath) => {
  if (!useDefaultPort && process.platform === 'win32') {
    console.log(chalk.red('请在macos或者linux环境中运行此脚本'))
    console.log(chalk.red('请在macos或者linux环境中运行此脚本'))
    console.log(chalk.red('请在macos或者linux环境中运行此脚本'))
    process.exit()
  }
  const fileList = glob.sync(resolve(sourcePath + '/**/*.*'))
  const newFileList = []
  fs.removeSync(resolve(`${outputPath}/`))

  fs.emptyDirSync(resolve(`${outputPath}/${packageId}/`))

  fileList.forEach(item => {
    const filePath = item.replace(
      `${sourcePath}/`,
      `${outputPath}/${packageId}/${targetPath}`
    )
    newFileList.push(filePath)
    fs.copySync(item, filePath)
  })

  newFileList.forEach(item => {
    replaceContent(item, targetPath)
  })

  archive()
}

/**
 * @description 获取命令行输入的离线包id
 * @author lu
 */
inquirer
  .prompt([{
      type: 'input',
      name: 'packageId',
      message: '请输入公共离线包ID（8位数字）',
      validate: function (v) {
        return typeof v === 'string' && v.length === 8
      },
      transformer: function (v) {
          return v + '(必须是8位数字)'
      },
  }])
  .then(res => {
    packageId = res.packageId
    copyFiles('public-resource', finallyPath)
  })