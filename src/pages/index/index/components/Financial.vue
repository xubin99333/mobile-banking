<template>
  <div class="app">
    <financial-search />
    <div class="holding">
      <img
        class="holdingImg"
        src="@/assets/images/index/accountBackground.png"
        alt=""
      />
      <div class="earnings">
        <div class="countNumber">
          <h2 v-if="show" class="count">+{{ number*0.006 | formatMoney}}</h2>
          <h2 v-if="!show" class="count">****</h2>
          <img
            :src="show ? openeye : nopeneye"
            class="eye"
            alt=""
            @click="changeType()"
          />
        </div>
        <p class="earningOne">昨日收益（元）</p>
        <p v-if="show" class="earningTwo">总持仓（元）{{ number | formatMoney }}</p>
        <p v-if="!show" class="earningTwo">总持仓（元）****</p>
      </div>
      <div class="financialIcons">
        <goose-grid :border="false" :column-num="4">
          <goose-grid-item
            v-for="(item, index) in funnctionList"
            :key="index"
            class="g_grid_item"
            @click="gotoPage(item)"
          >
            <img :src="item.img" alt="" />
            {{ item.name }}
          </goose-grid-item>
        </goose-grid>
      </div>
    </div>
    <financial-recommend />
  </div>
</template>

<script>
import FinancialSearch from './FinancialSearch'
import FinancialRecommend from './FinancialRecommend'
import moneyFormFn from '@assets/js/money-util'
import CommonUtil from '@/assets/js/common-util'

import { financeList, myFinanceList } from '@/assets/api/rpc-financial'

