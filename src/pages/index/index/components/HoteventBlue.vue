<template>
  <div class="page_content">
    <div class="gray"></div>
    <div class="p_header">
      <p><span class="line2"></span>热门活动</p>
    </div>
    <div class="page_content_center">
      <div class="list" @click="goToPage(2)">
        <div class="listLeft">
          <img src="@/assets/images/index/jgg.png" alt="">
        </div>
        <div class="listRight">
          <div class="listRightTop">
            <p class="listRightTopTitle">每日抽奖中大礼</p>
            <p class="listRightTopValue">海量奖品送不停</p>
          </div>
          <div class="listRightBottom">立即查看></div>
        </div>
      </div>
      <div class="list" @click="goToPage(1)">
        <div class="listLeft">
          <img src="@/assets/images/index/bx.png" alt="">
        </div>
        <div class="listRight">
          <div class="listRightTop">
            <p class="listRightTopTitle">每日抽奖中大礼</p>
            <p class="listRightTopValue">海量奖品送不停</p>
          </div>
          <div class="listRightBottom">立即查看></div>
        </div>
      </div>
      <!-- <goose-row class="page_content_center_active" @click="goToPage(1)">
        <goose-col span="6"> <img class="img_card" src="@/assets/images/index/gifts.png" alt=""/></goose-col>
        <goose-col span="12">
          <div class="text">
            <p>邀请您参与开宝箱</p>
            <div class="span">送1000积分</div>
          </div>
        </goose-col>
        <goose-col span="6">
          <div class="tosee">去看看</div>
        </goose-col>
      </goose-row>
      <goose-row class="page_content_center_active" @click="goToPage(2)">
        <goose-col span="6"> <img class="img_card" src="@/assets/images/index/movie.png" alt=""/></goose-col>
        <goose-col span="12">
          <div class="text">
            <p>每日抽奖有大礼</p>
            <div class="span">每天签到 每天抽奖</div>
          </div>
        </goose-col>
        <goose-col span="6">
          <div class="tosee">去看看</div>
        </goose-col>
      </goose-row> -->

    </div>
  </div>
</template>
<script>
import CommonUtil from '@/assets/js/common-util'
import { getEncryptData } from '@/assets/api/rpc-home'

export default {
  data () {
    return {
      scroll: true,
      topScroll: false,
      opacity: 0,
      diasabledInput: false,
      encryData: '',
      sign: '',
      encryKey: '',
      userNo: ''
    }
  },
  created () {
  },
  methods: {
    getEncryptData() {
      
    },
    goToPage (type) {
      CommonUtil.isUserLogin()
        .then(() => {
          CommonUtil.getUserInfo()
            .then(res => {
              console.log('缓存中获取到的用户信息', typeof res)
              let params = {
                param: res.phone
              }
              this.$goose.tools.getAPPDataCache({
                keys: [ 'UserNoByMobilePhone', 'userInfo' ]
              }, succ => {
                if (succ.data.UserNoByMobilePhone) {
                  this.coreUserNo = succ.data.UserNoByMobilePhone.coreUserNo
                  this.userNo = succ.data.UserNoByMobilePhone.userNo
                  getEncryptData(params, res => {
                    this.encryData = res.encryData
                    this.sign = res.sign
                    this.encryKey = res.encryKey
                    let url = ''
                    if (type === 1) {
                      url = `https://adev.agree.com.cn/210/11/activitygame_uat/#/Common?TransId=kbxyhl&ChannelId=2002&ActivitySeq=${this.userNo}&CloudTenantId=yrrcbimp&SceneNo=6006&Sign=${this.sign}&EncryKey=${this.encryKey}&EncryData=${this.encryData}`
                    } else if (type === 2) {
                      url = `https://adev.agree.com.cn/210/11/activitygame_uat/#/Common?TransId=jggcj&ChannelId=2002&ActivitySeq=${this.userNo}&CloudTenantId=yrrcbimp&SceneNo=6006&Sign=${this.sign}&EncryKey=${this.encryKey}&EncryData=${this.encryData}`
                    }
                    let options = {
                      url: url,
                      param: {
                        isShowTitleBar: true
                      }
                    }
    
                    this.$goose.context.pushWindow(options)
                  }, err => {
                    console.log(err)
                  })
                }

              })
            })
        })
        .catch(() => {
          this.isLogin = false
          console.log('首页判断是否登陆-------' + this.isLogin)
        })
    },
  }
}
</script>
<style lang="less" scoped>
.page_content {
  margin-top: 24px;
}
.gray{
  width: 100%;
  background-color: @gray-2;
  height: 7px;
}
.p_header {
  font-weight: 600;
  font-family: PingFangSC-Medium;
  font-size: @subtitle;
  color: #333333;
  height: 53px;
  line-height: 53px;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  // p {
  //   font-family: PingFangSC-Medium;
  //   font-size: @subtitle;
  //   color: #333333;
  //   line-height: 12px;
  //   margin-left: 4px;
  // }
}
.page_content_center{
  padding: 0 20px;
  width: 100%;
  .page_content_center_active{
    width: 100%;
    margin: 20px 4px;
    img {
      width: 80px;
      height: 60px;
    }
    .text{
      padding-left: 12px;
      p{
        font-size: @goose-text;
        font-weight: 600;
        color: @black-dark;
        margin-top: 8px;
      }
      .span{
        display: inline-block;
        font-size: @auxiliary-text;
        color: @grey-dark;
        margin-top: 5px;
      }
    }
    .tosee{
      width: 50px;
      height: 25px;
      color: @currency-font-color;
      border: 1px solid @currency-font-color;
      border-radius: 16px;
      text-align: center;
      line-height: 25px;
      font-size: @label-text;
      margin-top: 15px;
      margin-left: 15px;
    }
  }

}
.line2 {
  width: 2px;
  height: 14px;
  background: #1f4c61;
  margin-right: 8px;
  font-weight: bold;
  display: inline-block;
}

.list {
  display: flex;
  flex-direction: row;
  margin-top: 13px;

  .listLeft {
    margin-right: 14px;

    img {
      width: 162px;
      height: 87px;
      border-radius: 10px;
    }
  }
  .listRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .listRightTopTitle {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }

    .listRightTopValue {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      margin-top: 4px;
    }

    .listRightBottom {
      width: 56px;
      padding: 4px 0px;
      background: #5CA68B;
      border-radius: 10px;
      text-align: center;
      font-size: 10px;
      font-family: SourceHanSansSCVF-Regular, SourceHanSansSCVF;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 2px;
    }
  }
}
</style>
