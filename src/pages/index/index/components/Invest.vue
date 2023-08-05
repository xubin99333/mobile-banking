<template>
  <div class="page_content">
    <div class="border"></div>
    <div class="p_header">
      <div></div>
      <p>定期投资</p>
    </div>
    <div class="content">
      <div class="monthContent">
        <div class="firstContent">
          <p>月度理财</p>
          <span>海通月月赢</span>
        </div>
        <div class="secondContent">
          <p>3.16<span>%</span></p>
          <span>业绩比较基准</span>
        </div>
      </div>
      <div class="quarterContent">
        <div class="firstContent">
          <p>季度理财</p>
          <span>广发弘利集合</span>
        </div>
        <div class="secondContent">
          <p>3.78<span>%</span></p>
          <span>业绩比较基准</span>
        </div>
      </div>
      <div class="yearContent">
        <div class="firstContent">
          <p>年度理财</p>
          <span>易方达增利A</span>
        </div>
        <div class="secondContent">
          <p>4.89<span>%</span></p>
          <span>业绩比较基准</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page_content {
  background: #fff;
  height: 170px;
  margin-top: 8px;
}
.border {
  width: 375px;
  height: 10px;
  background: #f6f6f6;
}
.p_header {
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 20px 15px;
  div {
    width: 2px;
    height: 14px;
    background: #1f4c61;
    margin-right: 8px;
    font-weight: bold;
  }
  p {
    font-family: PingFangSC-Medium;
    font-size: @subtitle;
    color: #333333;
    line-height: 12px;
  }
  // .more{
  //   position: relative;
  //   left: 220px;
  //   font-size: 13px;
  //   color: #666666;
  // }
}
.content {
  width: 100%;
  height: 160px;
  // margin-bottom: 10px;
  .monthContent {
    position: relative;
    left: 20px;
    bottom: 5px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid #eee;
    border: 1px solid #eee;
    -moz-box-shadow: 2px 2px 10px #eee;
    -webkit-box-shadow: 2px 2px 10px #eee;
    box-shadow: 2px 2px 10px #eee;
  }
  .quarterContent {
    position: relative;
    left: 135px;
    bottom: 132px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid #eee;
    -moz-box-shadow: 2px 2px 10px #eee;
    -webkit-box-shadow: 2px 2px 10px #eee;
    box-shadow: 2px 2px 10px #eee;
  }
  .yearContent {
    position: relative;
    left: 250px;
    bottom: 258px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid #eee;
    border: 1px solid #eee;
    -moz-box-shadow: 2px 2px 10px #eee;
    -webkit-box-shadow: 2px 2px 10px #eee;
    box-shadow: 2px 2px 10px #eee;
  }
}
.firstContent {
  margin-bottom: 10px;
  font-family: PingFangSC-Regular;
  p {
    font-size: @goose-text;
    color: #333333;
  }
  span {
    font-size: @auxiliary-text;
    color: #666666;
  }
}
.secondContent {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-title;
    color: @currency-font-color;
  }
  span {
    font-family: PingFangSC-Regular;
    font-size: @auxiliary-text;
    color: @currency-font-color;
  }
}
</style>
