import { Locale } from 'gooseui'
import enUS from 'gooseui/es/locale/lang/en-US'
import zhCN from 'gooseui/es/locale/lang/zh-CN'
import zhHK from 'gooseui/es/locale/lang/zh-HK'

export function GooseLocale (language) {
  switch (language) {
    case 'en':
      Locale.use('enUS', enUS)
      break
    case 'sc':
      Locale.use('zhCN', zhCN)
      break
    case 'tc':
      Locale.use('zhHK', zhHK)
      break
    default:
      Locale.use('zhCN', zhCN)
      break
  }
}
