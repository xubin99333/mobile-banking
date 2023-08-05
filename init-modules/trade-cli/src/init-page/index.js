const fs = require('fs'),
  process = require('process'),
  chalk = require('chalk'),
  inquirer = require('inquirer'),
  pageBasePath = `${process.cwd()}/src/pages`,
  templateBasePath = `${process.cwd()}/init-modules/init-templates/page-template`,
  htmlTemplatePath = `${templateBasePath}/app-skeleton.html`,
  jsTemplatePath = `${templateBasePath}/app.js`,
  vueTemplatePath = `${templateBasePath}/app.vue`,
  configTemplatePath = `${templateBasePath}/config`,

  /*
   * 递归复制文件
   * @author 孟庆云
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

let writePage = (result, pagename, pagePath, pageFileName) => {
  // 根据所选的是否需要骨架屏模板信息，创建骨架屏模板
  if (result.isSkeleton) {
    const pageConfigHtml = `${pagePath}/${pagename}-skeleton.html`,

      pageContent = fs.readFileSync(htmlTemplatePath, {
        encoding: 'UTF-8'
      })

    fs.writeFileSync(pageConfigHtml, pageContent, { encoding: 'UTF-8' })
  }

  // 创建app.js
  const pageConfigJs = `${pagePath}/app.js`,
    pageContentJS = fs
      .readFileSync(jsTemplatePath, { encoding: 'UTF-8' })
      .replace(/\${pageFileName}/g, pageFileName)

  fs.writeFileSync(pageConfigJs, pageContentJS, { encoding: 'UTF-8' })

  // 创建App.vue
  const pageConfigVue = `${pagePath}/${pageFileName}.vue`,
    pageContentVue = fs
      .readFileSync(vueTemplatePath, { encoding: 'UTF-8' })
      .replace(/\${pageFileName}/g, pageFileName)
      .replace(/\${title}/g, pagename)

  fs.writeFileSync(pageConfigVue, pageContentVue, { encoding: 'UTF-8' })

  // 创建空目录components
  fs.mkdirSync(`${pagePath}/components`)

  // 创建config和config/lang目录
  fs.mkdirSync(`${pagePath}/config`, { recursive: true })

  // 处理config目录
  copyFileRecursive(configTemplatePath, `${pagePath}/config`)
  console.log(chalk.green('恭喜您，交易创建成功！'))
}

module.exports = (packagename, pagename, isSkeleton) => {
  let pagePath = '',
    pageFileName = ''

  if (pagename.indexOf('-') > -1) {
    let pageNList = pagename.split('-')
    pageNList.forEach(element => {
      pageFileName += element.substring(0, 1).toUpperCase() + element.substring(1)
    })
    pageFileName += 'App'
  } else {
    pageFileName = pagename.substring(0, 1).toUpperCase() + pagename.substring(1) + 'App'
  }
  
  if (packagename == '') {
    //无上级文件-位于pages/下的更目录
    console.log(chalk.red('离线包目录必输！'))
    process.exit(0)
  } else {
    //有上级目录，为父文件的子目录
    console.log('离线包名称: ', packagename)
    console.log('页面名称: ', pagename)
    pagePath = pageBasePath + `/${packagename}/${pagename}`
  }
  // 如果交易目录不存在，首先创建
  if (fs.existsSync(pagePath)) {
    console.log('当前文件夹已存在，无需重复创建!')
  } else if (isSkeleton !== null) {
    let result = { isSkeleton: isSkeleton }

    fs.mkdirSync(pagePath, { recursive: true })
    writePage(result, pagename, pagePath, pageFileName)
  } else {
    fs.mkdirSync(pagePath, { recursive: true })
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'isSkeleton',
          message: '是否需要骨架屏模板?',
          default: true
        }
      ])
      .then(result => {
        writePage(result, pagename, pagePath, pageFileName)
      })
  }
}
