<template>
  <div class="page-content">
    <div class="search-box minePageBackground">
      <!-- 页面上端搜索功能 -->
      <mine-search
        :background-opacity="backGroundOpacity"
        :my-is-login="myIsLogin"
        @logoutReturn="logoutReturn"
      ></mine-search>
      <!-- 登录时页面头部 -->
      <div v-if="myIsLogin">
        <div class="landing-img">
          <img src="@/assets/images/index/set-header.png" alt="" />
        </div>
        <div v-if="verifyStatusType" class="landing-user" >
          {{ userName }}
        </div>
        <div v-else class="landing-user" >
          {{ userPhone }}
          <div class="un-real-name">已实名</div>
        </div>
        <div class="set-up" @click="gotoSetupContent" >设置</div>
        <div class="langding-time">上次登录 {{ loginTime }}</div>
      </div>
      <!-- 未登录时页面头部 -->
      <div v-else>
        <div class="landing-img no-login">
          <img src="@/assets/images/index/muser.png" alt="" />
        </div>
        <div class="login-btn" @click="goToLogin" >立即登录</div>
      </div>
      <!-- 银行卡-待办事项 -->
      <div class="user-information">
        <div class="card user-box" @click="gotoPage(0)">
          <goose-loading v-if="!bankCardList.bankNum && bankCardList.bankNum!=0"/>
          <span class="box-num"> {{ bankCardList.bankNum }} </span>
          <p class="cardItem">银行卡</p>
        </div>
        <div class="event user-box" @click="gotoPage(1)">
          <goose-loading v-if="!waitThing && waitThing!=0"/>
          <span class="box-num">{{ waitThing }}</span>
          <p class="cardItem">待办</p>
        </div>
        <div class="preferential user-box">
          <span class="box-num">0</span>
          <p class="cardItem">优惠</p>
        </div>
      </div>
    </div>
    <!-- 账户概览 -->
    <div class="account-overview accountBackground" @click="gotoPage(2)" >
      <p class="account color06052 fz14">
        <span>
          总资产（元）
          <div class="eyediv" @click.stop="myIsLogin && changeType()">
            <img :src="showEye ? openEye : noOpenEye" class="eye" />
          </div>
        </span>
        <goose-icon class="arrow-icon" name="arrow"></goose-icon>
      </p>
      <goose-loading v-if="!accAss.assetsSum"/>
      <p v-if="showEye && accAss.assetsSum" class="account fzw30 color06052" >{{ '￥'+accAss.assetsSum }}</p>
      <p v-if="!showEye && accAss.assetsSum" class="account fzw30 color06052">******</p>
    </div>
    <!-- 我的理财 -->
    <p class="mainLabel color3"> 我的理财 </p>
    <div class="mainItem" @click="gotoPage(4)" >
      <div class="mineFinancialLeft">
        <p v-if="showEye && number" class="account1" >￥{{ number | formatMoney}}</p>
        <goose-loading v-if="!number"/>
        <p v-if="!showEye && number" class="account1">******</p>
        <p class="mainItemLabel">持有金额（元）</p>
      </div>
      <div class="mineFinancialRight">
        <p v-if="showEye && number" class="account2">+{{ number*0.12 | formatMoney}}</p>
        <goose-loading v-if="!number"/>
        <p v-if="!showEye && number" class="account2">******</p>
        <p class="mainItemLabel">持仓收益（元）</p>
      </div>
    </div>

    <!-- 我的理财 -->
    <p class="mainLabel color3"> 我的贷款 </p>
    <div class="loanItem" @click="gotoPage(5)" >
      <div class="mineFinancialLeft">
        <p v-if="showEye && totalLiabilities >=0" class="account1" >￥{{ totalLiabilities | formatMoney}}</p>
        <goose-loading v-if="totalLiabilities.length == 0"/>
        <p v-if="!showEye && totalLiabilities >= 0" class="account1">******</p>
        <p class="mainItemLabel">贷款金额（元）</p>
      </div>
      <div class="mineFinancialRight">
        <p v-if="totalLiabilities > 0" class="dkzt colorF2685C">未结清</p>
        <p v-if="totalLiabilities == 0" class="dkzt color06052">已结清</p>
      </div>
    </div>

    <!-- 我的理财 -->
    <!-- <div class="account-overview" @click="gotoPage(5)" >
      <p class="account1">
        <span>
          
        </span>
        <goose-icon class="arrow-icon" name="arrow"></goose-icon>
      </p>
      <p class="money-name">总金额</p>
      <goose-loading v-if="!totalLiabilities"/>
      <p v-if="showEye && totalLiabilities" class="account" >{{ '￥'+totalLiabilities}}</p>
      <p v-if="!showEye && totalLiabilities" class="account">******</p>
    </div> -->
    <!-- 本月收支 -->
    <!-- <div class="balance-payment" @click="gotoPage(3)">
      <p class="account  font-bold">
        本月收支
        <goose-icon class="arrow-icon" name="arrow"></goose-icon>
      </p>
      <div
        v-if="billMouth.exp == 0 && billMouth.inc == 0"
        class="bill-box"
      >
        <p class="bill-no">本月暂无收支记录</p>
        <p class="bill-ple">快去记一笔吧</p>
      </div>
      <div v-else class="payment-box">
        <div class="left">
          <div class="payment">支出</div>
          <goose-loading v-if="!billMouth.exp"/>
          <div v-else>
            <div v-if="showEye" class="payment-value">
              ￥{{ billMouth.exp | formatMoney }}
            </div>
            <div v-if="!showEye" class="payment-value">******</div>
          </div>
        </div>
        <div class="right">
          <div class="income">收入</div>
          <goose-loading v-if="!billMouth.inc"/>
          <div v-else>
            <div v-if="showEye" class="income-value">
              ￥{{ billMouth.inc | formatMoney }}
            </div>
            <div v-if="!showEye" class="income-value">******</div>
          </div>
        </div>
      </div>
      <div class="line-box">
        <div
          :style="{ width:billMouth.expPer }"
          class="expPer-class"
        ></div>
        <div class="center-class"></div>
        <div
          :style="{ width:billMouth.incPer }"
          class="incPer-class"
        ></div>
      </div>
    </div> -->
    <!-- 隐私政策 -->
    <!-- <div class="balance-payment" is-link @click="showPopup">
      <p class="account">
        <span>隐私政策</span>
        <goose-icon class="arrow-icon" name="arrow"></goose-icon>
      </p>
    </div> -->
    <!-- <p class="yszc" @click="showPopup"><span>隐私与政策</span></p> -->
    <!-- 弹出层 -->
    <goose-popup
      v-model="show"
      :style="{ height: '30%' }"
      close-on-click-overlay= "false"
      class="popUp"
      position="bottom"
    ><div class="topPolicy">
      <p @click="showPolicy">查看协议</p>
      <p @click="dialogShow">撤销同意协议</p>
    </div>
      <div class="downPolicy" @click="showPopup">
        <p>取消</p>
      </div>
    </goose-popup>
    <!-- 撤销提示 -->
    <goose-dialog
      v-model="isShow"
      :before-close="isagree"
      confirm-button-text="确认撤销"
      cancel-button-text="取消"
      confirm-button-color="#ee0a24"
      show-cancel-button
      class="myRejected"
      cancel-button-color="#595959"
    >
      <div style="margin:10px;">
        <div style="color:#727272;font-size: 14px;">
          <p>您需同意我行隐私政策方可使用本软件中的产品和服务，若坚持撤销同意，将在下次启动后生效</p>
        </div>
      </div>
    </goose-dialog>
    <!-- 隐私政策-查看协议 -->
    <privacypolicy v-show="policyState">
    </privacypolicy>
    <!-- 底部logo -->
    <!-- <div class="agree-logo">
      <img src="@/assets/images/index/agree-logo.png" alt="" />
    </div> -->
  </div>
