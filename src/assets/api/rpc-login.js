import { callRPC } from '@/assets/js/rpc-base'

/*
 * 登录
 * @author: 梁玉璟
 */
export function login (params, func, errfunc) {
  callRPC(
    'mobileBank.oauth.token', params, {}, {
      method: 'post',
      showLoading: true
    }, func, errfunc
  )
}

/*
 * 登录
 * @author: 梁玉璟
 */
export function getUserNoByMobilePhone (params, func, errfunc) {
  callRPC(
    'account.api.getUserNoByMobilePhone', params, {}, {
      method: 'post',
      showLoading: false
    }, func, errfunc
  )
}

/*
 * 生物识别登录
 * @author: 梁玉璟
 */
export function bioLogin (params, func, errfunc) {
  callRPC(
    'mobileBank.user.oauth.bioLogin', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 注册
 * @author: 梁玉璟
 */
export function register (params, func, errfunc) {
  callRPC(
    'mobileBank.user.register', params, {}, { method: 'post' }, func, errfunc
  )
}

// 查询主题地址
export function getTopic (params, func, errfunc) {
  callRPC(
    'mobileBank.topic.getTopic', params, {}, { method: 'get' }, func, errfunc
  )
}
