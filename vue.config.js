'use strict'
const glob = require('glob'),
  fs = require('fs'),
  pages = {},
  path = require('path'),
  express = require('express'),
  process = require('process'),
  chalk = require('chalk'),
  offlinePackageInfo = require('./package-offline.json'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  // 引入 filemanager-webpack-plugin 插件,可以将文件夹压缩成zip包
  FileManagerPlugin = require('filemanager-webpack-plugin'),
  // 引入 compression-webpack-plugin 插件，处理gzip
  CompressionPlugin = require('compression-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  // 当前运行环境
  { runtime, noConsoleRuntime, runtimeConfig } = require('./environment'),
  sdkType = runtimeConfig[runtime]['sdkType'],
  resolve = dir => {
    return path.join(__dirname, dir)
  },
  // H5插入模板
  HtmlInjectPlugin = require('./build/plugin/html-inject-plugin'),
  currentRuntimeConfig = runtimeConfig[runtime]

// 校验，如果当前的runtime没有配置，需要提示并退出
if (!currentRuntimeConfig) {
  console.log(chalk.bgRed(chalk.whiteBright('当前环境缺少相关配置，请配置后再启动调试服务！')))
  process.exit(-1)
}

// 离线包名称
let packagename = '',
  // 离线包ID
  packageid = '',
  // 输出路径
  outputPath = 'www',
  globPath = ''

console.log(chalk.bgBlue(chalk.whiteBright(`当前正在执行 ${process.env.npm_lifecycle_event} 脚本`)))
console.log(chalk.bgBlueBright(chalk.whiteBright(`当前连接后台服务的环境：${runtime}`)))

if (process.env.NODE_ENV === 'production') {
  // Production模式下，根据离线包名称来构建
  if (process.argv && process.argv.length > 3) {
    packagename = process.argv[process.argv.length - 1]
    console.log('离线包名称: ' + packagename)

    if (offlinePackageInfo[packagename]) {
      packageid = offlinePackageInfo[packagename].packageid
      outputPath = `${packageid}/${outputPath}`

      globPath = `./src/pages/${packagename}/**/app.js`
    } else {
      console.log(chalk.red('没有找到要打包的内容'))
      process.exit(0)
    }
  } else {
    console.log(chalk.red(`请执行npm run build <packagename>`))
    process.exit(0)
  }
} else {
  // Development模式下，默认调试全部页面，但要根据npm的入参来最终确定调试哪些页面
  globPath = './src/pages/**/app.js'

  // 获取npm参数
  let packageConfig = process.argv,
    packageNameMsg = '',
    // 判断传入参数是否是需要根据packageid来启动对应交易
    configIndex = packageConfig.indexOf('--packageList')

  if (configIndex != -1 && packageConfig.length >= configIndex + 2 && packageConfig[configIndex + 1] != 'A') {
    let list = packageConfig[configIndex + 1].split(',')

    if (list.length > 0) {
      for (let key in offlinePackageInfo) {
        for (let i = 0; i < list.length; i++) {
          if (offlinePackageInfo[key]['packageid'] === list[i]) {
            packageNameMsg = packageNameMsg + key + '|'
            break
          }
        }
      }
      if (packageNameMsg !== '') {
        packageNameMsg = packageNameMsg.substring(0, packageNameMsg.length - 1)
        globPath = `./src/pages/?(index|login|${packageNameMsg})/**/app.js`
      } else {
        console.log('\n' + chalk.bgBlueBright(chalk.whiteBright(`\n未找到${packageConfig[configIndex + 1]}离线包`)))
        process.exit(0)
      }
    }
  }
}
// 生成公共资源包基础路径
let publicResourceBasePath = `${currentRuntimeConfig.publicResource}/${currentRuntimeConfig.appId}_${currentRuntimeConfig.workspaceId}/`

// 注入公共离线包模板
let commonPackageScripts = `
  <script src="${publicResourceBasePath}js/vue.min.js"></script>
  <script src="${publicResourceBasePath}js/gooseui.min.js"></script>
  <script src="${publicResourceBasePath}js/fastclick.min.js"></script>
  <script src="${publicResourceBasePath}js/vue-i18n.min.js"></script>
  <link rel="stylesheet" type="text/css" id="topicId" href="">
`

// dev模式下使用本地公共资源文件夹下文件
if (process.env.NODE_ENV === 'development') {
  commonPackageScripts = `
  <script src="/js/vue.min.js"></script>
  <script src="/js/vue-i18n.min.js"></script>
  <script src="/js/fastclick.min.js"></script>
  <script src="/js/gooseui.min.js"></script>
  <link rel="stylesheet" type="text/css" id="topicId" href="">
  `
}

glob.sync(globPath).forEach(directoryPath => {
  const chunk = directoryPath.split('./src/pages/')[1].split('/app.js')[0],
    tmp = chunk.split('/')

  let templateUrl =
    './src/pages/' + chunk + '/' + tmp[tmp.length - 1] + '-skeleton.html'

  templateUrl = fs.existsSync(resolve(templateUrl)) ? templateUrl : './public/index.html'

  pages[chunk] = {
    entry: directoryPath,
    template: templateUrl,
    title: '',
    filename: `${chunk.replace(/\//g, '_').replace(/-/g, '_')}.html`,
    chunks: [ 'chunk-vendors', 'chunk-common', chunk ],
    multihtmlCache: true,
    publicResourceBasePath,
    commonPackageScripts
  }
})

/**
 * @description 设置vConsole Loader
 */
const setConsoleLoader = config => {
  console.log(chalk.bgBlueBright(chalk.whiteBright('当前环境需要启用vconsole')))
  config.module
    .rule('vconsole-rule')
    .test(/vconsole-config\.js/g)
    .use(path.resolve(__dirname, './build/loaders/vconsole.loader.js'))
    .loader(path.resolve(__dirname, './build/loaders/vconsole.loader.js'))
    .end()
}

const genAssetSubPath = dir => {
  return `${dir}/[name]${'.[hash:8]'}.[ext]`
}

const genUrlLoaderOptions = dir => {
  return {
    limit: 4096,
    // use explicit fallback to avoid regression in url-loader>=1.1.0
    fallback: {
      loader: 'file-loader',
      options: {
        name: genAssetSubPath(dir)
      }
    }
  }
}

module.exports = {
  publicPath: './',
  pages,
  outputDir: `./dist/${packageid}/${outputPath}`,
  assetsDir: '',
  chainWebpack: config => {
    // 常用Alias
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('@assets', resolve('src/assets'))

    // 根据环境变量等因素，确定使用哪一个SDK
    switch (process.env.SDK_RUNTIME) {
      case 'APP':
        console.log(chalk.bgBlue(chalk.whiteBright('当前使用手机端SDK')))
        config.resolve.alias.set('goose-sdk', resolve(`GooseSDK-${sdkType}/app`))
        break
      case 'BROWSER':
        console.log(chalk.bgBlue(chalk.whiteBright('当前使用浏览器端SDK')))
        config.resolve.alias.set('goose-sdk', resolve(`GooseSDK-${sdkType}/browser`))
        break
      default:
        console.log(chalk.bgBlue(chalk.whiteBright('当前使用基座端SDK')))
        config.resolve.alias.set('goose-sdk', resolve(`GooseSDK-${sdkType}/debug`))
    }

    /* 必备Loader -- 无需根据环境变量判断，必须要包含的Loader */
    config.module
      .rule('gooseui-rule')
      .test(/\.less$/)
      .use('less-loader')
      .loader('less-loader')
      .options({
        modifyVars: {
          //全部主题变量
          hack: `true; @import "${path.join(__dirname, './src/assets/css/gooseui-blue.less')}";`
        }
      })
    
    // eslint-loader配置
    config.module
      .rule('eslint')
      .test(/\.(js|vue)$/)
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(option => {
        let opt = option

        opt.emitWarning = true
        opt.emitError = true
        opt.failOnWarning = true
        opt.failOnError = true

        return opt
      })
    
    const imgRule = config.module.rule('images')

    imgRule.uses.clear()
    
    imgRule
      .use('url-loader')
      .loader('url-loader')
      .options(genUrlLoaderOptions('img'))

    const svgRule = config.module.rule('svg')
    
    svgRule.uses.clear()
    // https://github.com/facebookincubator/create-react-app/pull/1180
    svgRule
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: genAssetSubPath('img')
      })
    
    // 1. 是否启用vConsole控制台
    switch (process.env.VCONSOLE_ENABLED) {
      case 'Y':
        // 强制启用
        setConsoleLoader(config)
        break
      case 'CONFIG':
        // 根据环境配置(/environment/index.js下的runtime和noConsoleRuntime)确定是否启用vconsole
        if (noConsoleRuntime.indexOf(runtime) === -1) {
          setConsoleLoader(config)
        } else {
          console.log(chalk.bgRedBright(chalk.whiteBright('当前环境不启用vconsole')))
        }
        break
      default:
        console.log(chalk.bgRedBright(chalk.whiteBright('当前环境不启用vconsole')))
    }

    // 通讯网关配置
    switch (process.env.GATEWAY_RUNTIME) {
      case 'BROWSER':
        console.log(chalk.bgBlue(chalk.whiteBright('当前使用Axios实现接口实现通讯')))
        config.module
          .rule('rpc-rule')
          .test(/rpc-base\.js/g)
          .use(path.resolve(__dirname, './build/loaders/rpc.loader.js'))
          .loader(path.resolve(__dirname, './build/loaders/rpc.loader.js'))
        break
      case 'MOCK':
        console.log(chalk.bgRedBright(chalk.whiteBright('当前使用挡板服务来实现接口通讯')))
        config.module
          .rule('mock-rule')
          .test(/rpc-base\.js/g)
          .use(path.resolve(__dirname, './build/loaders/mock.loader.js'))
          .loader(path.resolve(__dirname, './build/loaders/mock.loader.js'))
        break
      default:
        console.log(chalk.bgBlue(chalk.whiteBright('当前使用SDK的RPC接口实现通讯')))
    }

    // Extract-CSS插件
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(() => {
        return [
          {
            chunkFilename: `css/[name].css`,
            moduleFilename: ({ name }) => {
              return `css/${name.replace(/\//g, '_')}.css`
            }
          }
        ]
      })
    }
  },
  // 关闭eslint校验
  lintOnSave: true,
  // 不生成map文件
  productionSourceMap: false,
  //文件名称不带hash值
  filenameHashing: false,
  devServer: {
    port: 8088,
    host: '0.0.0.0',
    https: false,
    disableHostCheck: true,
    before (app) {
      app.use(express.static(path.resolve(__dirname, 'public-resource')))
      // 启用Mock服务
      if (process.env.GATEWAY_RUNTIME === 'MOCK') {
        app.post('/mock/:operationType', (req, res) => {
          const operationType = req.params.operationType,
            filePath = `./mock/${operationType}.json`,
            content = fs.readFileSync(filePath, {
              encoding: 'utf-8',
              flag: 'r'
            })

          res.send(content)
        })
      }
    },
    proxy: {
      '/api': {
        target: runtimeConfig[runtime].gatewayAddress,
        ws: true,
        changeOrigin: true
      }
    }
  },

  configureWebpack: config => {
    // 公共资源不参与编译
    config.externals = {
      vue: 'Vue',
      'vue-i18n': 'VueI18n',
      fastclick: 'FastClick',
      gooseui: 'gooseui'
    }

    for (let i = 0; i < config.plugins.length; i++) {
      if (config.plugins[i] instanceof MiniCssExtractPlugin) {
        config.plugins[i] = new MiniCssExtractPlugin({ ignoreOrder: true })
        break
      }
    }

    // 注入scrpit代码用于引入公共资源包
    config.plugins.push(new HtmlInjectPlugin({ injectTemplate: commonPackageScripts }))

    // webpack 构建分析插件
    if (process.env.ANALYZER_ENABLED === 'Y') {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info'
      }))
    }

    // 是否开启GZIP压缩
    if (sdkType.toLowerCase() !== 'mpaas' && process.env.GZIP_ENABLED === 'Y') {
      // 添加CompressionPlugin，用于处理GZIP
      config.plugins.push(new CompressionPlugin({
        // 压缩设置
        compressionOptions: {
          level: 9
        },
        threshold: 0,
        // 压缩算法，默认值gzip
        algorithm: 'gzip',
        // 压缩后文件名
        filename: '[path][base].gz',
        // 压缩js/css/svg文件
        test: /\.(js|css|svg)/i,
        // 压缩后删除源文件
        deleteOriginalAssets: true
      }))
    }

    if (process.env.COMPRESSION_ENABLED === 'Y') {
      // 检测offline-packages目录是否存在，如果不存在需要创建。如果目录不存在，压缩zip包时会报错
      if (!fs.existsSync('./offline-packages')) {
        fs.mkdirSync('./offline-packages')
      }

      // 再引入FileManagerPlugin，编译后自动压缩为zip文件
      config.plugins.push(new FileManagerPlugin({
        onStart: {
          delete: [`./offline-packages/${offlinePackageInfo[packagename].packageid}.zip`]
        },
        onEnd: {
          archive: [
            {
              source: `./dist/${packageid}`,
              destination: `./offline-packages/${offlinePackageInfo[packagename].packageid}.zip`
            }
          ],
          delete: [`./dist`]
        }
      }))
    }

    if (process.env.NODE_ENV === 'production') {
      //打包文件大小配置
      config.performance = {
        hints: 'warning',
        //入口起点的最大体积 整数类型（以字节为单位）
        maxEntrypointSize: 50000000,
        //生成文件的最大体积 整数类型（以字节为单位 300k）
        maxAssetSize: 30000000
      }
    }
  },
  // 传递第三方插件选项
  pluginOptions: {},
  // 全局注入通用样式
  css: {}
}
