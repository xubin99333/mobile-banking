<template>
  <div class="searchContent">
    <div class="search_input">
      <div class="search_box">
        <img src="@/assets/images/index/search-boxs.svg" alt="" />
      </div>
      <div class="input" @click="goToSearchPage">
        <input type="text" placeholder="查询持仓的基金产品" disabled/>
      </div>
      <div class="microphone">
        <img src="@/assets/images/index/microphones.svg" alt="" />
      </div>
    </div>
    <div class="headset">
      <img src="@/assets/images/index/peoples.svg" alt="" />
    </div>
    <div class="information" @click="toMessage">
      <img src="@/assets/images/index/informations.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
.searchContent {
  position: fixed;
  z-index: 999;
  background-color:#fff;
  width: 380px;
  height: 70px;
  padding: 15px 16px;
  display: flex;
  justify-content: space-between;
  .search_input {
    position: relative;
    top: 20px;
    width: 240px;
    // padding: 15px 16px;
    height: 28px;
    border: 1px solid #333;
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
        width: 170%;
        height: 170%;
      }
    }
    .microphone {
      width: 20px;
      height: 15px;
      display: flex;
      align-items: center;
      img {
        width: 120%;
        height: 120%;
      }
    }
    .input {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      input {
        opacity: 0.64;
        font-family: PingFangSC-Regular;
        font-size: @auxiliary-text;
        color: #333;
        width: 100%;
        height: 100%;
        background: none;
      }
      input::-webkit-input-placeholder {
        color:#333;
        font-size: @auxiliary-text;
      }
    }
  }
  .headset {
    position: relative;
    top: 20px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .information {
    position: relative;
    top: 18px;
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
