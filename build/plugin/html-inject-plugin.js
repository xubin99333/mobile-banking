/**
 * @author lu
 * @description 为html文件注入字符串
 * @param injectTemplate 被注入的字符串模板
 * 
 * 目前注入位置是在</head>标签之前
 */
class InjectHtmlPlugin {
  constructor(config) {
    this.injectTemplate = config.injectTemplate
  }

  apply(compiler) {
		compiler.hooks.emit.tap('InjectHtmlPlugin', (compilation) => {
      for (const name in compilation.assets) {
        if(name.endsWith('.html') && name !== 'index.html') {
          this.inject(name, compilation)
        }
      }
    })
  }

  inject (chunk, compilation) {
    let source = compilation.assets[chunk].source()
    const newContent = this.insert(this.injectTemplate, source)
    compilation.assets[chunk] = {
      source: () => newContent,
      size: () => newContent.length
    }
  }

  insert(template, content) {
    let temp = content.split('</head>')
    return `${temp[0]}
      ${template}</head>${temp[1]}`
  }
}

module.exports = InjectHtmlPlugin
