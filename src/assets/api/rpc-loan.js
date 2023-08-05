import { callRPC } from '@/assets/js/rpc-base'

/*
 * 我的贷款列表
 */
export function getCashLoanApplyJnl (params, func, errfunc) {
  callRPC(
    'account.api.getCashLoanApplyJnl', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 还款计划
 */
export function getCashPayPlan (params, func, errfunc) {
  callRPC(
    'account.api.getCashPayPlan', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 还款记录查询
 */
export function getCashPayRecord (params, func, errfunc) {
  callRPC(
    'account.api.getCashPayRecord', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 贷款还款录入
 */
export function getCashPayRecordInit (params, func, errfunc) {
  callRPC(
    'account.api.getCashPayRecordInit', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询加挂卡号
 */
export function getPerUserAccount (params, func, errfunc) {
  callRPC(
    'account.api.getPerUserAccount', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 贷款还款提交
 */
export function CashLoanPay (params, func, errfunc) {
  callRPC(
    'account.api.CashLoanPay', params, {}, { method: 'post' }, func, errfunc
  )
}