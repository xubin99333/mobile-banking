<template>
  <div class="app">
    <div class="tabPage">
      <component
        ref="component"
        :is="currentComp"
        :is-login="isLogin"
        :login-type="loginType"
        :show-eye-pub="showeye"
        @toRootPage="toRootPage()"
        @getloginstate="getLoginStateFn"
        @geteyestate="getEyeFun"
      ></component>
    </div>
    <div class="index_content_footer">
      <div class="cloud_teller">
        <img
          class="img_cloud_teller"
          src="@/assets/images/index/img-cloud-teller.png"
          alt=""
        />
        <div class="godetail_img">
          <img class="go_img" src="@/assets/images/index/triangle.svg" alt="" />
          <p>远程柜员sss</p>
        </div>
      </div>

      <div
        v-for="(item, index) in tabbarList"
        :key="index"
        :class="{ active: isActive == item.value ? true : false }"
        class="page_index"
        @click="handleTab(item, index)"
      >
        <div class="textcent">
          <img :src="num == item.value ? item.img : item.src" alt="" />
        </div>
        <p :class="num == item.value ? 'blue' : 'gray'">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '@/mixins/common-mixin'
import HomePage from './components/HomePage'
import Financial from './components/Financial'
import Mine from './components/Mine'
import CommonUtil from '@/assets/js/common-util'

export default {
  name: 'IndexApp',
  components: {
    HomePage,
    Financial,
    Mine
  },
  mixins: [CommonMixin],
  data() {
    return {
      //获取登录方式参数
      loginType: {},
      //用户是否登陆
      isLogin: false,
      num: 1,
      //首页全局小眼睛状态
      showeye: false,
      currentComp: 'HomePage',
      isActive: '1',
      tabbarList: [
        {
          name: '首页',
          img: [require('@/assets/images/index/home-page.svg')],
          src: [require('@/assets/images/index/active-icon.svg')],
          value: '1',
          comp: 'HomePage',
          islogin: false
        },
        {
          name: '理财',
          src: [
            require('@/assets/images/index/conduct-financial-transactions.svg')
          ],
          img: [require('@/assets/images/index/financial-chosen.svg')],
          value: '2',
          comp: 'Financial',
          islogin: false
        },
        {
          name: '我的',
          src: [require('@/assets/images/index/new-mainno.svg')],
          img: [require('@/assets/images/index/mine-chosen.svg')],
          value: '3',
          comp: 'Mine',
          islogin: true
        }
      ]
    }
  },
  created() {
    CommonUtil.getLoginType()
      .then(res => {
        this.loginType = res
        console.log('首页获取登录类型参数res------' + JSON.stringify(res))
        this.getLoginState(res)
      })
      .catch(e => {
        this.loginType = e
        console.log('首页获取登录类型参数e-------' + JSON.stringify(e))
        this.getLoginState(e)
      })
  },
  mounted() {
    // 添加resume监听事件
    this.$goose.on('resume', this.resumeHomePage)
  },
  methods: {
    getLoginState(typeParam) {
      let target = {
        param: {
          loginType: typeParam,
          //仅判断是否登陆，但不跳转登录
          canJumpLogin: false
        },
        closeCurrentApp: false
      }

      CommonUtil.isUserLogin(target)
        .then(() => {
          this.isLogin = true
          console.log('首页判断是否登陆-------' + this.isLogin)
          switch (this.currentComp) {
            case 'Mine':
              this.$refs.component.resumeFn()
              break

            case 'Financial':
              this.$refs.component.isLogin()
              break

            default:
              break
          }
        })
        .catch(() => {
          this.isLogin = false
          console.log('首页判断是否登陆-------' + this.isLogin)
        })
    },
    toRootPage() {
      this.isActive = '1'
      this.currentComp = 'HomePage'
      this.num = '1'
    },
    getEyeFun(msg) {
      this.showeye = msg
    },
    getLoginStateFn(msg) {
      this.isLogin = msg
    },
    handleTab(item) {
      this.isActive = item.value
      this.currentComp = item.comp
      this.num = item.value
    },

    /**
     * @description 监听页面进入resume
     * @author 王哲
     */
    resumeHomePage() {
      console.log('首页进入监听')
      CommonUtil.getLoginType()
        .then(res => {
          this.loginType = res
          console.log('首页获取登录类型参数res------' + JSON.stringify(res))
          this.getLoginState(res)
        })
        .catch(e => {
          this.loginType = e
          console.log('首页获取登录类型参数e-------' + JSON.stringify(e))
          this.getLoginState(e)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.tabPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.index_content_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: @white;
  box-shadow: -3px 0 3px 1px @gray-3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .cloud_teller {
    width: 99px;
    height: 42px;
    background-image: @mb-cloud;
    border: 1px solid @light-grey-0f;
    border-radius: 20.5px;
    margin-left: -7vw;
    position: relative;
    .img_cloud_teller {
      width: 78px;
      height: 78px;
      position: absolute;
      top: -50px;
      left: 10px;
    }
  }
  .godetail_img {
    display: flex;
    position: absolute;
    left: 20px;
    bottom: 5px;
    justify-content: space-between;
    align-items: center;
    .go_img {
      width: 8px;
      height: 8px;
      margin-right: 3px;
    }
    p {
      font-size: 10px;
      color: @white;
      letter-spacing: 0.12px;
      text-align: center;
      line-height: 10px;
    }
  }

  .page_index {
    height: 36px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .blue {
      color: @green-dark-little;
    }
    .gray {
      color: @gray-5;
    }
    .textcent {
      width: 100%;
      text-align: center;
    }
    img {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 10px;
      color: @green-dark-little;
      letter-spacing: 0.12px;
      text-align: center;
    }
  }
}
</style>
