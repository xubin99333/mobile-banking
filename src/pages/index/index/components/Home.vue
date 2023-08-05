<template>
  <div class="index_content">
    <div class="content">
      <div class="search_box homePageBackground">
        <search :background-opacity="backgroundOpacity" />
        <div class="g_grid">
          <goose-grid :border="false" :column-num="4">
            <goose-grid-item
              v-for="(value, index) in tabs"
              :key="index"
              class="g_grid_item"
              @click="gotoPageContent(value)"
            >
              <img :src="value.icon" alt="" />
              {{ value.name }}
            </goose-grid-item>
          </goose-grid>
        </div>
      </div>
      <div class="vajra_district">
        <goose-grid :border="false" :column-num="5">
          <goose-grid-item
            v-for="(item, index) in functionList"
            :key="index"
            class="g_grid_item"
            @click="gotoPage(item)"
          >
            <img :src="item.icon" alt="" />
            {{ item.name }}
          </goose-grid-item>
        </goose-grid>
      </div>
      <div class="headlines">
        <img src="@/assets/images/index/horn.svg" alt="" />
        <goose-notice-bar :scrollable="false">
          <goose-swipe
            :autoplay="changeTime"
            :show-indicators="false"
            vertical
            class="notice-swipe"
          >
            <goose-swipe-item @click="toNotices"
              >大项目落地 投资现结构持续优化好势头</goose-swipe-item
            >
            <goose-swipe-item @click="toNotices"
              >大项目落地 投资现结构持续优化好势头</goose-swipe-item
            >
          </goose-swipe>
        </goose-notice-bar>
      </div>
       <!-- 动态组件部分，除了头部菜单头条信息服务菜单功能其他都动态组件加载 -->
       <div v-for="(item, index) in moduleGroupList" :key="index" v-if="index > 2">
          <component
            ref="childRef"
            :is="item.componentsName"
            :itemVal="homePageData[item.componentsName]"
            :boothList = "boothList"
          ></component>
        </div>
      <!-- <div class="img_borrow">
        <goose-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
          <goose-swipe-item @click="toAds">
            <div class="swipitem">
              <p>月月领大额消费券</p>
              <span>1月消费券已到 速领</span>
            </div>
            <img src="@/assets/images/index/swipe-img.png" alt="" />
          </goose-swipe-item>
          <goose-swipe-item @click="toAds">
            <div class="swipitem">
              <p>月月领大额消费券</p>
              <span>1月消费券已到 速领</span>
            </div>
            <img src="@/assets/images/index/swipe-img.png" alt="" />
          </goose-swipe-item>
          <goose-swipe-item @click="toAds">
            <div class="swipitem">
              <p>月月领大额消费券</p>
              <span>1月消费券已到 速领</span>
            </div>
            <img src="@/assets/images/index/swipe-img.png" alt="" />
          </goose-swipe-item>
        </goose-swipe>
      </div> -->
      <div class="hot_events">
        <recommended-for-you-blue />
        <!-- <select-list /> -->
        <hotevent-blue />
      </div>
      <div class="xy" @click="gotoPageNext">用户信息收集声明</div>
    </div>
  </div>
</template>

<script>
import search from './Search'
import HoteventBlue from './HoteventBlue'
import RecommendedForYouBlue from './RecommendedForYouBlue'
import SpecialService from './SpecialService'
import SelectList from './SelectList'
import hotMoneyModule from './childComponents/hotMoneyModule'
import loanZoneModule from './childComponents/loanZoneModule'
import advModuleS from './childComponents/advModuleS'
import advModuleM from './childComponents/advModuleM'
import advModuleL from './childComponents/advModuleL'
import CommonUtil from '@/assets/js/common-util'
import { queryValidModule, getBooth } from '@/assets/api/rpc-home'

import { financeList } from '@/assets/api/rpc-financial'

// const axios = require('axios')

