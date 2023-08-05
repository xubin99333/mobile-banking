<template>
  <div class="index_content">
    <div class="content">
      <div class="search_box">
        <search :background-opacity="backgroundOpacity" />
        <div class="g_grid">
          <goose-grid :border="false" :column-num="4">
            <goose-grid-item
              v-for="(value, index) in tabs"
              :key="index"
              class="g_grid_item"
              @click="gotoPageContent(value)"
            >
              <img :src="value.img" alt="" />
              {{ value.name }}
            </goose-grid-item>
          </goose-grid>
        </div>
        <div class="p_mobile_bank">
          <p>{{ $t('LOGIN.bankName') }}</p>
          <div class="img_mobile_bank">
            <img src="@/assets/images/index/ad-text-new.png" alt="" />
          </div>
        </div>
        <div class="p_new">
          <p>新模式.</p>
          <p>新业态.</p>
          <p>新未来.</p>
        </div>
        <div class="get_involved_now">
          <img src="@/assets/images/index/get-involved-now.png" alt="" />
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
            <img :src="item.img" alt="" />
            {{ item.name }}
          </goose-grid-item>
        </goose-grid>
      </div>
      <div class="headlines">
        <p>头条</p>
        <goose-notice-bar :scrollable="false">
          <goose-swipe
            :autoplay="3000"
            :show-indicators="false"
            vertical
            class="notice-swipe"
          >
            <goose-swipe-item>80后和90后：到底谁的负债更多，压力更大？</goose-swipe-item>
            <goose-swipe-item>外交部回应美加征关税措施</goose-swipe-item>
          </goose-swipe>
        </goose-notice-bar>
      </div>
      <div class="img_borrow">
        <img src="@/assets/images/index/img-borrow.png" alt="" />
      </div>
      <div class="hot_events">
        <hotevents />
        <recommended-for-you />
        <special-service />
        <selected-list />
      </div>
      <div class="agree_logo">
        <img src="@/assets/images/index/agree-lit-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import search from './Search'
import Hotevents from './Hotevents'
import RecommendedForYou from './RecommendedForYou'
import SpecialService from './SpecialService'
import SelectedList from './SelectedList'
import CommonUtil from '@/assets/js/common-util'

export default {
  name: 'HomePage',
  components: {
    search,
    Hotevents,
    RecommendedForYou,
    SpecialService,
    SelectedList
  },
  props: {
    loginType: {
      type: Object,
      default: null
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
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
          img: [require('@/assets/images/index/icon1.png')],
          needLogin: true
        },
        {
          name: '转账',
          packageid: '00010005',
          url: '/www/transfer_transferAccounts.html',
          img: [require('@/assets/images/index/icon2.png')],
          needLogin: true
        },
        {
          name: '收支明细',
          packageid: '00010003',
          url: '/www/income_expenditure_details_index.html',
          img: [require('@/assets/images/index/icon2-copy.png')],
          needLogin: true
        },
        {
          name: '扫一扫',
          img: [require('@/assets/images/index/icon4.png')],
          needLogin: false
        }
      ],
      functionList: [
        {
          name: '理财产品',
          packageid: '00010006',
          url: '/www/financial_index.html',
          img: [require('@/assets/images/index/financial.svg')],
          needLogin: false
        },
        {
          name: '网点预约',
          packageid: '00010008',
          url: '/www/near_site_index.html',
          img: [require('@/assets/images/index/make-appointment.svg')],
          needLogin: false
        },
        {
          name: '交易查询',
          packageid: '00010003',
          url: '/www/income_expenditure_details_serach.html',
          img: [require('@/assets/images/index/query.svg')],
          needLogin: true
        },
        {
          name: '话费充值',
          packageid: '00010009',
          url: '/www/living_expenses_index.html',
          img: [require('@/assets/images/index/pay-cost.svg')],
          needLogin: true
        },
        {
          name: '全部',
          packageid: '00010010',
          url: '/www/all_applications_index.html',
          img: [require('@/assets/images/index/all.svg')],
          needLogin: false
        }
      ],
      backgroundOpacity: 0
    }
  },

  mounted () {
    //监听页面滚动
    window.addEventListener('scroll', this.windowScroll, true)
    this.windowScroll()
  },
  destroyed () {
    //销毁滚动事件
    window.removeEventListener('scroll', this.windowScroll, true)
  },
  methods: {
    windowScroll () {
      let slideHeight, scrollTop, opacity

      scrollTop = document.getElementsByClassName('index_content')[0].scrollTop || ''
      slideHeight = document.querySelector('.search_content').offsetHeight
      opacity = scrollTop / slideHeight
      this.backgroundOpacity = opacity
    },
    gotoPageContent (value) {
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
            appId: value.packageid,
            param: {
              url: value.url,
              loginType: this.loginType
            },
            closeCurrentApp: false
          }

          console.log(target)
          CommonUtil.goToLogin(target)
        } else {
          //不需要登录就可以直接跳转
          let options = {
            appId: value.packageid,
            param: {
              url: value.url
            },
            closeCurrentApp: false
          }

          this.$goose.context.startH5App(options)
        }
      }
    },
    gotoPage (item) {
      if (this.downtimer) {
        clearTimeout(this.downtimer)
        this.downtimer = null
      }
      this.downtimer = setTimeout(() => {
        this.canClick = true
      }, 300)
      if (this.canClick) {
        this.canClick = false
        if (item.needLogin && this.isLogin === false) {
          //需要登录后才可以跳转页面
          let target = {
            appId: item.packageid,
            param: {
              url: item.url,
              loginType: this.loginType
            },
            closeCurrentApp: false
          }

          CommonUtil.goToLogin(target)
        } else {
          //不需要登录就可以直接跳转
          let options = {}

          if (item.name === '全部') {
            options = {
              appId: item.packageid,
              param: {
                url: item.url,
                loginType: this.loginType,
                isLogin: this.isLogin
              },
              closeCurrentApp: false
            }
          } else {
            options = {
              appId: item.packageid,
              param: {
                url: item.url
              },
              closeCurrentApp: false
            }
          }

          this.$goose.context.startH5App(options)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
}
.search_box {
  width: 100%;
  height: 275px;
  background: url(~@assets/images/index/home-page-background-index.png) no-repeat;
  background-size: 100%;
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
      font-size: 14px;
      color: @white;
      font-family: PingFangSC-Medium;
      /deep/.goose-grid-item__content {
        display: flex;
        img {
          margin-bottom: 10px;
          width: 27px;
          height: 27px;
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
      font-size: 16px;
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
      font-size: 13px;
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
    font-size: 12px;
    color: @black-dark;
    font-family: PingFangSC-Medium;
    /deep/.goose-grid-item__content {
      display: flex;
      padding-bottom: 10px;
      img {
        margin-bottom: 5px;
      }
    }
  }
}
.headlines {
  display: flex;
  padding: 10px 15px;
  border-top: 1px solid @gray-2;
  border-bottom: 1px solid @gray-2;
  p {
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 0.5px solid @green-dark;
    border-radius: 2px;
    font-size: 12px;
    font-family: PingFangSC-Medium;
    color: @green-dark;
    margin-right: 0px;
  }
  /deep/.goose-notice-bar {
    height: 20px;
    width: 300px;
    background: @white;
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
  }
  /deep/.goose-swipe-item {
    height: 46px;
    width: 280px;
    font-size: 14px;
    color: @black-dark;
    font-family: PingFangSC-Regular;
  }
}
.img_borrow {
  padding: 0 15px;
  margin: 15px 0px 26px 0px;
  img {
    width: 100%;
    height: 80px;
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
</style>
