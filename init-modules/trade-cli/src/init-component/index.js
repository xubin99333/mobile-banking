const fs = require('fs'),
  process = require('process'),
  chalk = require('chalk'),
  componentBasePath = `${process.cwd()}/src/components`,
  vueTemplatePath = `${process.cwd()}/init-modules/init-templates/component-template/app.vue`,
  jsTemplatePath = `${process.cwd()}/init-modules/init-templates/component-template/index.js`

/*
 * 初始化页面
 * @author WangZhe
 */
module.exports = componentname => {
  console.log('组件名：' + componentname)

  const comPath = componentBasePath + `/${componentname}`

  if (fs.existsSync(comPath)) {
    console.log(chalk.red(componentname + '组件已存在'))

    return false
  } else {
    //不存在，将模板储存于目录下
    fs.mkdirSync(comPath, { recursive: true })

    let tradePagePath = '',
      componentnameNew = ''
    // 模板名字是否带-，若是需要将-转成大驼峰
    if (componentname.indexOf('-') > -1) {
      let pageNList = componentname.split('-')
      pageNList.forEach(element => {
        componentnameNew += element.substring(0, 1).toUpperCase() + element.substring(1)
      })
    } else {
      componentnameNew = componentname.substring(0, 1).toUpperCase() + componentname.substring(1)
    }
    
    tradePagePath = comPath + `/${componentnameNew}.vue`

    const pageContent = fs.readFileSync(vueTemplatePath, { encoding: 'UTF-8' }).replace(/\${componentname}/g, componentnameNew)

    fs.writeFileSync(tradePagePath, pageContent, { encoding: 'UTF-8' })

    const tradeJsPath = comPath + '/index.js',
      pageContentJs = fs.readFileSync(jsTemplatePath, { encoding: 'UTF-8' }).replace(/\${componentname}/g, componentnameNew)

    fs.writeFileSync(tradeJsPath, pageContentJs, { encoding: 'UTF-8' })

    console.log(chalk.green('恭喜您，组件已创建成功!'))
  }
}
