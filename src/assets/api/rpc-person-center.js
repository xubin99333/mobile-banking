import { callRPC } from '@/assets/js/rpc-base'

/*
 * 查询用户最后一次登录信息
 * @author: 王哲
 */
export function getLastLog (params, func, errfunc) {
  callRPC(
    'mobileBank.user.op.lastlog',
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
 * 查询用户信息
 * @author: 王哲
 */
export function getUserInfo (params, func, errfunc) {
  callRPC(
    'mobileBank.user.info', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 查询用户信息
 * @author: 王哲
 */
export function getUserInfoMine (params, func, errfunc) {
  callRPC(
    'mobileBank.user.info',
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
 * 查询用户账户信息
 * @author: 王哲
 */
export function getAccountAssets (params, func, errfunc) {
  callRPC(
    'mobileBank.account.assets',
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
 * 查询用户账户收支信息
 * @author: 王哲
 */
export function getAccountBillList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bill.list',
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
 * 查询用户账户银行卡信息
 * @author: 王哲
 */
export function getAccountBankCardList (params, func, errfunc) {
  callRPC(
    'mobileBank.account.bankcard.list',
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
 * 安全登出
 * @author: 王哲
 */
export function logout (params, func, errfunc) {
  callRPC(
    'mobileBank.oauth.logout',
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
 * 修改用户基本信息
 * @author: 王哲
 */
export function saveUserInfo (params, func, errfunc) {
  callRPC(
    'mobileBank.user.selfinfomod',
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
 * 修改用户登录密码
 * @author: 王哲
 */
export function changePwd (params, func, errfunc) {
  callRPC(
    'mobileBank.user.pwd.update',
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
 * 获取用户设置列表
 * @author: 王哲
 */
export function getUserSettingList (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.list',
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
 * 设置用户超时时间
 * @author: 王哲
 */
export function setUserSettingTimout (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.timeout',
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
 * 获取用户操作日志
 * @author: 王哲
 */
export function setUserOpLog (params, func, errfunc) {
  callRPC(
    'mobileBank.user.op.log',
    params,
    {},
    {
      method: 'post'
    },
    func,
    errfunc
  )
}

/*
 * 设置指纹登录
 * @author: 王哲
 */
export function setUserFinger (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.finger',
    params,
    {},
    {
      method: 'post'
    },
    func,
    errfunc
  )
}

/*
 * 设置面容登录
 * @author: 王哲
 */
export function setUserFace (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.face', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 设置指纹支付设置
 * @author: 王哲
 */
export function setUserFingerPay (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payset.fingerprint', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 设置面容支付设置
 * @author: 王哲
 */
export function setUserFacePay (params, func, errfunc) {
  callRPC(
    'mobileBank.account.payset.faceprint', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 忘记密码-重置密码
 * @author: dong
 */
export function forgotPwdReset (params, func, errfunc) {
  callRPC(
    'mobileBank.user.pwd.forgotPwdReset', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 忘记密码-身份验证
 * @author: dong
 */
export function forgotPwdVerify (params, func, errfunc) {
  callRPC(
    'mobileBank.user.pwd.forgotPwdVerify', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 用户消息设置查询
 * @author: 王哲
 */
export function getSettingMsg (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.msg', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 设置消息通知
 * @author: 王哲
 */
export function settingNotify (params, func, errfunc) {
  callRPC(
    'mobileBank.user.setting.notify', params, {}, { method: 'post' }, func, errfunc
  )
}

/*
 * 新增意见反馈
 * @author: 王哲
 */
export function addFeedback (params, func, errfunc) {
  callRPC(
    'mobileBank.user.feedback.add', params, { method: 'post' }, func, errfunc
  )
}
