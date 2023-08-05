import { callRPC } from '@/assets/js/rpc-base'

export function getResourceList (func, errfunc) {
  callRPC(
    'getResourceList', [], {}, null, func, errfunc
  )
}

export function getResourcePath (params, func) {
  callRPC(
    'com.wlbbank.mb0001.oneCardAcctInfoQuery', params, {}, null, func
  )
}