export default {
  name: 'Home',
  components: {
    search,
    HoteventBlue,
    RecommendedForYouBlue,
    SpecialService,
    SelectList,
    hotMoneyModule,
    loanZoneModule,
    advModuleS,
    advModuleM,
    advModuleL
  },
  props: {
    loginType: {
      type: Object,
      default: null,
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      canClick: true,
      active: 0,
      uptimer: null,
      downtimer: null,
      tabs: [
        {
          name: '账户总览',
          packageid: '00010004',
          url: '/www/overview_page_content.html',
          icon: [require('@/assets/images/index/icon1.png')],
          needLogin: true
        },
        {
          name: '转账',
          packageid: '00010005',
          url: '/www/transfer_transferAccounts.html',
          icon: [require('@/assets/images/index/icon2.png')],
          needLogin: true
        },
        {
          name: '收支明细',
          packageid: '00010003',
          url: '/www/income_expenditure_details_index.html',
          icon: [require('@/assets/images/index/icon3.png')],
          needLogin: true
        },
        {
          name: '扫一扫',
          icon: [require('@/assets/images/index/icon4.png')],
          needLogin: false
        }
      ],
      functionList: [
        {
          name: '理财产品',
          packageid: '00010006',
          url: '/www/financial_index.html',
          icon: [require('@/assets/images/index/financial.svg')],
          needLogin: false
        },
        {
          name: '网点预约',
          packageid: '00010008',
          url: '/www/near_site_index.html',
          icon: [require('@/assets/images/index/make-appointment.svg')],
          needLogin: false
        },
        {
          name: '交易查询',
          packageid: '00010003',
          url: '/www/income_expenditure_details_serach.html',
          icon: [require('@/assets/images/index/query.svg')],
          needLogin: true
        },
        {
          name: '话费充值',
          packageid: '00010009',
          url: '/www/living_expenses_index.html',
          icon: [require('@/assets/images/index/pay-cost.svg')],
          needLogin: true
        },
        {
          name: '全部',
          packageid: '00010010',
          url: '/www/all_applications_index.html',
          icon: [require('@/assets/images/index/all.svg')],
          needLogin: false
        }
      ],
      newList: [],
      backgroundOpacity: 0,
      homePageData: {}, //主页数据
      groupMenuList: [],//分组数据
      moduleGroupList: [],
      userLevel: "1",
      changeTime: 1000,
      boothList: [], //广告列表
      productList1: []
    }
  },
  created() {
    this.$goose.tools.getAPPDataCache({
      keys: [ 'userLevel', 'userInfo' ]
    },
    succ => {
      console.log(succ, 'userLevel获取--=========')
      if (succ.data.userLevel) {
        this.userLevel = "" + succ.data.userLevel
        this.queryAllMenuByAreaFn()
        console.log(succ, 'userLevel获取--=========')
      } else {
        this.userLevel = "1"
        this.queryAllMenuByAreaFn()
      }
    })
  },
  mounted() {
    //监听页面滚动
    window.addEventListener('scroll', this.windowScroll, true)
    this.windowScroll()
    this.getHotList()
  },
  destroyed() {
    //销毁滚动事件
    window.removeEventListener('scroll', this.windowScroll, true)
  },
  methods: {
    gotoPageNext () {
      this.$goose.context.startH5App({
        appId: '99999999',
        param: {
          url: '/www/agreement_index2.html'
        }
      })
    },
    getHotList () {
      let params = {
        "pageNo": 1,
        "pageSize": 10000,
        "requestGlobalJnlNo": "123",
        "requestJnlNo": "123",
        "requestChannelCode": "PM",
        "requestChannelId": "PM",
        "channelCode":"PM"
      }
      financeList (params, res => {
        this.productList1 = res.body.financeList
      })
    },
    windowScroll() {
      let slideHeight, scrollTop, opacity

      scrollTop =
        document.getElementsByClassName('index_content')[0].scrollTop || ''
      slideHeight = 80
      opacity = scrollTop / slideHeight
      this.backgroundOpacity = opacity
    },
    gotoPageContent(value) {
      if (this.uptimer) {
        clearTimeout(this.uptimer)
        this.uptimer = null
      }
      this.uptimer = setTimeout(() => {
        this.canClick = true
      }, 300)
      if (this.canClick) {
        this.canClick = false
        if (value.name === '扫一扫') {
          //跳转扫一扫-不是跳转离线包形式
          this.$goose.native.scan()
        } else if (value.needLogin && this.isLogin === false) {
          //需要登录后才可以跳转页面

          let target = {
            appId: value.routerName,
            param: {
              url: value.pageUrl,
              loginType: this.loginType,
            },
            closeCurrentApp: false,
          }
          CommonUtil.goToLogin(target)
        } else {
          //不需要登录就可以直接跳转
          let options = {
            appId: value.routerName,
            param: {
              url: value.pageUrl,
            },
            closeCurrentApp: false,
          }
          this.$goose.context.startH5App(options)
        }
      }
    },
    gotoPage(item) {
      if (this.downtimer) {
        clearTimeout(this.downtimer)
        this.downtimer = null
      }
      this.downtimer = setTimeout(() => {
        this.canClick = true
      }, 300)
      if (this.canClick) {
        this.canClick = false
        if (item.packageid == '11111111') {
          this.$toast('敬请期待')

          return
        }
        if (item.needLogin && this.isLogin === false) {
          //需要登录后才可以跳转页面
          let target = {
            appId: item.routerName,
            param: {
              url: item.pageUrl,
              loginType: this.loginType,
            },
            closeCurrentApp: false,
          }

          if (item.menuOrderInGroup == '6') {
            console.log(this.productList1[0])
            target.param.financeCode = this.productList1[0].financeCode
            target.param.data = this.productList1[0]
          }

          CommonUtil.goToLogin(target)
        } else {
          //不需要登录就可以直接跳转
          let options = {}
          if (item.name === '全部') {
            options = {
              appId: item.routerName,
              param: {
                url: item.pageUrl,
                passData: {
                  loginType: this.loginType,
                  isLogin: this.isLogin,
                  userLevel: this.userLevel
                  // groupMenuList: this.groupMenuList,
                },
              },
              closeCurrentApp: false,
            }
          } else {
            options = {
              appId: item.routerName,
              param: {
                url: item.pageUrl,
              },
              closeCurrentApp: false,
            }
          }

          if (item.menuOrderInGroup == '6') {
            console.log(this.productList1[0])
            options.param.data = this.productList1[0]
            options.param.financeCode = this.productList1[0].financeCode
          }
          this.$goose.context.startH5App(options)
        }
      }
    },
    toNotices() {
      let options = {
        appId: '00010023',
        param: {
          url: '/www/adsAndNotices_notices.html',
        },
      }

      this.$goose.context.startH5App(options)
    },
    toAds() {
      let options = {
        appId: '00010023',
        param: {
          url: '/www/adsAndNotices_index.html',
        },
      }

      this.$goose.context.startH5App(options)
    },
    queryAllMenuByAreaFn() {
      // console.log('userLevel=', this.userLevel)
      // let params = {
      //   userLevel: this.userLevel
      // }

      // queryValidModule(params, res => {
      //   console.log('获取首页生效模块地址接口调用成功----', res)
        this.homePageData = this.menu

        if (this.homePageData.headMenu) {
          this.tabs = this.homePageData.headMenu.menuList
        }
        if (this.homePageData.serviceMenu) {
          this.functionList = this.homePageData.serviceMenu.detailList
        }
        if (this.homePageData.headlineMenu) {
          this.changeTime = this.homePageData.headlineMenu.changeTime
        }
        if (this.homePageData.moduleGroup) {
          this.moduleGroupList = this.homePageData.moduleGroup.moduleGroupList
        }
        // this.groupMenuList =  this.homePageData.serviceMenu.groupMenuList


        this.getBoothFn(this.userLevel, "2")

      // }, err => {
      //   console.log('获取首页生效模块地址接口调用失败----', err)
      // })
      
    },
    getBoothFn (userLevel, boothType) {
      let params = {
        userLevel: userLevel,
        boothType: boothType
      }
      getBooth(params, res => {
        console.log('getBooth获取广告~~~~~', res)
        this.boothList = res
      })
    },
  },
}
</script>

