import { callRPC } from '@/assets/js/rpc-base'

/*
 * 理财产品列表
 */
export function financeList (params, func, errfunc) {
  callRPC(
    'account.api.financeList', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 理财产品详细
 */
export function financeDetail (params, func, errfunc) {
  callRPC(
    'account.api.financeDetail', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 理财交易明细列表
 */
export function getMyFinanceTransactionList (params, func, errfunc) {
  callRPC(
    'account.api.MyFinanceTransactionList', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 理财交易明细详细
 */
export function getMyFinanceTransactionDetail (params, func, errfunc) {
  callRPC(
    'account.api.MyFinanceTransactionDetail', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 理财购买
 */
export function buy (params, func, errfunc) {
  callRPC(
    'account.api.financeBuyInit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询加挂银行卡
 */
export function getPerUserAccount (params, func, errfunc) {
  callRPC(
    'account.api.getPerUserAccount', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 理财赎回确认
 */
export function myFinanceRedeem (params, func, errfunc) {
  callRPC(
    'account.api.myFinanceRedeem', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 已持有理财列表
 */
export function myFinanceList (params, func, errfunc) {
  callRPC(
    'account.api.myFinanceList', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 账户总览
 */
export function wealthView (params, func, errfunc) {
  callRPC(
    'account.api.wealthView', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 账户明细查询
 */
export function accountDetailQuery (params, func, errfunc) {
  callRPC(
    'account.api.accountDetailQuery', params, {}, { method: 'post' }, func, errfunc
  )
}