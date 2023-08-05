<template>
  <div class="page_content">
    <div class="border"></div>
    <div class="p_header">
      <div></div>
      <p>理财推荐</p>
      <span class="more" @click="gotoProductList">更多</span>
    </div>
    <div
      v-for="(item, index) in productList"
      :key="index"
      class="recommendContent"
      @click="gotoProduct(item)"
    >
      <div class="financeListTitle">{{ item.financeName }}（{{ item.financeCode }}）</div>
      <div class="financeList">
        <div class="financeListLeft">
          <div class="financeListLeftTop">{{ item.benchmark }}</div>
          <div class="financeListLeftBottom">成立以来年化备份</div>
        </div>
        <div class="financeListRight">
          <div class="financeListRightTop">持有30天后每日可赎备份</div>
          <div class="financeListRightBottom">{{ item.cycle }}</div>
        </div>
      </div>
      <!-- <div class="left">
        <div class="percent">{{ item.benchmark }}</div>
        <div class="page">{{ item.riskLevel }}</div>
      </div>
      <div class="right">
        <div class="type">{{ item.financeName }}</div>
        <div class="product">{{ item.cycle }}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { financeList } from '@/assets/api/rpc-financial'

export default {
  data () {
    return {
      productList: []
    }
  },
  created() {
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
    gotoProduct (item) {
      let options = {
          appId: '00010006',
          param: {
            url: '/www/financial_details.html',
            data: item,
            financeCode: item.financeCode
          },
          closeCurrentApp: false
        }
      this.$goose.context.startH5App(options)
    },
    gotoProductList () {
      let options = {
        appId: '00010006',
        param: {
          url: '/www/financial_more_financial.html'
        },
        closeCurrentApp: false
      }

      this.$goose.context.startH5App(options)
    }
  }
}
</script>

<style lang="less" scoped>
.border {
  width: 375px;
  height: 10px;
  background: #f6f6f6;
}
.page_content {
  margin-top: 10px;
  padding-bottom: 100px;
}
.p_header {
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px 15px 5px;
  div {
    width: 2px;
    height: 14px;
    background: #1f4c61;
    margin-right: 8px;
    font-weight: bold;
  }
  p {
    font-family: PingFangSC-Medium;
    font-size: @subtitle;
    color: #333333;
    line-height: 12px;
  }
  .more {
    position: relative;
    left: 237px;
    color: #666666;
    font-size: @auxiliary-text;
  }
}
.recommendContent {
  background: #fff;
  padding: 20px;
  border-bottom: 1px solid #F5F5F5;
  .left {
    padding: 10px 20px;
    margin-bottom: -50px;
    color: @currency-font-color;
    .percent {
      font-size: @tertiary-title;
      font-family: PingFangSC-Medium;
      letter-spacing: 0.24px;
      // font-weight: 300;
      line-height: 28px;

      span {
        font-size: @label-text;
        line-height: 17px;
      }
    }
    .page {
      font-size: @label-text;
      font-family: PingFangSC-Regular;
    }
  }
  .right {
    position: relative;
    left: 120px;
    bottom: 5px;
    .type {
      font-size: @goose-text;
      font-family: PingFangSC-Regular;
      color: #333333;
      line-height: 28px;
    }
    .product {
      font-size: @auxiliary-text;
      font-family: PingFangSC-Regular;
      color: #666666;
      line-height: 17px;
    }
  }
}
.financeListTitle {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}
.financeList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  align-items: center;
  .financeListLeftTop {
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    color: #FC8D00;
  }

  .financeListLeftBottom {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    margin-top: 8px;
  }

  .financeListRightTop {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    color: #333333;
  }

  .financeListRightBottom {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-top: 13px;
  }
}
</style>
