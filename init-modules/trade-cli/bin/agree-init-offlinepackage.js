#!/usr/bin/env node
const program = require('commander'),
  initOfflinePackage = require('../src/init-offlinepackage'),
  chalk = require('chalk'),
  fs = require('fs')

let showHelp = () => {
  console.log('  npm run init-package <offlinepackage>')
  console.log('  <offlinepackage>: 离线包名称')
  console.log('    Examples: ' + chalk.yellow('npm run init-package demo'))
  console.log('  【注意】')
  console.log('    输入项离线包ID只能是8位数字')
  console.log('    输入项默认入口的格式为/www/<离线包名称>_<页面名称>.html')
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

  // 获取npm参数
  packageConfig = process.argv,
  // 【适配IDE传参】判断传入参数是否是执行命令npm run init-package -- --packageInfo 离线包名称,离线包ID,页面名称,是否需要骨架屏【0-否，1-是】
  configIndex = packageConfig.indexOf('--packageInfo')

if (configIndex != -1 && packageConfig.length >= configIndex + 2) {
  let packageInfo = packageConfig[configIndex + 1].split(',')

  initOfflinePackage(packageInfo[0], packageInfo)
} else {
  help()

  const params = process.argv.splice(2)

  program.cwd = process.cwd()

  if (params.length === 1) {
    const packagename = params[0]
    
    if (fs.existsSync(`./src/pages/${packagename}`)) {
      console.log(chalk.red(`离线包 ${packagename} 已存在！`))
    } else {
      initOfflinePackage(packagename, null)
    }
  } else {
    showHelp()
  }
}

