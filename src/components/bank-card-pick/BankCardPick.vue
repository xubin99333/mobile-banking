<template>
  <div>
    <div>
      <goose-popup v-model="show" class="g_popup" position="bottom">
        <div class="g_popup_head">
          <div class="title">{{ title }}</div>
          <div class="right" @click="showPopup">
            <goose-icon name="cross" class="x_icon"></goose-icon>
          </div>
        </div>
        <div class="g_body">
          <div
            v-for="(item, index) in columns"
            :key="index"
            class="g_cell"
            @click="choose(item, index)"
          >
            <div class="g_bankImg">
              <img :src="bankImg" class="bank_img" alt="" />
            </div>
            <div class="g_info">
              <div class="info acctNo">
                {{ item.openBankOrgName }}{{ item.accountNo | cardNoFilter }}
              </div>
              <div class="info acctBalance">
                余额 ￥{{ item.availableAmt | formatMoney }}
              </div>
            </div>
            <div class="g_icon">
              <!-- <goose-icon v-show="index != currentIndex" name="circle"/>
              <goose-icon v-show="index == currentIndex" name="checked"/> -->
              <img v-show="index == currentIndex" class="success" src="@/assets/images/transfer/red-check.png" alt="" />
            </div>
          </div>
        </div>
      </goose-popup>
    </div>
  </div>
</template>

<script>
// import { getAccountBankcardList } from '@/assets/api/rpc-transfer'
import { getPerUserAccount } from '@/assets/api/rpc-financial'
import moneyFormFn from '@assets/js/money-util'

export default {
  name: 'BankCardPick',
  filters: {
    //格式化余额
    formatMoney (val) {
      return moneyFormFn.formatCurrency(val)
    },
    cardNoFilter (value) {
      if (value != '') {
        return '（' + value.substr(value.length - 4, value.length) + '）'
      } else {
        return ''
      }
    }
  },
  props: {
    //title
    title: {
      type: null,
      default: '选择银行卡'
    },
    //卡类型，0-借记卡 1-信用卡 2-全部
    classify: {
      type: null,
      default: ''
    },
    //选中index
    value: {
      type: null,
      default: ''
    },
    //是否展示全部账户的选项，注意当选择显示全部账户，如果想默认选择全部账户，value需要传字符串 all 或者传卡片列表
    showAllAccountSelect: {
      type: null,
      default: false
    }
  },

  data () {
    return {
      show: false,
      //卡类型
      classifyType: '',
      //卡列表
      columns: [],
      //选中值
      currentValue: '',
      //选中index
      currentIndex: '',
      bankImg: [require('@/assets/images/public/agree-logo-pro.png')]
    }
  },
  watch: {
    //监听是否展示该组件
    show (val) {
      let vm = this

      vm.$emit('isShow', val)
    }
  },

  mounted () {
    this.classifyType = this.classify
    this.getCardData()
  },
  
  methods: {

    /*
     * 查询用户银行卡信息
     */
    getCardData () {
      // let params = {
      //   classify: this.classifyType
      // }

      // getAccountBankcardList(params, response => {
      //   this.columns = []
      //   if (response.body.appBankCards != null) {
      //     this.columns = response.body.appBankCards
      //     if (this.showAllAccountSelect) {
      //       let allSelect = {
      //         cardBank: '全部账户',
      //         cardNo: ''
      //       }

      //       this.columns.unshift(allSelect)
      //     }
      //     this.querySelectIndex()
      //   }
      // })
      this.$goose.tools.getAPPDataCache({
        keys: [ 'UserNoByMobilePhone', 'userInfo' ]
      }, succ => {
         //资产接口
        let params = {
          "userNo": succ.data.UserNoByMobilePhone.userNo,
          "channelCode": "PM",
          "requestGlobalJnlNo": "1111",
          "requestJnlNo": "11111",
          "requestChannelCode": "PM",
          "requestChannelId": "PM"
        }

        getPerUserAccount(params, res => {
          this.columns = res.body.accountVo
          this.querySelectIndex()
        }, err => {
          console.log(err)
        })
      })
    },
    //查找选中值
    querySelectIndex () {
      if ( this.showAllAccountSelect && (this.value == this.columns || this.value == 'all') ) {
        this.currentIndex = 0
      } else if (this.value != '') {
        for (let i = 0; i < this.columns.length; i++) {
          if (this.value.accountNo == this.columns[i].accountNo) {
            this.currentIndex = i
            this.currentValue = this.columns[i]
            this.$emit('input', this.currentValue)
          }
        }
      } else {
        this.currentIndex = 0
        this.currentValue = this.columns[0]
        this.$emit('input', this.currentValue)
      }
    },
    //展示popup
    showPopup () {
      this.show = !this.show
    },
    //关闭popup
    closePopup () {
      this.show = false
    },
    //选中
    choose (val, index) {
      this.currentIndex = index
      if (this.showAllAccountSelect && index == 0) {
        this.currentValue = this.columns
      } else {
        this.currentValue = val
      }
      this.$emit('input', this.currentValue)
      this.showPopup()
    }
  }
}
</script>

<style lang="less" scoped>
.g_popup {
  min-height: 250px;
  .g_popup_head {
    display: flex;
    justify-content: space-between;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid @light-grey-0f;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      color: @black-dark-3a;
      letter-spacing: 0;
      text-align: center;
      width: 80%;
      margin-left: 10%;
    }
    .right {
      height: 46px;
      line-height: 46px;
      width: 10%;
      text-align: center;
      font-size: 20px;
      .x_icon {
        color: @grey-dark;
        padding-right: 20px;
      }
    }
  }
  .g_body {
    .g_cell {
      height: 72px;
      line-height: 22px;
      border-bottom: 1px solid @light-grey-0f;
      display: flex;
      align-items: center;
      padding-left: 15px;
      .g_bankImg {
        margin-left: 12px;
        float: left;
        line-height: 40px;
        height: 32px;
        width: 32px;
        background-color: @currency-background-color;
        border-radius: 50%;
        position: relative;
        .bank_img {
          width: 70%;
          height: 65%;
          margin-top: -2px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .g_info {
        float: left;
        width: 64%;
        font-size: 15px;
        color: @black-dark-3a;
        padding-left: 12px;
        .acctBalance {
          // margin: 4px 0 0 0;
          color: @grey-dark;
          font-size: 14px;
        }
        .acctNo {
          font-size: 15px;
          text-align: justify;
          // margin: 14px 0 0 0;
        }
      }
      .g_icon {
        float: left;
        padding-left: 18px;
        width: 10%;
        color: @currency-background-color;
        font-size: 22px;
      }
    }
  }
  .success {
    width: 20px;
    height: 20px;
  }
}
</style>
