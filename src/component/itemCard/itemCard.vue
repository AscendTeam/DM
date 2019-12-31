<template>
    <div>
      <!--  标题\价格  -->
      <div class="y_header_project_info">
        <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
        <div class="y_project_info_container">
          <div class="y_project_title">
            <p class="y_title">【北京】德云社相声大会（北京）-新街口德云社</p>
            <span class="y_label y_super_label">超品日</span>
            <span class="y_label">总票代</span>
            <span class="y_label">相声</span>
          </div>
          <div class="y_project_price">
            <span class="price">￥</span>
            <span>100</span>
            <span class="price"> -￥</span>
            <span>3800</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 顶部 标题\价格
  .y_header_project_info
    position absolute
    top 40px
    z-index 99
    padding 20px 20px
    display flex
    flex-direction row
    img
      width 100px; height 135px; border-radius 10px
    .y_project_info_container
      padding-left 10px
      display flex
      flex-direction column
      justify-content space-between
      .y_project_title
        .y_title
          font-size 18px
          font-weight bold
          line-height 1.4em
          color white
        .y_label
          display inline-block
          margin 6px 2px
          padding 2px 6px
          border-radius 10px;
          border 1px solid white
          font-size 12px;
          color white
          &.y_super_label
            padding 3px 8px
            font-weight bold
            font-style italic
            background linear-gradient(135deg,#DB6269,#E7344D)
            border none
      .y_project_price
        padding-top 5px
        font-size 16px
        font-weight bold
        color #ff2d79
        .price
          font-size 13px



</style>
