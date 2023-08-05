<template>
  <div class="page_content">
    <div class="p_header">
      <div></div>
      <p>为您推荐</p>
    </div>
    <div class="content">
      <div class="monthContent">
        <div class="firstContent">
          <p>随时申赎</p>
          <span>日日欣理财</span>
        </div>
        <div class="secondContent">
          <p>3.38<span>&nbsp;%</span></p>
          <span>七日年化</span>
        </div>
      </div>
      <div class="quarterContent">
        <div class="firstContent">
          <p>月度理财</p>
          <span>聚益生金30天</span>
        </div>
        <div class="secondContent">
          <p>3.08<span>&nbsp;%</span></p>
          <span>业绩比较基准</span>
        </div>
      </div>
      <div class="yearContent">
        <div class="firstContent">
          <p>季度理财</p>
          <span>聚益生金91天</span>
        </div>
        <div class="secondContent">
          <p>4.09<span>&nbsp;%</span></p>
          <span>业绩比较基准</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page_content {
  background: @white;
  height: 170px;
}
.p_header {
  width: 100%;
  background: @white;
  display: flex;
  align-items: center;
  padding: 20px 15px;
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
    line-height: 12px;
  }
}
.content {
  width: 100%;
  height: 150px;
  .monthContent {
    position: relative;
    left: 20px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
  .quarterContent {
    position: relative;
    left: 135px;
    bottom: 126px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
  .yearContent {
    position: relative;
    left: 250px;
    bottom: 253px;
    width: 108px;
    height: 127px;
    padding: 10px 10px;
    border: 1px solid @gray-3;
    box-shadow: 0 0 8px 0 @gray-2;
    border-radius: 4px;
  }
}
.firstContent {
  margin-bottom: 6px;
  font-family: PingFangSC-Regular;
  p {
    font-size: @goose-text;
    color: @black-dark;
    margin-bottom: 2px;
  }
  span {
    font-size: @auxiliary-text;
    color: @black-dark-6;
  }
}
.secondContent {
  p {
    font-family: PingFangSC-Medium;
    font-size: @secondary-title;
    span {
      font-size: @label-text;
    }
  }
  span {
    font-family: PingFangSC-Regular;
    font-size: @auxiliary-text;
  }
}
</style>
