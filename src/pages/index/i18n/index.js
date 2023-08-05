//获取公共部分的国际化数据
import messages from '@/assets/i18n'

//获取单个页面的国际化数据
import enMsg from './en'
import scMsg from './sc'
import tcMsg from './tc'

export default {
  en: Object.assign(enMsg, messages.en),
  sc: Object.assign(scMsg, messages.sc),
  tc: Object.assign(tcMsg, messages.tc)
}
