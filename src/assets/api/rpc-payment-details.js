import { callRPC } from '@/assets/js/rpc-base'

/*
 * 收支明细
 * @author: 梁玉璟
 */
export function getAccountBillList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bill.list', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询用户银行卡信息
 * @author: 梁玉璟
 */
export function getAccountBankCardList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.list', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 月度收支统计
 * @author: 梁玉璟
 */
export function getAccountBillStatisticsMonth (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bill.statistics.month', params, {}, { method: 'post' }, func, errfunc
  )
}
