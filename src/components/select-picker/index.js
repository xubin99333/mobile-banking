import Vue from 'vue'
import SelectPicker from './SelectPicker'

// 引用gooseui组件，使用解构赋值按需引用，如果没有引用，删除这段代码
import { Cell, CellGroup, Field, Picker, Popup, Icon, Calendar } from 'gooseui'
Vue.use(Cell)
  .use(Icon)
  .use(Field)
  .use(Picker)
  .use(CellGroup)
  .use(Popup)
  .use(Calendar)

SelectPicker.install = defaultVue => {
  defaultVue.component(SelectPicker.name, SelectPicker)
}

export default SelectPicker
