<template>
  <div class="page_content">
    <div class="p_header">
      <div></div>
      <p>特色服务</p>
    </div>

    <div
      ref="myBox"
      :class="{ 'page-center-another': isActive, 'page-center': ifShow }"
    >
      <goose-swipe
        :show-indicators="false"
        :width="clientWidth >= 500 ? '410' : '320'"
        :loop="false"
        class="my-swipe"
        @change="onChoose"
      >
        <goose-swipe-item>
          <div
            v-for="(item, index) in swiperList"
            :key="index"
            class="swiper_item_box"
          >
            <img :src="item.hImg" class="h_img" alt="" />
            <div class="p_swiper">
              <div class="p_swiper_item">
                <img :src="item.pSwiperItem.fir.img" alt="" />
                <p>{{ item.pSwiperItem.fir.name }}</p>
              </div>
              <div class="p_swiper_item">
                <img :src="item.pSwiperItem.sec.img" alt="" />
                <p>{{ item.pSwiperItem.sec.name }}</p>
              </div>
              <div class="p_swiper_item">
                <img :src="item.pSwiperItem.thi.img" alt="" />
                <p>{{ item.pSwiperItem.thi.name }}</p>
              </div>
              <div class="p_swiper_item">
                <img :src="item.pSwiperItem.for.img" alt="" />
                <p>{{ item.pSwiperItem.for.name }}</p>
              </div>
            </div>
          </div>
        </goose-swipe-item>
        <goose-swipe-item>
          <div class="swiper_item_box">
            <img class="h_img" src="@/assets/images/index/ts-2.png" alt="" />
            <div class="p_swiper">
              <div class="p_swiper_item">
                <img src="@/assets/images/index/ticket.png" alt="" />
                <p>门票</p>
              </div>
              <div class="p_swiper_item">
                <img
                  src="@/assets/images/index/repayment.png"
                  alt=""
                />
                <p>还款抽奖</p>
              </div>
              <div class="p_swiper_item">
                <img src="@/assets/images/index/recommend-3.png" alt="" />
                <p>推荐有礼</p>
              </div>
              <div class="p_swiper_item">
                <img src="@/assets/images/index/recommend.png" alt="" />
                <p>专区</p>
              </div>
            </div>
          </div>
        </goose-swipe-item>
      </goose-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ifShow: true,
      isActive: false,
      clientWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      swiperList: [
        {
          pSwiperItem: {
            fir: {
              name: '开卡',
              img: [require('@/assets/images/index/qia.png')]
            },
            sec: {
              name: '还款抽奖',
              img: [require('@/assets/images/index/repayment.png')]
            },
            thi: {
              name: '推荐有礼',
              img: [require('@/assets/images/index/recommend-3.png')]
            },
            for: {
              name: '专区',
              img: [require('@/assets/images/index/recommend.png')]
            }
          },
          hImg: [require('@/assets/images/index/ts-1.png')]
        }
      ]
    }
  },
  methods: {
    onChoose () {
      let divClass = this.$refs.myBox.className

      if (divClass == 'page-center') {
        this.isActive = true
        this.ifShow = false
      } else {
        this.isActive = false
        this.ifShow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.p_header {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  div {
    width: 2px;
    height: 14px;
    background: @green-dark;
    margin-right: 8px;
    font-weight: bold;
  }
  p {
    font-family: PingFangSC-Medium;
    font-size: @subtitle;
    color: @black-dark;
    line-height: 30px;
  }
}
.page-center {
  height: 188px;
  padding: 20px;
  background: url(~@assets/images/index/tsb-1.png) no-repeat;
  background-size: contain;
}
.page-center-another {
  height: 188px;
  padding: 20px;
  background: url(~@assets/images/index/tsb-2.png) 0 -50px no-repeat;
  background-size: 500px auto;
}
.my-swipe {
  /deep/.swiper_item_box {
    width: 280px;
    height: 148px;
    background: @white;
    padding: 6px;
    .h_img {
      width: 268px;
      height: 86px;
    }
    .p_swiper {
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
      font-size: @label-text;
      color: @black-dark-6;
      text-align: center;
      .p_swiper_item {
        p {
          line-height: 25px;
        }
      }
    }
  }
}
</style>
