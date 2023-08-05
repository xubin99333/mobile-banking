<template>
  <div class="page_content">
    <div class="p_header">
      <div></div>
      <p>精选榜单</p>
    </div>
    <div class="page_center">
      <div class="select_list">
        <div class="img_left">
          <img src="@/assets/images/index/img-first.png" alt="" />
        </div>
        <div class="p_center">
          <p>买基金也要精挑细选</p>
          <span>收益每天多一点儿</span>
          <p class="p_special_1 p_special">低风险，无费率</p>
        </div>
      </div>
      <div class="select_list">
        <div class="img_left">
          <img src="@/assets/images/index/img-second.png" alt="" />
        </div>
        <div class="p_center">
          <p>小小的定投，大大的梦想</p>
          <span>遴选最适合你的定投基金，收益日增</span>
          <p class="p_special_2 p_special">为牛市播种，为幸福投资</p>
        </div>
        <div class="button_right"></div>
      </div>
      <div class="select_list">
        <div class="img_left">
          <img src="@/assets/images/index/img-third.png" alt="" />
        </div>
        <div class="p_center">
          <p>业绩领跑基金榜</p>
          <span>无惧市场动荡，他们始终靠前</span>
          <p class="p_special_3 p_special">一年内收益排名前 1 %</p>
        </div>
        <div class="button_right"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.p_header {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 4px 15px;
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
.page_center {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  .select_list {
    display: flex;
    margin: 12px 0;
    img {
      width: 40px;
      height: 40px;
    }
    .p_center {
      margin-left: 25px;
      p {
        font-size: @goose-text;
      }
      span {
        font-size: @secondary-text;
        line-height: 30px;
      }
      .p_special {
        font-size: @label-text;
      }
      .p_special_1 {
        color: @currency-font-color;
      }
      .p_special_2 {
        color: @blue-dark;
      }
      .p_special_3 {
        color: @blue-light;
      }
    }
    .button_right {
      width: 60px;
      height: 60px;
      position: absolute;
      right: 15px;
      /deep/.goose-button--default {
        border: none !important;
      }
    }
  }
}
</style>
