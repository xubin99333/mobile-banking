<!-- 贷款组件 -->
<template>
  <!-- 中间预览部分 -->
  <div>
  <div class="gray"></div>
  <div class="dkDiv">
      <div class="dka">
        <div class="dkaa">贷款专区</div>
        <div class="dkab">质押担保，快速贷款</div>
        <div class="dkac">
          <i class="el-icon-more"></i>
        </div>
      </div>
      <div class="dkb">
        <div class="dkba">E信贷</div>
        <span class="dkbb">
          授信期限
          <span class="fa">36</span>
          个月
        </span>
      </div>
      <div class="dkc">最高可借额度</div>
      <div class="dkd">￥20.000.00</div>
      <div class="dke">
        <img :src="hqedimg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["itemVal"],//模板值
  data() {
    //这里存放数据
    return {
      hqedimg: [require('@/assets/images/index/hqed.png')]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  filters: {},
  //方法集合
  methods: {
    //父组件调用的子组件方法，传入的当前选择模块
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.dkDiv {
  margin: 0 auto;
  width: 343px;
  height: 170px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 0px;
  .dka {
    padding-top: 20px;
    padding-bottom: 20px;
    height: 40px;
    .dkaa {
      float: left;
      width: 100px;
      height: 12px;
      font-weight: 600;
      font-family: PingFangSC-Medium;
      font-size: @subtitle;
      color: #333333;
      line-height: 12px;
    }
    .dkab {
      float: left;
      width: 150px;
      height: 16px;
      opacity: 0.6;
      font-size: 11px;
      color: #b28e36;
      font-weight: 400;

      /deep/.el-input__inner {
        float: left;
        width: 150px;
        height: 16px;
        line-height: 16px;
        opacity: 0.6;
        font-size: 11px;
        color: #b28e36;
        font-weight: 400;
        padding: 0px;
        &::placeholder {
          font-size: 10px;
        }
      }
    }
    .dkac {
      float: right;
      margin-right: 20px;
      color: #ff8100;
    }
  }
  .dkb {
    margin-left: 10px;
    padding-top: 20px;
    height: 40px;

    .dkba {
      float: left;
      width: 60px;
      height: 20px;
      font-size: 14px;
      color: #333333;
      font-weight: 500;
      line-height: 20px;
      .dkbaInput {
        width: 50px;
      }
      /deep/.el-input__inner {
        width: 50px;
        height: 20px;
        font-size: 14px;
        color: #333333;
        font-weight: 500;
        padding: 0px;
        &::placeholder {
          font-size: 10px;
        }
      }
    }
    .dkbb {
      float: left;
      width: 180px;
      height: 16px;
      font-size: 11px;
      color: #999999;
      font-weight: 400;
      .fa {
        font-size: 16px;
        color: #fa7506;
        font-weight: 700;
      }
      .faInput {
        width: 80px;
        /deep/.el-input__inner {
          width: 80px;
          font-size: 16px;
          color: #fa7506;
          font-weight: 700;
          height: 16px;
          padding: 0px;
          &::placeholder {
            font-size: 10px;
          }
        }
      }
    }
  }
  .dkc {
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 11px;
    color: #999999;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 16px;
    text-align: left;
  }
  .dkd {
    width: 180px;
    height: 40px;
    margin-left: 10px;
    font-size: 26px;
    color: #fa7506;
    line-height: 40px;
    font-weight: 700;
    .dkdInput {
      width: 130px;
      /deep/.el-input__inner {
        font-size: 26px;
        color: #fa7506;

        font-weight: 700;
        padding: 0px;
        &::placeholder {
          font-size: 12px;
        }
      }
    }
  }
  .dke {
    float: right;
    height: 20px;
    width: 68px;
    margin-top: -40px;
    margin-right: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.gray {
  width: 100%;
  background-color: #f2f3f5;
  height: 10px;
}
</style>

