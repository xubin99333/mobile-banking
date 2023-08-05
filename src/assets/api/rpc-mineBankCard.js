import { callRPC } from '@/assets/js/rpc-base'

/*
 * 账户限额查询
 * @author: hxw
 */
export function getAccountSettingGetLimit (params, func, errfunc) {
  callRPC(
    'mobileBank.account.setting.getLimit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 校验银行卡信息是否跟用户输入证件信息一致
 * @author: hxw
 */
export function getAccountBankcardCertcheck (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.certcheck', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 绑定银行卡
 * @author: hxw
 */
export function getAccountBankcardAdd (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.add', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 解绑银行卡
 * @author: hxw
 */
export function getAccountBankcardDelete (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.delete', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 银行卡绑定状态校验
 * @author: hxw
 */
export function getAccountBankcardBindcheck (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.certcheck', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 银行卡别名修改
 * @author: hxw
 */
export function getAccountBankcardAlias (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.list', params, {}, { method: 'post' }, func, errfunc
  )
}
