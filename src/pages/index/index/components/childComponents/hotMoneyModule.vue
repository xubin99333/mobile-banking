<!-- 热销理财组件 -->
<template>
  <!-- 展示部分 -->
    <div class="lcDiv" >
      <div class="lcTitle">
        <p><span class="line2"></span>理财推荐</p>
        <p class="more" @click="gotoProductList">更多</p>
      </div>
      <div class="lcProduct" v-for="(item, index) in productList" :key="index" @click="succJump(item)">
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
      </div>
    </div>
</template>
<script>
import { financeList } from '@/assets/api/rpc-financial'

export default {
  props: ["itemVal"],//模板值
  data() {
    //这里存放数据
    return {
      productList: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  filters: {},
  //方法集合
  methods: {
    gotoProductList () {
      let options = {
        appId: '00010006',
        param: {
          url: '/www/financial_index.html'
        },
        closeCurrentApp: false
      }

      this.$goose.context.startH5App(options)
    },
    succJump (item) {
      //跳转返回目标页面
      let options = {
        appId: '00010006',
        param: {
          url: '/www/financial_details.html',
          data: {
            id: 1
          },
          financeCode: item.financeCode
        },
        closeCurrentApp: false
      }

      this.$goose.context.startH5App(options)
    },
    getHotList () {
      let params = {
        "pageNo": 1,
        "pageSize": 2,
        "requestGlobalJnlNo": "123",
        "requestJnlNo": "123",
        "requestChannelCode": "PM",
        "requestChannelId": "PM",
        "channelCode":"PM"
      }
      financeList (params, res => {
        this.productList = res.body.financeList.splice(0,2)
        console.log(this.productList)
      })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getHotList()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.itemVal)
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.lcDiv {
    width: 375px;
    background: #ffffff;
    padding: 0 20px;
    .lcTitle {
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
    }
    .lcProduct:last-child {
      border-bottom: none
    }
    .lcProduct {
      background: #fff;
      border-bottom: 1px solid #F5F5F5;
      padding: 20px 0;
      .lcPl {
        float: left;
        .lcPla {
          font-size: 20px;
          color: #fa7506;
          .lcPlaInput {
            width: 70px;
            /deep/.el-input__inner {
              font-size: 18px;
              color: #fa7506;
              font-weight: 500;
              padding: 0px;
              &::placeholder {
                font-size: 10px;
              }
            }
          }
        }
        .lcPlb {
          font-size: 11px;
          color: #fa7506;
          text-align: center;
        }
      }
      .lcPr {
        float: left;
        margin-left: 30px;
        margin-top: -5px;
        text-align: left;
        .lcPra {
          font-size: 18px;
          color: #333333;
          .lcPraInput {
            width: 150px;
            /deep/.el-input__inner {
              font-size: 18px;
              font-weight: 500;
              padding: 0px;
              height: 25px;
              &::placeholder {
                font-size: 10px;
              }
            }
          }
        }
        .lcPrb {
          font-size: 13px;
          color: #666666;
          .lcPrbInput {
            width: 154px;
            padding-left: 4px;
            /deep/.el-input__inner {
              font-size: 18px;
              font-weight: 500;
              padding: 0px;
              height: 25px;
              &::placeholder {
                font-size: 10px;
              }
            }
          }
        }
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

.line2 {
  width: 2px;
  height: 14px;
  background: #1f4c61;
  margin-right: 8px;
  font-weight: bold;
  display: inline-block;
}
.more {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
</style>

