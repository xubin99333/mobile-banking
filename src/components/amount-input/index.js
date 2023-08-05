import Vue from 'vue'
import AmountInput from './AmountInput'

// 引用gooseui组件，使用解构赋值按需引用，如果没有引用，删除这段代码
import { Cell, CellGroup, Icon, Field } from 'gooseui'
Vue.use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Field)

AmountInput.install = defaultVue => {
  defaultVue.component(AmountInput.name, AmountInput)
}

export default AmountInput
