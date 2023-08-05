import { callRPC } from '@/assets/js/rpc-base'

/*
 * 历史转帐收款人
 * @author: dong
 */
export function getAccountPayeeList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payee.list', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 添加收款人
 * @author: dong
 */
export function getAccountPayeeAdd (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payee.add', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 编辑收款人
 * @author: dong
 */
export function getAccountPayeeEdit (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payee.edit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 删除收款人
 * @author: dong
 */
export function getAccountPayeeDelete (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payee.delete', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询用户账户银行卡信息
 * @author: dong
 */
export function getAccountBankcardList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.list', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 预约转帐，转账计划详情
 * @author: dong
 */
export function getAccountTransferAcountDetail (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transferAcount.detail', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 预约转帐，新建转账计划
 * @author: dong
 */
export function getAccountTransferplanAdd (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transferplan.add', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 预约转帐，转账计划列表
 * @author: dong
 */
export function getAccountTransferplanList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transferplan.list', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 预约转帐，修改转帐计划
 * @author: dong
 */
export function getAccountTransferplanEdit (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transferplan.edit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 预约转帐，删除转帐计划
 * @author: dong
 */
export function getAccountTransferplanDelete (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transferplan.delete', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 银行卡转账记录
 * @author: dong
 */
export function getAccountTransferRecord (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transfer.record', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 银行卡转账
 * @author: dong
 */
export function getAccountTransferBctransfer (params, func, errfunc) {
  callRPC(
    'mobileBank.account.transfer.bctransfer', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 账户限额设置
 * @author: dong
 */
export function getAccountSettingSetLimit (params, func, errfunc) {
  callRPC(
    'mobileBank.account.setting.setLimit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 账户限额查询
 * @author: dong
 */
export function getAccountSettingGetLimit (params, func, errfunc) {
  callRPC(
    'mobileBank.account.setting.getLimit', params, {}, { method: 'post' }, func, errfunc
  )
}
