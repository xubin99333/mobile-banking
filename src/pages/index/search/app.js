//在import Vue的过程中，Vue主要是在原型上完成方法的挂载，并且初始化了全局的API。
import Vue from 'vue'
// 引入全局配置文件
import '@/config'
// 引入主VUE页面
import App from './SearchApp'

// 引入国际化配置数据
import i18nMsg from '../i18n'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: window.defaultLanguage,
  //防止控制台发出警告
  silentFallbackWarn: true,
  messages: i18nMsg
})

import { GooseLocale } from '@/assets/i18n/goose-locale'
GooseLocale(i18n.locale)

// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  //将渲染结果挂在这id为root的html上
  i18n,
  el: '#app',
  //render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
  render: h => {
    return h(App)
  }
  
})
