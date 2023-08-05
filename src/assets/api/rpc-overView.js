import { callRPC } from '@/assets/js/rpc-base'

/*
 * 查询用户账户信息
 * @author: 路丽
 */
export function getAccountAssets (func, errfunc) {
  callRPC(
    'mobileBank.account.assets', {}, {}, { method: 'post' }, func, errfunc
  )
}
