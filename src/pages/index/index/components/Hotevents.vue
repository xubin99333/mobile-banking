<template>
  <div class="page_content">
    <div class="p_header">
      <div></div>
      <p>热门活动</p>
    </div>
    <div class="page_content_center">
      <div class="page_content_center_active">
        <div class="active_left">
          <p>推荐办卡</p>
          <span>送1000积分</span>
        </div>
        <div class="active_right">
          <img
            class="img_card"
            src="@/assets/images/index/img-card.png"
            alt=""
          />
        </div>
      </div>
      <div class="page_content_center_active">
        <div class="active_left">
          <p>品牌家居</p>
          <span>最低三折起</span>
        </div>
        <div class="active_right">
          <img
            class="img_home"
            src="@/assets/images/index/img-home.png"
            alt=""
          />
        </div>
      </div>
      <div class="page_content_center_active">
        <div class="active_left">
          <p>电影票</p>
          <span>尽享视觉盛宴</span>
        </div>
        <div class="active_right">
          <img
            class="img_movie"
            src="@/assets/images/index/img-movie.png"
            alt=""
          />
        </div>
      </div>
      <div class="page_content_center_active">
        <div class="active_left">
          <p>品质度假</p>
          <span>云南七日游</span>
        </div>
        <div class="active_right">
          <img
            class="img_vacation"
            src="@/assets/images/index/pzdj.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page_content {
  padding: 0 15px;
}
.p_header {
  display: flex;
  align-items: center;
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
.page_content_center {
  font-family: PingFangSC-Regular;
  padding: 15px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  .page_content_center_active {
    display: flex;
    width: 45%;
    margin: 10px 0;
    justify-content: space-between;
    font-family: PingFangSC-Regular;
    .active_left {
      p {
        font-size: @goose-text;
        color: @black-dark;
      }
      span {
        font-size: @label-text;
        color: @black-dark-6;
      }
    }
    .active_right {
      .img_card {
        width: 68px;
        height: 40px;
      }
      .img_home {
        width: 68px;
        height: 40px;
      }
      .img_movie {
        width: 68px;
        height: 40px;
      }
      .img_vacation {
        width: 68px;
        height: 40px;
      }
    }
  }
}
</style>
