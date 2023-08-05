const fs = require('fs'),
  process = require('process'),
  chalk = require('chalk'),
  inquirer = require('inquirer'),
  packageInfo = require('../../../../package-offline.json'),
  i18nTemplatePath = `${process.cwd()}/init-modules/init-templates/package-template/i18n`,
  childProcess = require('child_process')

  /*
   * 递归复制文件
   */
copyFileRecursive = (source, dest) => {
  if (fs.statSync(source).isDirectory()) {
    // 如果是目录，需要递归复制下面的每一个文件
    const fileList = fs.readdirSync(source)

    for (let i = 0; i < fileList.length; i++) {
      const sourcePathNew = `${source}/${fileList[i]}`,
        destPathNew = `${dest}/${fileList[i]}`

      copyFileRecursive(sourcePathNew, destPathNew)
    }
  } else {
    // 如果是文件，直接复制
    fs.copyFileSync(source, dest)
  }
}

// 创建文件
let writeFile = (packagename, result, pagename, isSkeleton) => {
  // 判断：离线包名称、离线包ID都不能存在
    for (let i in packageInfo) {
      if (packageInfo[i].packageid === result.packageid) {
        console.log(chalk.red(`当前离线包ID[${result.packageid}]已存在!`))
        process.exit(0)
      }
    }
    // 保存配置
    packageInfo[packagename] = result
  
    fs.writeFileSync(process.cwd() + '/package-offline.json',
      JSON.stringify(packageInfo, null, 2),
      {
        encoding: 'utf-8',
        flag: 'w'
      })

    fs.mkdirSync(process.cwd() + '/src/pages/' + packagename)

    fs.mkdirSync(process.cwd() + '/src/pages/' + packagename + '/i18n')

    copyFileRecursive(i18nTemplatePath, process.cwd() + '/src/pages/' + packagename + '/i18n')

    if (pagename) {
      let pageInfo = `${packagename},${pagename},${isSkeleton}`,
        devWorker = childProcess.spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', [ 'run', 'init-page', '--', '--page', pageInfo ], {
          cwd: process.cwd()
        })

      devWorker.stdout.on('data', data => {
        console.log(`${data}`)
      })
  
      devWorker.on('exit', code => {
        if (code === 0) {
          console.log(chalk.green(`退出创建离线包页面服务`))
        }
        process.exit(0)
      })
  
      devWorker.on('error', err => {
        console.log(chalk.red(`创建离线包页面服务错误，错误信息: ${err}`))
        process.exit(0)
      })
    }
  },

  // 输入离线包信息：离线包ID，离线包入口
  inputPackageInfo = packagename => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'packageid',
          message: '请输入离线包ID(8位数字)',
          validate (val) {
            let reg = /\d{8}/g

            if (val.length === 8 && val.match(reg)) {
              return true
            } else {
              return '请输入8位数字'
            }
          }
        },
        {
          type: 'input',
          name: 'url',
          message: '请输入离线包默认入口，默认/www/<离线包名称>_<页面名称>.html',
          validate (val) {
            if (val !== '/www/' && val.indexOf('/www/') === 0) {
              return true
            } else {
              return '必须以/www/开头'
            }
          }
        }
      ])
      .then(result => {
      // 创建文件
        writeFile(packagename, result)
      })
  }

module.exports = (packagename, list) => {
  if (packageInfo[packagename]) {
    console.log(chalk.red(`离线包 ${packagename} 已存在！`))
  } else if (list != null) {
    let result = { packageid: list[1],
      url: `/www/${list[0]}_${list[2]}.html` }

    // 创建文件
    writeFile(packagename, result, list[2], list[3])
  } else {
    //  输入离线包信息
    inputPackageInfo(packagename)
  }
}