export default {
  components: {
    FinancialSearch,
    FinancialRecommend
  },
  filters: {
    formatMoney (val) {
      return moneyFormFn.formatCurrency(val)
    }
  },
  props: {
    loginType: {
      type: Object,
      default: null
    },
    showEyePub: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      count: '',
      earning: '',
      show: false,
      openeye: require('@/assets/images/index/index-eye-o.png'),
      //图片地址
      nopeneye: require('@/assets/images/index/index-eye-c.png'),

      /*
       *绿色主题
       * funnctionList: [
       *   {
       *     name: '理财产品',
       *     img: [require('@/assets/images/index/index-financial.svg')]
       *   },
       *   {
       *     name: '理财推荐',
       *     img: [require('@/assets/images/index/index-recommended.svg')]
       *   },
       *   {
       *     name: '存款',
       *     img: [require('@/assets/images/index/index-product.svg')]
       *   },
       *   {
       *     name: '风险评估',
       *     img: [require('@/assets/images/index/index-risk.jpg')]
       *   }
       * ],
       *蓝色主题
       */
      funnctionList: [
        {
          name: '理财产品',
          img: [require('@/assets/images/index/financial-blue.svg')]
        },
        {
          name: '理财推荐',
          img: [require('@/assets/images/index/commend-blue.svg')]
        },
        {
          name: '存款',
          img: [require('@/assets/images/index/deposit-blue.svg')]
        },
        {
          name: '风险评估',
          img: [require('@/assets/images/index/risk-blue.png')]
        }
      ],
      productList:[],
      number: 0,
      userNo: ''
    }
  },
  created() {
   
  },
  mounted () {
    let financialFund = {
      financial: 6537.3,
      fund: 5432.52,
      financialEarn: 0.65,
      fundEarn: 166
    }

    this.count = moneyFormFn.formatCurrency(Number(financialFund.financialEarn + financialFund.fundEarn))
    this.earning = moneyFormFn.formatCurrency(Number(financialFund.financial + financialFund.fund))
    CommonUtil.getUserInfo()
      .then(() => {
        // 已经登录->直接进行操作
        if (window.name == '') {
          this.show = true
          window.name = 'isReload'
        } else if (window.name == 'isReload') {
          this.show = this.showEyePub
        }
      })
      .catch(() => {
        // 未登录->跳转登录页
      })

    this.getHotList()
    this.getMyFinanceList()
  },

  methods: {
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
        this.productList = res.body.financeList
      })
    },
    getMyFinanceList () {
      this.$goose.tools.getAPPDataCache({
        keys: [ 'UserNoByMobilePhone', 'userInfo' ]
      }, succ => {
        if (succ.data.UserNoByMobilePhone) {
          this.userNo = succ.data.UserNoByMobilePhone.userNo
        }
         //资产接口
        let params = {
          pageNo: 1,
          pageSize: 10000,
          requestGlobalJnlNo:'111',
          requestJnlNo:'111',
          requestChannelCode:'PM',
          requestChannelId:'PM',
          startDate:'',
          endDate:'',
          userNo: this.userNo,
          financeTransType: '购买',
          userNo: this.userNo
        }

        myFinanceList(params, res => {
          this.number = res.body.totalAmount
        }, err => {
          console.log(err)
        })
      })
    },
    //获取是否登录
    isLogin () {
      console.log('finacial页面进入resume监听')
      let options = {
        param: {
          canJumpLogin: false
          //仅判断是否登陆，但不跳转登录
        }
      }

      CommonUtil.isUserLogin(options)
        .then(() => {
          // 已经登录->直接进行操作
          this.show = true
          this.getMyFinanceList()
        })
        .catch(() => {
          // 未登录->跳转登录页
        })
    },
    changeType () {
      let target = {
        param: {
          loginType: this.loginType
        },
        closeCurrentApp: false
      }

      CommonUtil.isUserLogin(target)
        .then(() => {
          // 已经登录->直接进行操作
          this.show = !this.show
          this.$emit('geteyestate', this.show)
          //小眼睛的变化
        })
        .catch(() => {
          // 未登录->跳转登录页
        })
    },
    gotoPage (item) {
      let options = {}

      switch (item.name) {
        case '理财产品':
          options = {
            appId: '00010006',
            param: {
              url: '/www/financial_index.html'
            },
            closeCurrentApp: false
          }

          this.$goose.context.startH5App(options)
          break
        case '理财推荐':
          let options = {
            appId: '00010006',
            param: {
              url: '/www/financial_details.html',
              data: this.productList[0],
              financeCode: this.productList[0].financeCode
            },
            closeCurrentApp: false
          }
          this.$goose.context.startH5App(options)
          break
        case '存款':
          options = {
            appId: '00010019',
            param: {
              url: '/www/deposit_index.html'
            },
            closeCurrentApp: false
          }
          this.$goose.context.startH5App(options)
          break
        case '风险评估':
          options = {
            appId: '00010015',
            param: {
              url: '/www/risk_assessment_index.html',
              loginType: this.loginType
            },
            closeCurrentApp: false
          }
          CommonUtil.isUserLogin(options)
            .then(() => {
              // 已经登录->直接进行操作
            })
            .catch(() => {
              // 未登录->跳转登录页
            })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  overflow-y: scroll;
  width: 100%;
  overflow-x: hidden;
}
.app::-webkit-scrollbar {
  display: none;
}
.holding {
  position: relative;
  margin-top: 15px;
  width: 400px;
  background: #fff;
  .holdingImg {
    position: absolute;
    left: 16px;
    top: 68px;
    border-radius: 5px;
    width: 343px;
    height: 120px;
    box-shadow: 0 2px 8px 0 rgba(198, 201, 213, 0.7);
    -moz-box-shadow: 0 2px 8px 0 rgba(198, 201, 213, 0.7);
    -webkit-box-shadow: 0 2px 8px 0 rgba(198, 201, 213, 0.7);
  }
  .earnings {
    position: relative;
    left: 40px;
    top: 80px;
    .count {
      font-family: PingFangSC-Medium;
      color: #fff;
      font-size: 24px;
    }
    .earningOne {
      font-family: PingFangSC-Regular;
      font-size: @auxiliary-text;
      font-weight: 60;
      color: #fff;
      margin-left: 4px;
    }
    .earningTwo {
      font-family: PingFangSC-Regular;
      font-size: @auxiliary-text;
      font-weight: 60;
      color: #fff;
      margin-top: 10px;
      margin-left: 4px;
    }
    img {
      width: 16px;
      height: 16px;
    }
  }
  /deep/.goose-grid-item__content {
    background: none;
  }

  .financialIcons {
    // position: relative;
    margin: 114px 15px 20px;
    width: 350px;
    // left: 15px;
    // top: 70px;
    img {
      width: 26px;
      height: 26px;
    }
    /deep/.goose-grid-item__content {
      border: none;
    }
    .g_grid_item {
      font-family: PingFangSC-Medium;
      font-size: @label-text;
      font-weight: 200;
      color: #333333;
      /deep/.goose-grid-item__content {
        display: flex;
        padding-bottom: 10px;
        img {
          margin-bottom: 5px;
        }
      }
    }
  }
}

.countNumber {
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
  }
}
</style>