</template>

<script>
import MineSearch from './MineSearch'
import DateUtil from '@assets/js/datetime-util'
import MoneyUtil from '@assets/js/money-util'
import { getAllDataList } from '@/assets/api/rpc-custom-todo'
import CommonUtil from '@/assets/js/common-util'
// import CommonMixin from '@/mixins/common-mixin'
import privacypolicy from './Privacypolicy.vue'

// import { getAccountTransferplanList } from '@/assets/api/rpc-transfer'

import { getMyFinanceTransactionList, wealthView, getPerUserAccount } from '@/assets/api/rpc-financial'

import {
  getLastLog,
  getAccountAssets,
  getAccountBillList,
  getAccountBankCardList
} from '@/assets/api/rpc-person-center'

export default {
  components: {
    privacypolicy,
    MineSearch
  },
  filters: {
    formatMoney (val) {
      return MoneyUtil.formatCurrency(val)
    }
  },
  props: {
    showEyePub: {
      type: Boolean,
      default: false
    },
    loginType: {
      type: Object,
      default: null
    },
    isLogin: {
      type: Boolean,
      default: false
    },
    policyOpen: {
      type: Boolean,
      default: true
    }

  },
  data () {
    return {
      // 详细协议的显示与影藏
      policyState: false,
      //控制撤销协议显示与隐藏
      isShow: false,
      //控制弹出层的显示与隐藏
      show: false,
      //控制resume的时候的标识 隐藏loading
      flag: false,
      //是否实名认证
      verifyStatusType: false,
      waitThing: 0,
      //小眼睛睁眼图片
      openEye: require('@/assets/images/index/eopen.png'),
      //小眼睛闭眼图片
      noOpenEye: require('@/assets/images/index/eclose.png'),
      //显示小眼睛
      showEye: false,
      //搜索框-透明度
      backGroundOpacity: 0,
      //用户名
      userName: '',
      //用户手机
      userPhone: '',
      //用户上次登录时间
      loginTime: '',
      accAss: {
        //账户信息
        assetsSum: '0.00'
      },
      billMouth: {
        //收支信息
        exp: 0,
        inc: 0,
        //支出百分比
        expPer: '0%',
        incPer: '0%'
      },
      bankCardList: {
        //银行卡信息
        bankNum: 0
      },
      requestInfo: {
        //判断各请求成功状态
        getUserInfo: false,
        getLastLog: false,
        getAccountAssets: false,
        getAccountBillList: false,
        getAccountBankCardList: false,
        getAllDataList: false
      },
      //判断用户登录状态
      myIsLogin: false,
      number: '',
      coreUserNo: '',
      userNo: '',
      phone: '',
      totalLiabilities: ''
    }
  },
  watch: {

    /**
     * @description 判断并发请求成功状态
     * @author 王哲
     */
    requestInfo: {
      //深度监听，可监听到对象、数组的变化
      handler (newV) {
        if (
          newV.getUserInfo &&
          newV.getLastLog &&
          newV.getAccountAssets &&
          newV.getAccountBillList &&
          newV.getAccountBankCardList
        ) {
          // 判断并发请求全部成功，则关闭loading
          this.$toast.clear()
        }
      },
      deep: true
    },
    isLogin: {
      handler (newV) {
        if (newV === true) {
          if (window.name == '') {
            this.showEye = true
            window.name = 'isReload'
          } else if (window.name == 'isReload') {
            this.showEye = this.showEyePub
          }

          this.myIsLogin = true
          // 当前为登录状态
          this.initPageFn()
        } else {
          this.myIsLogin = false
          this.showEye = false
          this.clearPage()
        }
      }
    },
    showEyePub: {
      handler (newV) {
        this.showEye = newV
      }
    }
  },
  created () {
    // this.getFinancialList()this.getAccountAssetsFn()
    this.$goose.tools.getAPPDataCache({
        keys: [ 'UserNoByMobilePhone', 'userInfo' ]
      }, succ => {
        console.log('缓存中的数据', succ)
        if (succ.data.UserNoByMobilePhone) {
          this.coreUserNo = succ.data.UserNoByMobilePhone.coreUserNo
          this.userNo = succ.data.UserNoByMobilePhone.userNo
        }

        if (succ.data.userInfo) {
          this.phone = succ.data.userInfo.phone
        }
         //资产接口
        this.getAccountAssetsFn()
        this.getCardData()
      })
  },
  mounted () {
    let target = {
      param: {
        loginType: this.loginType
      },
      closeCurrentApp: false
    }

    if (this.isLogin) {
      // 已经登录->直接进行操作
      if (window.name == '') {
        this.showEye = true
        window.name = 'isReload'
      } else if (window.name == 'isReload') {
        this.showEye = this.showEyePub
      }
      this.myIsLogin = true
      // 当前为登录状态
      this.initPageFn()
    } else {
      // 未登录
      this.showEye = false
      this.myIsLogin = false
      CommonUtil.goToLogin(target)
    }

    /*
     *  CommonUtil.isUserLogin(target)
     * .then(() => {
     * // 已经登录->直接进行操作
     * if (window.name == '') {
     * this.showEye = true
     * window.name = 'isReload'
     * } else if (window.name == 'isReload') {
     * this.showEye = this.showEyePub
     * }
     * this.myIsLogin = true
     * // 当前为登录状态
     * this.initPageFn()
     * })
     * .catch(() => {
     * // 未登录
     * this.showEye = false
     * this.myIsLogin = false
     *})
     */
  },
  beforeDestroy () {
    this.$emit('geteyestate', this.showEye)
  },
  methods: {
    getCardData () {
        //资产接口
      let params = {
        "userNo": this.userNo,
        "channelCode": "PM",
        "requestGlobalJnlNo": "1111",
        "requestJnlNo": "11111",
        "requestChannelCode": "PM",
        "requestChannelId": "PM"
      }

      getPerUserAccount(params, res => {
        console.log('我的银行卡', res)
        this.bankCardList.bankNum = res.body.accountVo.length
      }, err => {
        console.log(err)
      })
    },
    getAccountAssetsFn () {
      let params = {
        "userNo": this.userNo,
        "coreCifNo": this.coreUserNo,
        "requestGlobalJnlNo": "1111",
        "requestJnlNo": "11111",
        "requestChannelCode": "PM",
        "requestChannelId": "PM"
      }
      console.log('getAccountAssetsFn', params)
      this.getCardData()
      wealthView(params, res => {
        console.log(res, '账户总览接口数据')
        this.number = res.body.investAmt
        this.totalLiabilities = Number(res.body.totalLiabilities)
        this.accAss.assetsSum = MoneyUtil.formatCurrency(Number(res.body.totalWealth))
      },
      err => {
        console.log(err)
      })
    },
    getFinancialList() {
      let params = {
        pageNo: 1,
        pageSize: 10000,
        requestGlobalJnlNo:'111',
        requestJnlNo:'111',
        requestChannelCode:'PM',
        requestChannelId:'PM',
        startDate:'',
        endDate:'',
        userNo:'100786',
        financeTransType: '购买'
      }

      getMyFinanceTransactionList(params, res => {
        this.produceList = res.body.financeTransactionList

        let money = 0
        this.produceList.forEach(item => {
          money += Number(item.buyAmount)
        })
        this.number = Number(money)
      }, err => {
        console.log(err)
      })
    },

    /**
     * @description 查看协议的显示与隐藏
     * @author zwh
     */
    showPolicy () {
      // this.policyState = true
      this.show = false
      let options = {
        appId: '99999999',
        param: {
          url: '/www/agreement_index.html',
          passData: {}
        },
        closeCurrentApp: false,
        isShowTitleBar: true
      }

      this.$goose.context.startH5App(options)
    },

    /**
     * @description 弹出层显示与隐藏
     * @author zwh
     */

    showPopup () {
      this.show = !this.show
    },

    /**
     * @description 撤销协议提示窗显示与隐藏
     * @author zwh
     */
    dialogShow () {
      this.isShow = !this.isShow
    },

    /**
     * @description 跳转到各详情页面
     * @author 王哲
     */
    gotoPage (index) {
      if (!this.myIsLogin) {
        this.goToLogin()

        return
      }
      let options = {
        appId: '',
        param: {
          url: ''
        },
        closeCurrentApp: false
      }

      switch (index) {
        case 0:
        // 跳转银行卡详情页
          options.appId = '00010014'
          options.param.url = '/www/mine_bank_card_index.html'
          break
        case 1:
        // 跳转待办事项
          options.appId = '00010016'
          options.param.url = '/www/to_do_list_index.html'
          break
        case 2:
        // 跳转账户概览
          options.appId = '00010004'
          options.param.url = '/www/overview_page_content.html'
          break
        case 3:
        // 跳转收入页面
          options.appId = '00010003'
          options.param.url = '/www/income_expenditure_details_index.html'
          break
        case 4:
        // 跳转收入页面
          options.appId = '00010006'
          options.param.url = '/www/financial_index.html'
          options.param.position = 'true'
          break
        case 5:
        // 跳转收入页面
            options.appId = '00010025'
            options.param.url = '/www/loan_index.html'
          break
        default:
          break
      }
      this.$goose.context.startH5App(options)
    },

    /**
     * @description 跳转登录功能
     * @author 王哲
     */
    goToLogin () {
      let target = {
        param: {
          loginType: this.loginType,
          passData: {
            userPhone: this.userPhone
          }
        },
        closeCurrentApp: false
      }

      CommonUtil.goToLogin(target)
    },

    /**
     * @description 修改小眼睛状态
     * @author 王哲
     */
    changeType () {
      //小眼睛的变化
      this.showEye = !this.showEye
    },

    /**
     * @description 跳转设置功能
     * @author 王哲
     */
    gotoSetupContent () {
      let options = {
        appId: '00010007',
        param: {
          url: '/www/set_up_set_up_content.html'
        }
      }

      this.$goose.context.startH5App(options)
    },

    /**
     * @description 获取用户最后一次登录信息
     * @author 王哲
     */
    getLastLogFn () {
      let params = {}

      getLastLog(params, res => {
        console.log('getLastLog', res)
        this.requestInfo.getLastLog = true
        if (res.body.loginTime) {
          this.loginTime = res.body.loginTime
        }
      })
    },

    /**
     * @description 获取待办值
     */
    getAccountTransferplanListFn () {
      let year = new Date().getFullYear(), month = new Date().getMonth() + 1

      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      let myDate = year + '-' + month

      console.log('本月日期', myDate)
      let params = {
        dateTime: myDate
      }

      console.log('年份是', JSON.stringify(params))
      getAllDataList(params, res => {
        let mynum, myday

        if (res.header.code == '200') {
          this.requestInfo.getAllDataList = true
          // console.log('我的-获取待办值----------' + res.body)
          let planlists = res.body

          myday = new Date().getDate()
          if (myday >= 1 && myday <= 9) {
            myday = '0' + myday
          }
          mynum = 0
          planlists.forEach(element => {
            // console.log('今天是几号', myday, element.backlogTime.substring(8, 10))
            if (element.backlogTime.substring(8, 10) >= myday) {
              mynum++
            }
          })
          this.waitThing = mynum
          console.log('待办事项数量', this.waitThing)
        }
      })
    },

    /**
     * @description 获取用户银行卡信息
     * @author 王哲
     */
    getAccountBankCardListFn () {
      let params = {
        classify: 2
      }

      getAccountBankCardList(params, response => {
        console.log('getAccountBankCardList', response)
        this.requestInfo.getAccountBankCardList = true
        this.bankCardList.bankNum = response.body.appBankCards.length
        this.bankCardList.cardArr = response.body.appBankCards
      })
    },

    /**
     * @description 获取用户账户信息
     * @author 王哲
     */
    // getAccountAssetsFn () {
    //   let params = {}

    //   getAccountAssets(params, response => {
    //     console.log('查询账户信息返回时间测试: => 请求接口返回成功', new Date().getTime())
    //     console.log('getAccountAssets', response)
    //     this.requestInfo.getAccountAssets = true
    //     this.accAss.assetsSum = MoneyUtil.formatCurrency(Number(response.body.assetsSum))
    //   })
    // },

    /**
     * @description 获取用户账户收支信息
     * @author 王哲
     */
    getAccountBillListFn () {
      let params = {
        month: DateUtil.getYearMouth()
      }

      getAccountBillList(params, response => {
        console.log('getAccountBillList', response)
        this.requestInfo.getAccountBillList = true
        let billMouth = {}

        //支出
        billMouth.exp = response.body.exp
        //收入
        billMouth.inc = response.body.inc
        if (billMouth.exp == 0) {
          //支出百分比
          billMouth.expPer = '0%'
          //收入百分比
          billMouth.incPer = '99%'
        } else if (billMouth.inc == 0) {
          //支出百分比
          billMouth.expPer = '99%'
          //收入百分比
          billMouth.incPer = '0%'
        } else {
          let incPer, expPer

          expPer =
            (Number(billMouth.exp) /
              (Number(billMouth.exp) + Number(billMouth.inc))) *
            100

          incPer =
            (Number(billMouth.inc) /
              (Number(billMouth.exp) + Number(billMouth.inc))) *
            100

          //支出百分比
          billMouth.expPer = expPer + '%'
          //收入百分比
          billMouth.incPer = incPer + '%'
        }
        this.billMouth = billMouth
        console.log('billMouth', this.billMouth)
      })
    },

    /**
     * 判断用户操作登出回调函数
     *
     */
    logoutReturn () {
      this.myIsLogin = false
      this.showEye = false
      this.$emit('getloginstate', false)
      // 清空页面数据至未登录状态
      this.clearPage()
    },

    /**
     * 清空页面数据至未登录状态
     *
     */
    clearPage () {
      this.accAss = {
        //账户总览
        assetsSum: '0.00'
      }
      this.billMouth = {
        //收支信息
        exp: 0,
        inc: 0,
        //支出百分比
        expPer: '0%',
        incPer: '0%'
      }
      //待办
      this.waitThing = 0
      //银行卡信息
      this.bankCardList = {
        bankNum: 0
      }
      //用户名
      this.userName = ''
      //用户上次登录时间
      this.loginTime = ''
    },

    /**
     * @description 初始化页面数据
     * @author 王哲
     */
    initPageFn () {
      this.requestInfo = {
        getUserInfo: false,
        getLastLog: false,
        getAccountAssets: false,
        getAccountBillList: false,
        getAccountBankCardList: false,
        getAllDataList: false
      }
      if (!this.flag) {
        // 由于页面有多个并发请求，故设置统一loading
        this.$toast.loading({
          // 持续展示 toast
          duration: 0,
          // 禁用背景点击
          forbidClick: true,
          loadingType: 'spinner'
        })
        setTimeout(() => {
          // 超时时间暂停10S，10s后消除loading
          this.$toast.clear()
        }, 10000)
      }
      CommonUtil.getUserInfo()
        .then(res => {
          console.log('缓存中获取到的用户信息', typeof res)
          this.requestInfo.getUserInfo = true
          this.userName = res.cnName
          this.userPhone = res.phone
          if (res.verifyStatus == 1) {
            this.verifyStatusType = true
          } else {
            res.verifyStatusType = false
          }
          this.getLastLogFn()
          this.getAccountAssetsFn()

          this.getAccountBillListFn()

          this.getAccountBankCardListFn()

          this.getAccountTransferplanListFn()
        })
        .catch(this.clearPage())
    },

    /**
     * @description 监听resume状态
     * @author 王哲
     */
    resumeFn () {
      this.flag = true
      console.log('我的页面进入 resume监听')
      this.$goose.tools.getAPPDataCache({
        keys: [ 'UserNoByMobilePhone', 'userInfo' ]
      }, succ => {
        console.log('缓存中的数据', succ)
        if (succ.data.UserNoByMobilePhone) {
          this.coreUserNo = succ.data.UserNoByMobilePhone.coreUserNo
          this.userNo = succ.data.UserNoByMobilePhone.userNo
        }

        if (succ.data.userInfo) {
          this.phone = succ.data.userInfo.phone
          this.isLogin = true
        }
        if (this.isLogin) {
          console.log('我的页面监听到已经登陆')
          // 已经登录->直接进行操作
          if (window.name == '') {
            this.showEye = true
            window.name = 'isReload'
          } else if (window.name == 'isReload') {
            // this.showEye = this.showEyePub
          }

          this.myIsLogin = true
          // 当前为登录状态
          this.initPageFn()
          this.getCardData()
        } else {
          // 未登录
          console.log('我的页面监听到未登陆')
          this.myIsLogin = false
          this.showEye = false
          this.clearPage()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: @light-grey-6f;
  padding-bottom: 150px;
}

&::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}

.search-box {
  width: 100%;
  height: 220px;
  position: relative;
}

.minePageBackground {
  background: url(~@assets/images/index/code-head-back.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.landing-img {
  position: absolute;
  top: 90px;
  width: 58px;
  height: 58px;
  left: 25px;

  img {
    width: 100%;
    height: 100%;
  }
}

.no-login {
  background: @black-dark-4e;
  border-radius: 40px;
  width: 62px;
  height: 60px;
}

.login-btn {
  top: 110px;
  left: 120px;
  font-family: PingFangSC-Medium;
  position: absolute;
  color: @white;
  font-size: @goose-text;
}

.landing-user {
  font-family: PingFangSC-Medium;
  position: absolute;
  top: 98px;
  left: 100px;
  color: @white;
  font-size: @goose-text;
  .un-real-name {
    display: inline-block;
    text-align: center;
    margin-left: 10px;
    font-family: PingFangSC-Medium;
    font-size: @label-text;
    color: @white;
    letter-spacing: 0;
    width: 46px;
    height: 18px;
    line-height: 18px;
    border: 1px solid @white;
    border-radius: 4px;
  }
}

.langding-time {
  position: absolute;
  margin-top: 5px;
  top: 120px;
  left: 100px;
  color: @white;
  font-family: PingFangSC-Regular;
  font-size: @auxiliary-text;
}

.set-up {
  position: absolute;
  top: 100px;
  right: 15px;
  color: @white;
  font-family: PingFangSC-Regular;
  font-size: @auxiliary-text;
}

.user-information {
  position: absolute;
  top: 170px;
  left: 14px;
  border-radius: 3px;
  background: @white;
  width: 347px;
  height: 80px;
  font-size: @secondary-text;
  display: flex;
  justify-content: space-around;
  align-content: center;
  line-height: 20px;
  padding-top: 10px;

  .box-num {
    font-size: 25px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 36px;
  }
  .cardItem {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
}

.card {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-text;
    color: @black-dark;
  }

  span {
    /*  position: relative;
    left: 14px; */
    font-family: ArialMT;
    font-size: @tertiary-title;
    color: @green-dark;
  }
}
.user-box {
  width: 65px;
  text-align: center;
}
.event {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-text;
    color: @black-dark;
  }

  .pspan {
    /*  position: relative;
    left: 6px; */
    font-family: ArialMT;
    font-size: @tertiary-title;
    color: @green-dark;
  }
}

.preferential {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-text;
    color: @black-dark;
  }

  span {
    /*  position: relative;
    left: 6px; */
    font-family: ArialMT;
    font-size: @tertiary-title;
    color: @green-dark;
  }
}

.integral {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-text;
    color: @black-dark;
  }

  span {
    position: relative;
    right: 3px;
    font-family: ArialMT;
    font-size: @tertiary-title;
    color: @green-dark;
  }
}

.account-overview {
  background-color: @white;
  margin-top: 50px;
  margin-left: 14px;
  padding: 17px 22px;
  width: 347px;
  border-radius: 5px;
  vertical-align: middle;
  color: #106052;

  .account {
    font-family: PingFangSC-Medium;
    font-size: @goose-text;
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-family: PingFangSC-Medium;
      font-size: @subtitle;
    }
  }
  .eyediv {
    display: inline-block;
    position: relative;
  }
  .eyediv::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
  }
  .eye {
    margin-top: -3px;
    width: 16px;
    height: 16px;
  }

  p {
    padding-bottom: 5px;
  }

  .eyeIcon {
    color: @gray-9;
  }

  .arrow-icon {
    color: @gray-10;
  }

  .money-name {
    font-size: @goose-text;
    font-family: PingFangSC-Regular;
    color: @white;
  }

  .yesterdayEarning {
    font-family: PingFangSC-Regular;
    font-size: @goose-text;
    color: @black-dark-6;

    span {
      font-family: PingFangSC-Semibold;
      font-size: @goose-text;
    }
  }
}

.balance-payment {
  margin-top: 20px;
  margin-left: 8px;
  background: @white;
  width: 359px;
  border-radius: 5px;
  padding: 10px 24px;

  .account {
    font-size: @goose-text;
    color: @black-dark;
    font-family: PingFangSC-Medium;
    padding-bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: PingFangSC-Medium;
      font-size: @subtitle;
    }
  }

  .arrow-icon {
    color: @gray-10;
  }

  .payment-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;
  }

  .left {
    color: @black-dark-6;
    font-family: PingFangSC-Regular;

    .payment {
      font-size: @goose-text;
    }

    .payment-value {
      font-size: @secondary-text;
    }
  }

  .right {
    font-family: PingFangSC-Regular;

    color: @black-dark-6;

    .income {
      font-size: @goose-text;
    }

    .income-value {
      font-size: @secondary-text;
    }
  }

  .line-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .expPer-class {
    height: 4px;
    background: @currency-font-color;
  }

  .center-class {
    height: 4px;
    background: @white;
    width: 1%;
  }

  .incPer-class {
    height: 4px;
    background: @currency-background-color;
  }

  .footer {
    position: relative;
    bottom: 25px;
    width: 300px;
    height: 3px;
  }
}

