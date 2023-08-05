import { callRPC } from '@/assets/js/rpc-base'

/*
 * 查询菜单配置
 * @author: 梁玉璟
 */
export function getApplications (params, func, errfunc) {
  callRPC(
    'mobileBank.home.queryMenuConfig', params, {}, { method: 'post' }, func, errfunc
  )
}

// 查询首页应用列表
export function queryAllMenuByArea (params, func, errfunc) {
  callRPC(
    'mobileBank.menu.allMenu', params, {}, { method: 'post' }, func, errfunc
  )
}

// 查询全部带分组应用列表
export function queryAllMenuByGroup (params, func, errfunc) {
  callRPC(
    'mobileBank.menu.allMenuGroup', params, {}, { method: 'post' }, func, errfunc
  )
}

// 查询全部带分组应用列表
export function queryValidModule (params, func, errfunc) {
  console.log("查询全部带分组应用列表")
  callRPC(
    'mobileBank.moduleUse.queryValidModule', params, {}, { method: 'get' }, func, errfunc
  )
}

/*
 * 大中小广告展位配置
 *
 */
export function getBooth (params, func, errfunc) {
  callRPC(
    'mobileBank.booth.getBooth', params, {}, { method: 'get' }, func, errfunc
  )
}

/*
 * 获取营销产品加密KEY
 *
 */
export function getEncryptData (params, func, errfunc) {
  callRPC(
    'account.api.getEncryptData', params, {}, { method: 'post' }, func, errfunc
  )
}


