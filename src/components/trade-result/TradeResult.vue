<template>
  <div class="content">
    <div class="g_body">
      <!-- 状态true显示成功图片 -->
      <div v-show="state" class="result_img">
        <img :src="successImg" alt="" class="g_img_img" />
      </div>
      <!-- 状态false显示失败图片 -->
      <div v-show="!state" class="result_img">
        <img :src="failImg" alt="" class="g_img_img" />
      </div>
      <p class="result_text">{{ headTitle }}</p>
      <!-- 二级显示内容 -->
      <p
        v-show="details != '' && detailsTextAlign == 'left'"
        class="secondary_result_text"
      >
        {{ details }}
      </p>
      <p
        v-show="details != '' && detailsTextAlign == 'center'"
        class="secondary_result_text"
      >
        {{ details }}
      </p>
      <!-- 详情插槽，名称为detailSlot -->
      <slot name="detailSlot"></slot>
      <div class="default_button" @click="finish">
        <p>{{ butTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TradeResult',
  props: {
    //true 为成功，false为失败
    state: {
      type: Boolean,
      default: true
    },
    //title
    headTitle: {
      type: String,
      default: ''
    },
    //二级显示内容
    details: {
      type: String,
      default: ''
    },
    //二级显示内容默认 left左对齐，center居中对齐
    detailsTextAlign: {
      type: String,
      default: 'left'
    },
    //按钮文字
    butTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      //成功图片
      successImg: [require('@/assets/images/living-expenses/success.png')],
      //失败图片
      failImg: [require('@/assets/images/public/fail.svg')]
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/mixins.less';

.content {
  .g_body {
    text-align: center;
  }
}
</style>
