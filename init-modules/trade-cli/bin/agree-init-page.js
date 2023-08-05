#!/usr/bin/env node
const program = require('commander'),
  initPage = require('../src/init-page'),
  chalk = require('chalk'),
  fs = require('fs')

let showHelp = () => {
  console.log('  npm run init-page <offlinepackage> <name>')
  console.log('  <offlinepackage>: 离线包名称')
  console.log('  <name>: 页面名称')
  console.log('     Examples: ' + chalk.yellow('npm run init-page demo index'))
}

program.on('--help', () => {
  showHelp()
})

let help = () => {
    program.parse(process.argv)
    if (program.args.length < 1) {
      return program.help()
    }
  },
  params = [],

  isSkeleton = null,

  // 获取npm参数
  packageConfig = process.argv,

  // 【适配IDE传参】判断传入参数是否是执行命令npm run init-page -- --page 离线包名称,页面名称,是否需要骨架屏【0-否，1-是】
  configIndex = packageConfig.indexOf('--page')

if (configIndex != -1 && packageConfig.length >= configIndex + 2) {
  let pageInfo = packageConfig[configIndex + 1].split(',')

  //离线包名称
  params[0] = pageInfo[0]
  //页面名称
  params[1] = pageInfo[1]
  isSkeleton = pageInfo[2] === '0' ? false : true
} else {
  help()
  program.cwd = process.cwd()
  params = process.argv.splice(2)
}

if (!params || params.length < 1 || params.length > 3) {
  showHelp()
} else {
  let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')

  if (params.length == 1) {
    showHelp()
  } else if (params.length == 2) {
    if (!reg.test(params[0]) && !reg.test(params[1])) {
      // 验证离线包名称是否正确
      if (fs.existsSync(`${process.cwd()}/src/pages/${params[0]}`)) {
        if (!fs.existsSync(`${process.cwd()}/src/pages/${params[0]}/${params[1]}`)) {
          initPage(params[0], params[1], isSkeleton)
        } else {
          console.log(chalk.red(`离线包 ${params[0]} 下的页面 ${params[1]} 已存在`))
        }
      } else {
        console.log(chalk.red(`离线包 ${params[0]} 不存在`))
      }
    } else {
      showHelp()
    }
  }
}
