<template>
  <div class="wt-header">
    <div :class="type" class="header">
      <div class="left" @click="onClickLeft">
        <slot name="left"> </slot>
      </div>
      <div class="title">{{ title }}</div>
      <div class="right" @click="onClickRight">
        <slot name="right"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WtHeader',
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    type: {
      type: String,
      default: () => {
        return 'default'
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$emit('onClickLeft')
    },
    onClickRight () {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.wt-header {
  .header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 17px;

    .left {
      width: 16%;
      text-align: center;
      font-size: 22px;
      color: #ffffff;
      height: 50px;
      line-height: 50px;
    }
    .right {
      height: 50px;
      line-height: 50px;

      width: 16%;
      text-align: center;
      font-size: 22px;
      color: #ffffff;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #ffffff;
      letter-spacing: 0.2px;
      text-align: center;
      width: 68%;
    }
    &.primary {
      background: #1bb5f1;
      color: #fff;
      border: 0;
    }
    &.danger {
      background: #ef4f4f;
      color: #fff;
      border: 0;
    }
  }
}
</style>
