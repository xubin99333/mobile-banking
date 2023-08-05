#!/usr/bin/env node
const program = require('commander'),
  initComponent = require('../src/init-component'),
  chalk = require('chalk')

let showHelp = () => {
  console.log('  npm run init-component <component>')
  console.log('  默认会生成到src/components 目录下')
  console.log('     Examples: ' + chalk.yellow('npm run init-component component'))
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

  // 获取npm参数
  packageConfig = process.argv,

  // 【适配IDE传参】判断传入参数是否是执行命令npm run init-component -- --component 组件名称
  configIndex = packageConfig.indexOf('--component')

if (configIndex != -1 && packageConfig.length >= configIndex + 2) {
  params = packageConfig[configIndex + 1].split(',')
} else {
  help()
  params = process.argv.splice(2)
  program.cwd = process.cwd()
}

if (!params || params.length < 1) {
  showHelp()
} else {
  let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')

  if (!reg.test(params[0])) {
    initComponent(params[0])
  } else {
    console.log(chalk.red('输入格式有误，请重新输入'))
  }
}