.account {
  font-family: PingFangSC-Medium;
  font-size: @goose-text;
  color: @black-dark;
}

.agree-logo {
  padding: 20px 0 60px 0;
  display: flex;
  justify-content: center;

  img {
    width: 118px;
    height: 37px;
  }
}

.bill-box {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .bill-no {
    margin-top: 10px;
    padding-right: 24px;
    color: @gray-9;
  }

  .bill-ple {
    margin-top: 10px;
    padding-right: 24px;
    color: @blue-dark;
  }
}

.font-bold {
  font-weight: bold;
}

/deep/.popUp {
  background-color: transparent !important;
  padding:10px 5px
}
// 政策协议
.topPolicy{
background-color: rgba(255, 255, 255, 0.9);
  width:100%;
  height: 80px;
  border-radius: 8px;
  text-align: center;
  margin-top:60px;
  padding: 0 10px;
  color: blue;
  p{
      // border: 1px solid red;

      align-items: center;
      line-height: 40px;
      height: 40px;
      border-bottom: 1px solid rgb(202, 202, 202);
  }

}
.downPolicy{
  background-color: rgba(255, 255, 255, 0.9);
  width:100%;
  margin-top: 5px;
  height: 40px;
  border-radius: 8px;
  text-align: center;
   color: blue;
  p{
    // border: 1px solid red;
    padding: 0 10px;
    align-items: center;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px soli grey;
  }
}
.minePageBackground {
  background-image: url(~@/assets/images/index/mineBackground.png) !important;
  background-repeat: no-repeat;
  background-size: 100%;
}
.accountBackground {
  background-image: url(~@/assets/images/index/minebg.png) !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.color3 {
  color: #333 !important;
}

.color06052 {
  color: #106052;
}

.fz14 {
  font-size: 14px !important;
}
.fzw30 {
  font-size: 30px !important;
  font-weight: bold !important;
}

.mainLabel {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
  padding-left: 14px;
  margin-top: 13px;
  margin-bottom: 6px;
}

.mainItem {
  background-image: url(~@/assets/images/index/minitembg.png) !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 347px;
  margin: auto;
  padding: 18px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.loanItem {
  background-image: url(~@/assets/images/index/wddkbg.png) !important;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 347px;
  margin: auto;
  padding: 18px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.account1 {
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
}
.account2 {
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: bold;
  color: #F2685C;
  margin-bottom: 10px;
}

.mainItemLabel {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}

.colorF2685C {
  color:#F2685C;
}

.dkzt {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
}

.yszc {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  width: 100%;
  text-align: center;
  margin-top: 9px;
  span {
    text-decoration:underline
  }
}
</style>
