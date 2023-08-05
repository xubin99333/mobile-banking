import Vue from 'vue'
import ${componentname} from './${componentname}'

import gooseui from 'gooseui'
import 'gooseui/lib/index.less'
Vue.use(gooseui)
// 结束引用gooseui组件

${componentname}.install = V => {
  V.component(${componentname}.name, ${componentname})
}

export default ${componentname}
