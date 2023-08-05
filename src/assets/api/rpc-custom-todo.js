import { callRPC } from '@/assets/js/rpc-base'

/*
 * 添加自定义事件
 * @author: hxw
 */
export function getcustomToDoAdd (params, func, errfunc) {
  callRPC(
    'mobileBank.user.backlog.CustomBacklog', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 获取代办事件列表
 * @author: hxw
 */
export function getAllDataList (params, func, errfunc) {
  callRPC(
    'mobileBank.user.backlog.getBacklogByDate',
    params,
    {},
    {
      method: 'post',
      showLoading: false
    },
    func,
    errfunc
  )
}

/*
 * 删除代办事件列表
 * @author: hxw
 */
export function customToDoDel (params, func, errfunc) {
  callRPC(
    'mobileBank.user.backlog.deleteBacklogById', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 修改代办事件列表
 * @author: hxw
 */
export function customToDoEdit (params, func, errfunc) {
  callRPC(
    'mobileBank.user.backlog.updateBacklog', params, {}, { method: 'post' }, func, errfunc
  )
}
