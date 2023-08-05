<template>
  <div class="page_content">
    <div class="p_header">
      <p>精选榜单</p>
    </div>
    <div class="page_center">
      <div class="select_list">
        <goose-row>
          <goose-col span="18">
            <div class="p_center">
              <p>买基金也要精挑细选</p>
              <span class="p_special_1 p_special">低风险，无费率</span>
            </div>
          </goose-col>
          <goose-col span="6">
            <div class="img_position">
              <img src="@/assets/images/index/first-new.png" alt="" />
            </div>
          </goose-col>
        </goose-row>
      </div>
      <div id="special" class="select_list">
        <goose-row>
          <goose-col span="6">
            <div class="img_position">
              <img src="@/assets/images/index/two.png" alt="" />
            </div>
          </goose-col>
          <goose-col span="18">
            <div class="p_center">
              <p>小小的定投，大大的梦想</p>
              <span class="p_special_2 p_special">为牛市播种，为幸福投资</span>
            </div>
          </goose-col>
        </goose-row>
      </div>
      <div class="select_list">
        <goose-row>
          <goose-col span="18">
            <div class="p_center">
              <p>业绩领跑基金榜，无惧市场动荡</p>
              <span class="p_special_3 p_special">一年内收益排名前 1 %</span>
            </div>
          </goose-col>
          <goose-col span="6">
            <div class="img_position">
              <img src="@/assets/images/index/three.png" alt="" />
            </div>
          </goose-col>
        </goose-row>
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
    font-size: @subtitle;
    color: @black-dark;
    line-height: 30px;
    margin-left: 9px;
    font-weight:600;
  }
}
.page_center {
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 @gray-4;
  margin:0px 18px;
  #special{
    background-color: @mb-blue-little;
  }
  .select_list {
    width:100%;
    padding:8px;
    .img_position{
      text-align:center;
    }
    img {
      width: 42px;
      height: 57px;
    }
    .p_center{
      p {
        font-size: @goose-text;
        margin-bottom: 4px;
      }
      span {
        color: @currency-font-color;
        font-size: @label-text;
      }
      .p_special {
        font-size: @label-text;
      }
      .p_special_1 {
        color: @currency-font-color;
      }
      .p_special_2 {
        color: @mb-blue;
      }
      .p_special_3 {
        color: @blue-light;
      }
    }
    }

}
</style>
