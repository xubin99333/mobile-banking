import { callRPC } from '@/assets/js/rpc-base'

/*
 * 查询用户菜单配置/我的应用
 * @author: 梁玉璟
 */
export function getMyApplications (params, func, errfunc) {
  callRPC(
    'mobileBank.menu.querUserMenuConfig', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 更新我的应用
 * @author: 梁玉璟
 */
export function updateMyApplications (params, func, errfunc) {
  callRPC(
    'mobileBank.menu.updateUserMenuConfig', params, {}, { method: 'post' }, func, errfunc
  )
}

