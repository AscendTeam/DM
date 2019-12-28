<template>
  <div class="y_brand_container">
    <div class="y_brand_projectlist">
      <div class="y_brand_project_title">
        <div class="y_item_img">
          <img src="//intercms.damai.cn/artist/pic/1554108643078/1554108643078-main.jpg">
        </div>
        <div class="y_item_info">
          <div class="y_item_title_container">
            <span class="y_item_title">德云社</span>
            <img src="https://gw.alicdn.com/tfs/TB1c4U2koT1gK0jSZFhXXaAtVXa-72-72.png" alt="">
          </div>
            <p>22场在售演出 | 27.4万粉丝</p>
        </div>
        <p class="y_attention_button">关注</p>
      </div>
      <div class="y_brand_project">
        <div class="y_brand_project_container">
          <div class="y_project_item">
            <div class="y_item_img">
              <span>曲苑杂坛</span>
              <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
            </div>
            <div class="y_item_info">
              <p class="y_info_title">【北京】2019德云社北京相声大会-三庆园</p>
              <p class="y_info_price"><span class="price">￥</span>100 <span>起</span></p>
              <p class="y_info_want">261.1万人想看</p>
            </div>
          </div>
          <div class="y_project_item">
            <div class="y_item_img">
              <span>曲苑杂坛</span>
              <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
            </div>
            <div class="y_item_info">
              <p class="y_info_title">【北京】2019德云社北京相声大会-三庆园</p>
              <p class="y_info_price"><span class="price">￥</span>100 <span>起</span></p>
              <p class="y_info_want">261.1万人想看</p>
            </div>
          </div>
          <div class="y_project_item">
            <div class="y_item_img">
              <span>曲苑杂坛</span>
              <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
            </div>
            <div class="y_item_info">
              <p class="y_info_title">【北京】2019德云社北京相声大会-三庆园</p>
              <p class="y_info_price"><span class="price">￥</span>100 <span>起</span></p>
              <p class="y_info_want">261.1万人想看</p>
            </div>
          </div>
          <div class="y_project_item">
            <div class="y_item_img">
              <span>曲苑杂坛</span>
              <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
            </div>
            <div class="y_item_info">
              <p class="y_info_title">【北京】2019德云社北京相声大会-三庆园</p>
              <p class="y_info_price"><span class="price">￥</span>100 <span>起</span></p>
              <p class="y_info_want">261.1万人想看</p>
            </div>
          </div>
          <div class="y_project_item">
            <div class="y_item_img">
              <span>曲苑杂坛</span>
              <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
            </div>
            <div class="y_item_info">
              <p class="y_info_title">【北京】2019德云社北京相声大会-三庆园</p>
              <p class="y_info_price"><span class="price">￥</span>100 <span>起</span></p>
              <p class="y_info_want">261.1万人想看</p>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .y_brand_container
    .y_brand_projectlist
      .y_brand_project_title
        display flex
        flex-direction row
        justify-content space-between
        padding 10px 20px
        align-items center
        .y_item_img
          width 60px; height 60px; border-radius 50%
          background #FBFBFB
          position: relative;
          vertical-align middle
          img
            width 50px; height 50px; border-radius 50%
            position: absolute; top 0; bottom 0; left 0; right 0
            margin auto
        .y_item_info
          width 200px
          height 45px
          padding 6px 0
          display flex
          flex-direction column
          justify-content space-around
          .y_item_title_container
            .y_item_title
              font-size 16px; font-weight bold
            img
              width 16px; height 16px
          p
            font-size 13px; color #aaa
        .y_attention_button
          width 54px; height 24px; line-height 22px;border-radius 12px
          background-image linear-gradient(90deg,#ff3299,#ff2869)
          color white
          text-align center
      .y_brand_project
        width 100%
        overflow hidden
        .y_brand_project_container
          display flex
          .y_project_item
            width 110px
            padding-left 10px
            .y_item_img
              position: relative;
              padding-bottom 10px
              span
                padding 3px
                position absolute; top 4px; right 4px; margin auto
                font-size 10px; color #DCDCDC
                background rgba(30,29,29,0.8)
                border-radius 4px
              img
                width 110px
                height 150px
                border-radius 8px
            .y_item_info
              p
                &.y_info_title
                  font-size 16px
                  color #111
                  line-height 1.2em
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                &.y_info_price
                  padding-top 5px
                  font-size 16px
                  font-weight bold
                  color #ff2d79
                  span
                    font-size 12px
                    color #aaa
                    &.price
                      color #ff2d79
                      font-weight bold
                &.y_info_want
                  padding-top 5px
                  font-size 10px
                  color #aaa
</style>