<style lang="less" scoped>
.xy {
  text-align: center;
	margin-top: 40px;
	font-size: 14px;
	text-decoration: underline;
}
.index_content {
  background: @white;
  display: flex;
  display: -webkit-flex;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
}
.content {
  flex: 1;
  padding-bottom: 100px;
}
.homePageBackground {
}
.search_box {
  background: url(~@assets/images/index/cattle.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 200px;
  position: relative;
  .g_grid {
    /deep/.goose-grid-item__content {
      position: relative;
      top: 19vw;
      margin-top: 2px;
      background: none;
      border: none;
    }
    .g_grid_item {
      font-size: @secondary-text;
      color: @white;
      font-family: PingFangSC-Medium;
      /deep/.goose-grid-item__content {
        display: flex;
        img {
          margin-bottom: 2px;
          width: 50px;
        }
      }
    }
  }
  .p_mobile_bank {
    position: relative;
    top: 70px;
    padding: 10px 0 5px 35px;
    display: flex;
    p {
      font-family: PingFangSC-Medium;
      font-size: @goose-text;
      color: @green-dark;
    }
    .img_mobile_bank {
      margin-left: 10px;
      img {
        width: 100px;
        height: 24px;
      }
    }
  }
  .p_new {
    padding: 0px 0 20px 35px;
    display: flex;
    position: relative;
    top: 70px;
    p {
      font-size: @auxiliary-text;
      color: @white;
      padding: 0 5px 0 0;
    }
  }
  .get_involved_now {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    img {
      width: 108px;
      height: 40px;
    }
  }
}
.vajra_district {
  img {
    width: 26px;
    height: 26px;
  }
  /deep/.goose-grid-item__content {
    border: none;
  }
  .g_grid_item {
    font-size: @label-text;
    color: @black-dark;
    font-family: PingFangSC-Medium;
    /deep/.goose-grid-item__content {
      display: flex;
      padding: 20px 0 10px;
      img {
        margin-bottom: 5px;
      }
    }
  }
}
.headlines {
  display: flex;
  padding: 6px 15px;
  border-top: 1px solid @gray-1;
  background-color: @gray-1;
  margin-top: 6px;
  border-bottom: 1px solid @gray-1;
  img {
    margin-right: 4px;
  }
  p {
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 0.5px solid @green-dark;
    border-radius: 2px;
    font-size: @label-text;
    font-family: PingFangSC-Medium;
    color: @green-dark;
    margin-right: 0px;
  }
  /deep/.goose-notice-bar {
    height: 20px;
    width: 300px;
    background: @gray-1;
    padding: 0px 8px;
  }
  /deep/.goose-notice-bar__wrap {
    height: 100%;
  }

  /deep/.goose-notice-bar__content {
    height: 100%;
    width: 100%;
  }
  .notice-swipe {
    height: 20px;
    line-height: 20px;
    background-color: @gray-1;
  }
  /deep/.goose-swipe-item {
    height: 46px;
    width: 280px;
    font-size: @secondary-text;
    color: @black-dark;
    font-family: PingFangSC-Regular;
  }
}

.img_borrow {
  padding: 0 15px;
  .swipitem{
    color:@white;
    position: absolute;
      z-index: 5;
      top: 30px;
      left: 45px;
    p{
      font-size:16px;
    }
    span{
      font-size:12px;
      margin-top: 8px;
    }
  }
  img {
    width: 100%;
    position: relative;
    top: 16px;
  }
}
.agree_logo {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  img {
    width: 118px;
    height: 37px;
  }
}
.homePageBackground {
	background-image: url(~@/assets/images/index/indexBackground.png) !important; 
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
