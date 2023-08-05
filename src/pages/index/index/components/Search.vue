<template>
  <div>
    <div
      v-if="scroll"
      :style="{ 'background-color': 'rgba(255,255,255, ' + opacity + ')' }"
      class="search_content"
    >
      <div class="search_input">
        <div class="search_box">
          <img src="@/assets/images/index/search-box.png" alt="" />
        </div>
        <div class="input" @click="goToSearchPage">
          <input type="text" placeholder="查询持仓的基金产品" disabled />
        </div>
        <div class="microphone">
          <img src="@/assets/images/index/microphone.png" alt="" />
        </div>
      </div>
      <div class="headset">
        <img src="@/assets/images/index/kefu-2.svg" alt="" />
      </div>
      <div class="information" @click="toMessage">
        <img src="@/assets/images/index/xiaoxi.svg" alt="" />
      </div>
    </div>

    <div v-if="topScroll" class="searchContent">
      <div class="search_input">
        <div class="search_box">
          <img src="@/assets/images/index/search-b.png" alt="" />
        </div>
        <div class="input" @click="goToSearchPage">
          <input disabled type="text" placeholder="查询持仓的基金产品" />
        </div>
        <div class="microphone">
          <img src="@/assets/images/index/yuyinb.svg" alt="" />
        </div>
      </div>
      <div class="headset">
        <img src="@/assets/images/index/kefu-black.png" alt="" />
      </div>
      <div class="information" @click="toMessage">
        <img src="@/assets/images/index/xiaoxi-black.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundOpacity: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      scroll: true,
      topScroll: false,
      opacity: 0,
      diasabledInput: false
    }
  },
  watch: {
    backgroundOpacity: {
      handler: function (val) {
        if (val <= 1) {
          this.scroll = true
          this.topScroll = false
          this.opacity = val
        } else {
          this.opacity = 1
          this.scroll = false
          //当滚动出去的距离大于轮播图高度时,除以轮播图高度会大于1,所以此时直接设置透明度值为1
          this.topScroll = true
        }
      },
      // 是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
      deep: true
    }
  },
  methods: {
    goToSearchPage () {
      let options = {
        url: 'index_search.html',
        param: {
          isShowTitleBar: false
        }
      }

      this.$goose.context.pushWindow(options)
    },
    toMessage () {
      let options = {
        appId: '00010011',
        param: {
          url: '/www/message_messageCenter.html'
        },
        closeCurrentApp: false
      }

      this.$goose.context.startH5App(options)
    }
  }
}
</script>

<style lang="less" scoped>
.search_content {
  position: fixed;
  z-index: 999;
  width: 380px;
  height: 70px;
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  font-family: PingFangSC-Medium;
  .search_input {
    position: relative;
    top: 20px;
    width: 240px;
    height: 28px;
    border: 1px solid @white;
    border-radius: 14px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .search_box {
      width: 25px;
      height: 20px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .microphone {
      width: 25px;
      height: 20px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .input {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 100%;
        background: none;
        font-size: @auxiliary-text;
        font-family: PingFangSC-Regular;
        font-weight: 300;
      }
      input::-webkit-input-placeholder {
        color: @white;
        opacity: 0.64;
      }
    }
  }
  .headset {
    position: relative;
    left: -4px;
    top: 23px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .information {
    position: relative;
    top: 20px;
    left: -10px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.searchContent {
  position: fixed;
  z-index: 999;
  background-color: @white;
  width: 380px;
  height: 70px;
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  .search_input {
    position: relative;
    top: 20px;
    width: 240px;
    height: 28px;
    border: 1px solid @black;
    border-radius: 14px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .search_box {
      width: 13px;
      height: 11px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .microphone {
      width: 20px;
      height: 15px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .input {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 100%;
        background: none;
      }
      input::-webkit-input-placeholder {
        color: @black-dark;
        font-weight: 300;
        font-size: @auxiliary-text;
        font-family: PingFangSC-Regular;
      }
    }
  }
  .headset {
    position: relative;
    left: -4px;
    top: 23px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .information {
    position: relative;
    top: 20px;
    left: -10px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
