import { callRPC } from '@/assets/js/rpc-base'

/*
 * 网点预约取号
 * @author: 路丽
 */
export function getApplication (params, func, errfunc) {
  callRPC(
    'mobileBank.user.branch.appointNumber', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 取消预约
 * @author: 路丽
 */
export function cancelAppointments (params, func, errfunc) {
  callRPC(
    'mobileBank.user.branch.cancelAppointments', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 取得该用户所有预约信息
 * @author: 路丽
 */
export function getQueryAllAppointments (params, func, errfunc) {
  callRPC(
    'mobileBank.user.branch.queryAllAppointments', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询所有网点(分页查询)
 * @author: 路丽
 */
export function getQueryAllBranch (params, func, errfunc) {
  callRPC(
    'mobileBank.user.branch.queryAllBranch', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询预约业务类型
 * @author: 路丽
 */
export function getQueryDictValueList (params, func, errfunc) {
  callRPC(
    'mobileBank.user.common.queryDictValueList', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询附近网点
 * @author: 路丽
 */
export function getQueryNearbyBranch (params, func, errfunc) {
  callRPC(
    'mobileBank.user.branch.queryNearbyBranch', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询网点到办理距离
 * @author: 路丽
 */
export function getBranchDistance (params, func, errfunc) {
  callRPC(
    'mobileBank.user.backlog.branchDistance', params, {}, { method: 'post' }, func, errfunc
  )
}
