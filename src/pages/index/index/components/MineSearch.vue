<template>
  <div>
    <div
      v-if="scroll"
      :style="{ 'background-color': 'rgba(255,255,255, ' + opacity + ')' }"
      class="search_content"
    >
      <div class="search_head">
        <div v-if="myIsLogin" id="dialog" @click="showPopup" class="logout">
          <img src="@/assets/images/index/logout-white.png" alt="" />
        </div>
      </div>
      <div class="search_input">
        <div class="search_box">
          <img src="@/assets/images/index/search-box.png" alt="" />
        </div>
        <div class="input" @click="goToSearchPage" >
          <input type="text" disabled placeholder="你有899红包待收" />
        </div>
        <div class="microphone">
          <img src="@/assets/images/index/microphone.png" alt="" />
        </div>
      </div>
      <div class="information" @click="toMessage" >
        <img src="@/assets/images/index/xiaoxi.svg" alt="" />
      </div>
    </div>
    <div v-if="topScroll" class="searchContent" >
      <div class="searchHead">
        <div v-if="myIsLogin" id="dialog" @click="showPopup">安全退出</div>
      </div>
      <div class="search_input">
        <div class="search_box">
          <img src="@/assets/images/index/search-b.png" alt="" />
        </div>
        <div class="input" @click="goToSearchPage" >
          <input type="text" disabled placeholder="你有899红包待收" />
        </div>
        <div class="microphone">
          <img src="@/assets/images/index/yuyinb.svg" alt="" />
        </div>
      </div>
      <div class="information" @click="toMessage" >
        <img src="@/assets/images/index/xiaoxi-black.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CommonUtil from '@/assets/js/common-util'

export default {
  props: {
    backgroundOpacity: {
      type: Number,
      default: 0
    },
    myIsLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: true,
      topScroll: false,
      opacity: 0
    }
  },
  watch: {
    backgroundOpacity: {
      handler: function (val) {
        if (val <= 1) {
          this.topScroll = false
          this.opacity = val
        } else {
          this.opacity = 1
          //当滚动出去的距离大于轮播图高度时,除以轮播图高度会大于1,所以此时直接设置透明度值为1
          this.topScroll = true
        }
      },
      // 是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
      deep: true
    }
  },
  methods: {
    showPopup () {
      this.$dialog
        .confirm({
          title: '温馨提示',
          message: '确定安全退出吗？'
        })
        .then(() => {
          CommonUtil.userLogout()
            .then(() => {
              console.log('登出成功')
              this.$emit('logoutReturn')
              this.$emit('getloginstate', false)
            })
            .catch(() => {
              console.log('登出失败')
            })
        })
        .catch(() => {
          // on cancel
        })
    },
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

  .search_head {
    font-size: @label-text;
    color: @white;
    position: relative;
    top: 20px;
    left: 12px;

    div {
      // width: 30px;
    }
  }

  .search_input {
    width: 240px;
    position: relative;
    top: 20px;
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
        margin-top: -2px;
      }

      input::-webkit-input-placeholder {
        color: @white;
        font-size: @auxiliary-text;
        opacity: 0.64;
      }
    }
  }

  .information {
    position: relative;
    top: 20px;
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

  .searchHead {
    font-size: @label-text;
    color: @black-dark;
    position: relative;
    top: 20px;

    div {
      width: 30px;
    }
  }

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
        font-size: @auxiliary-text;
      }
    }
  }

  .information {
    position: relative;
    top: 20px;
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
.logout {
  width: 28px;
  height: 28px;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
