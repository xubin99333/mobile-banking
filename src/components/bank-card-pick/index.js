import Vue from 'vue'
import BankCardPick from './BankCardPick'

// 引用gooseui组件，使用解构赋值按需引用，如果没有引用，删除这段代码
import { Cell, CellGroup, Popup, Icon } from 'gooseui'
Vue.use(Cell)
  .use(CellGroup)
  .use(Popup)
  .use(Icon)

BankCardPick.install = defaultVue => {
  defaultVue.component(BankCardPick.name, BankCardPick)
}

export default BankCardPick
