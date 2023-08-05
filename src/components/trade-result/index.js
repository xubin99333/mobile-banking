import Vue from 'vue'
import TradeResult from './TradeResult'

// 引用gooseui组件，使用解构赋值按需引用，如果没有引用，删除这段代码
import { Cell, CellGroup } from 'gooseui'
Vue.use(Cell)
  .use(CellGroup)
// 结束引用gooseui组件

TradeResult.install = defaultVue => {
  defaultVue.component(TradeResult.name, TradeResult)
}

export default TradeResult
