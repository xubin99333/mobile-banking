<!-- 广告中组件 -->
<template>
   <!-- 中间预览部分 -->
      <div class="img_borrow" v-if="boothResource && boothResource.length > 0">
        <goose-swipe
         :vertical ="vertical"
         :autoplay="rollInterval" class="my-swipe"
         indicator-color="white">
          <goose-swipe-item v-for="(img,index) in boothResource" :key="index" @click="toAds">
            <img :src="img" alt="" />
          </goose-swipe-item>
          <!-- <goose-swipe-item @click="toAds">
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
          </goose-swipe-item> -->
        </goose-swipe>
      </div>
</template>
<script>
import CommonUtil from '@/assets/js/common-util'
import CommonMixin from '@/mixins/common-mixin'

export default {
    name:'advModuleM',
    mixins: [CommonMixin],
  props: ["itemVal", "boothList"],//模板值
  data() {
    //这里存放数据
    return {
      boothId:'',
      boothResource: [],
      boothResourceName: "1-小.zip",
      roll:0,//是否滚动
      vertical:true,//滚动方向 false-横 true-竖
      rollInterval:'1000',//滚动间隔
      click:'',//是否可点击
      chainedAddress:'',//链接地址
      draftId:'',
      boothListRes: []
    };
    },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    boothList(newVal) {
      this.boothListRes = newVal
      this.getBoothFn()
    }
  },
  filters: {},
  //方法集合
  methods: {
    toAds() {
      let options = {
        appId: '00010023',
        param: {
          url: '/www/adsAndNotices_index.html',
        },
      }

      this.$goose.context.startH5App(options)
    },
      // 获取中广告页信息

    getBoothFn () {
      let res = {}
      for(let i = 0; i<this.boothListRes.length; i++) {
        if(this.boothListRes[i].boothType == 3) {
          res = this.boothListRes[i]
          console.log('~~~~~getBooth获取中广告~~~~~', res)
          this.boothId=res.boothId
          this.roll=res.roll// 是否滚动  0-不滚动 1-滚动
          this.rollDirection=res.rollDirection//滚动方向0-竖，1-横
          this.rollInterval=res.rollInterval//滚动间隔
          this.click=res.click,//是否可点击 0-不可 1-可
          this.status=res.status//状态 1-提交 2-保存
          this.chainedAddress=res.chainedAddress,//链接地址
          this.boothResource=res.boothResource
          this.draftId=res.draftId
          this.advFn()
          break;
        }
      }
    },
    advFn(){

      console.log("图片地址",this.boothResource)
      if(this.roll == 1){
        if(this.rollDirection == 0){
          this.vertical= false
        }else if(this.rollDirection == 1){
          this.vertical=true
        }

      } else {
        this.rollInterval=''
      }


    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.boothListRes = this.boothList
    this.getBoothFn()
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
 .img_borrow {
  padding: 0 15px;
  height: 135px;
  overflow: hidden;


  .swipitem {
    color: @white;
    position: absolute;
    z-index: 5;
    top: 30px;
    left: 45px;
    p {
      font-size: 16px;
    }
    span {
      font-size: 12px;
      margin-top: 8px;
    }
  }
  img {
    width: 100%;
    height: 135px;
    position: relative;
    top: 16px;
  }
}
</style>

