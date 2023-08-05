import Vue from 'vue'
// vconsole调试器
import './vconsole-config.js'
// babel脚本
import 'babel-polyfill'
// 全局样式
import '@/assets/css/global.less'
// FastClick
import FastClick from 'fastclick'

import gooseui from 'gooseui'
import 'gooseui/lib/index.less'
Vue.use(gooseui)

import 'goose-sdk'
const gooseSDKInstall = {
  install (defaultVue) {
    defaultVue.prototype.$goose = window.GooseSDK
  }
}

Vue.use(gooseSDKInstall)
Vue.prototype.analyticsService = (() => {
  // analyticsService
})

//国际化初始语言
const uri = window.location.search,
  re = new RegExp('lang=([^&?]*)', 'ig'),
  lang = uri.match(re) ? uri.match(re)[0].substr(5) : 'sc'

window.defaultLanguage = lang

FastClick.attach(document.body)

FastClick.prototype.focus = targetElement => {
  let length

  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
