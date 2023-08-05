<template>
  <div class="page_content">
    <div class="p_header">
      <p>为您推荐</p>
    </div>
    <div class="content">
      <div class="monthContent" @click="succJump(productList[0])">
        <div class="firstContent">
          <p>随时申赎</p>
          <span>{{productList[0].riskLevel}}</span>
        </div>
        <div class="secondContent">
          <p>{{ productList[0].benchmark }}</p>
          <span>{{productList[0].cycle}}</span>
        </div>
      </div>
      <div class="quarterContent" @click="succJump(productList[1])">
        <div class="firstContent">
          <p>月度理财</p>
          <span>{{productList[1].riskLevel}}</span>
        </div>
        <div class="secondContent">
          <p>{{ productList[1].benchmark }}</p>
          <span>{{productList[1].cycle}}</span>
        </div>
      </div>
      <div class="yearContent" @click="succJump(productList[2])">
        <div class="firstContent">
          <p>季度理财</p>
          <span>{{productList[2].riskLevel}}</span>
        </div>
        <div class="secondContent">
          <p>{{ productList[2].benchmark }}</p>
          <span>{{productList[2].cycle}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { financeList } from '@/assets/api/rpc-financial'

export default {
  name: 'RecommendedForYouBlue',
  data () {
    return {
      productList:[]
    }
  },
  created () {
    this.getHotList()
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
    succJump (rate) {
      //跳转返回目标页面
      let options = {
        appId: '00010006',
        param: {
          url: '/www/financial_details.html',
          data: {
            rate,
            id: 1
          }
        },
        closeCurrentApp: false
      }

      this.$goose.context.startH5App(options)
    }
  }
}
</script>

<style lang="less" scoped>
.page_content {
  background: @white;
  height: 170px;
}
.p_header {
  width: 100%;
  background: @white;
  display: flex;
  align-items: center;
  padding: 20px 15px;
  div {
    width: 2px;
    height: 14px;
    background: @green-dark;
    margin-right: 8px;
    font-weight: bold;
  }
  p {
    font-size: @subtitle;
    font-weight: 600;
    color: @black-dark;
    line-height: 12px;
    margin-left: 9px;
  }
}
.content {
  width: 100%;
  height: 150px;
  .monthContent {
    position: relative;
    left: 20px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
  .quarterContent {
    position: relative;
    left: 135px;
    bottom: 126px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
  .yearContent {
    position: relative;
    left: 250px;
    bottom: 253px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
}
.firstContent {
  margin-bottom: 6px;
  font-family: PingFangSC-Regular;
  p {
    font-size: @goose-text;
    color: @black-dark;
    margin-bottom: 2px;
  }
  span {
    font-size: @auxiliary-text;
    color: @black-dark-6;
  }
}
.secondContent {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-title;
    span {
      font-size: @label-text;
    }
  }
  span {
    font-family: PingFangSC-Regular;
    font-size: @auxiliary-text;
  }
}
</style>
