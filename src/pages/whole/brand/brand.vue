<template>
  <div class="brand_container">
    <div class="brand_projectlist">
      <div class="brand_project_title">
        <img src="//intercms.damai.cn/artist/pic/1554108643078/1554108643078-main.jpg?x-oss-process=image/quality,q_50/format,webp">
        <div class="item_info">
          <span class="item——title">德云社</span>
          <img src="https://gw.alicdn.com/tfs/TB1c4U2koT1gK0jSZFhXXaAtVXa-72-72.png" alt="">
          <p>22场在售演出 | 27.4万粉丝</p>
        </div>
        <button class="attention_button">关注</button>
      </div>
      <div class="brand_project_container">
        <div class="item_img">
          <img src="//img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01RfYiqp2GdSCziBcJD_!!0-item_pic.jpg_q50.jpg_.webp">
        </div>
        <div class="item_info">
          <p class="info_title">【北京】2019德云社北京相声大会-三庆园</p>
          <p class="info_price">￥100起</p>
          <p class="info_want">261.1万人想看</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .brand_container
    .brand_projectlist
      .brand_project_title
        img
          width 50px
          height 50px
        .item_info
          .item_title
            font-size 30px
            font-weight bold
        .attention_button
          width 100px
          height 60px
          color hotpink
          border-radius 30px
      .brand_project_container
        .item_img
          img
            width 100px
            height 150px
        .item_info
          p
            font-size 30px
            font-weight bold
            &.info_price
              color hotpink
            &.info_want
              font-size 20px
              font-weight normal
              color #999
</style>
