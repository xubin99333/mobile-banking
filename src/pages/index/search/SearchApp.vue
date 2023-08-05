<template>
  <div class="app">
    <div class="searchContent">
      <div class="search_input">
        <div class="search_box">
          <img src="@/assets/images/index/search-b.png" alt="" />
        </div>
        <div class="input">
          <input
            ref="input"
            v-model="searchString"
            type="text"
            placeholder="你有899红包待收"
          />
        </div>
        <div class="microphone">
          <img src="@/assets/images/index/yuyinb.svg" alt="" />
        </div>
      </div>
      <div class="headset" @click="onBack">取消</div>
    </div>
    <div v-if="isActive" class="history">
      <div class="historySearch">
        <div class="hearder">
          <p>历史搜索</p>
          <div class="delete" @click="showPopup">
            <img src="@/assets/images/index/waste.png" alt="" />
          </div>
        </div>
        <ul v-if="ifShow" class="content">
          <li v-for="(item, index) in HistoryList" :key="index" :label="item">
            <goose-button round type="info">{{ item }}</goose-button>
          </li>
        </ul>
        <div v-if="show" class="afterDelete">暂无搜索历史</div>
      </div>
      <div class="recommendHeader">搜索推荐</div>
      <div class="searchRecommend">
        <goose-button round type="info">私钻闪耀</goose-button>
        <goose-button round type="info">网点</goose-button>
        <goose-button round type="info">转账关爱周</goose-button>
      </div>
    </div>
  </div>
</template>
<script>
import CommonMixin from '@/mixins/common-mixin'

export default {
  name: 'SearchApp',
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mixins: [CommonMixin],
  data () {
    return {
      ifShow: true,
      show: false,
      searchString: '',
      HistoryList: [],
      isActive: true,
      isShow: false,
      ifActive: false
    }
  },
  mounted () {
    this.$refs.input.focus()
  },
  methods: {
    showPopup () {
      this.$dialog
        .confirm({
          message: '确定删除全部历史记录',
          confirmButtonColor: '#92B8C1'
        })
        .then(() => {
          this.ifShow = false
          this.show = true
        })
        .catch(() => {
          // on cancel
        })
      this.HistoryList =
        this.$goose.storage.removeAppStorage('HistoryList') || []
    },
    onBack () {
      this.$goose.context.popWindow()
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: @white;
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
    width: 270px;
    height: 36px;
    border: 1px solid @black;
    border-radius: 14px;
    padding: 0 10px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    border: 1px solid @black-dark;
    border-radius: 19px;
    border-radius: 19px;
    .search_box {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .microphone {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .input {
      width: 100%;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        height: 18px;
        background: none;
      }
      input::-webkit-input-placeholder {
        opacity: 0.64;
        font-family: PingFangSC-Regular;
        font-size: @secondary-text;
        color: @black-dark;
        text-align: justify;
      }
    }
  }
  .headset {
    position: relative;
    top: 25px;
    right: 20px;
    font-size: @subtitle;
    color: @black-dark;
    font-family: PingFangSC-Regular;
    align-items: center;
  }
}
.historySearch {
  margin-top: 70px;
  background: @white;
  .hearder {
    margin-bottom: 15px;
    height: 20px;
    p {
      font-size: @goose-text;
      font-family: PingFangSC-Medium;
      color: @black-dark;
      padding: 20px 30px;
    }
    .delete {
      position: relative;
      left: 315px;
      bottom: 40px;
    }
  }
  .content {
    position: relative;
    left: 20px;
    top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .goose-button {
      margin: 7px;
    }

    /deep/.goose-button--info {
      background: @gray-3;
      border: 1px solid @gray-3;
      height: 40px;
    }
    /deep/.goose-button__text {
      font-size: @secondary-text;
      font-family: PingFangSC-Light;
      color: @black-dark;
    }
  }
}
.afterDelete {
  position: relative;
  top: 30px;
  left: 30px;
  font-size: @secondary-text;
  color: @black-dark;
  font-family: PingFangSC-Regular;
}
.recommendHeader {
  width: 100%;
  height: 40px;
  margin-top: 25px;
  color: @black-dark;
  font-size: @goose-text;
  font-family: PingFangSC-Medium;
  padding: 20px 30px;
}
.searchRecommend {
  margin: 15px 20px;
  width: 100%;
  height: 100px;
  .goose-button {
    margin: 7px;
  }
  /deep/.goose-button--info {
    background: @gray-3;
    border: 1px solid @gray-3;
    height: 40px;
  }
  /deep/.goose-button__text {
    font-size: @secondary-text;
    font-family: PingFangSC-Light;
    color: @black-dark;
  }
}
</style>
