<template>
  <div class="C-cardComponent">
    <div class="C-header">
      <img src="./images/14.jpg" alt="">
      <div class="C-userConter">
        <h2>
          周杰伦
          <span class="iconfont iconuser">歌手</span>
          </h2>
          <p>
            5场在售演出|211.3万粉丝

          </p>
      </div>
      <button class="concern">关注</button>
    </div>
    <div class="C-contentImg">
      <img class="leftImg" src="./images/14.jpg" alt="">
      <img class="rightImg" src="./images/14.jpg" alt="">
    </div>
    <div class="C-bottom">
      <h2>周杰伦【嘉年华】世界巡回演唱会深圳站</h2>
      <p>2019.12.29-12.30 深圳龙岗大运中心体育场</p>
    </div>
    <button class="C-btn">
      <span class="number">3</span>个巡演城市 <span class="C-right">深圳|海口|太原</span>
    </button>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" scoped>
  .C-cardComponent
    width 92%
    margin auto
    padding-bottom 10px
    border-bottom 1px solid #eee
    .C-header
      display flex
      position relative
      img 
        width 50px
        height 50px
        border-radius 50%
        vertical-align middle
        background-color red

      .C-userConter
        display inline-block
        vertical-align middle
        width 50%
        padding 6px
        h2
          font-size 14px
          padding-bottom 10px
        p
          font-size 12px
          color #aaa
      .concern
        position absolute
        right 0
        top 6px
        height 24px
        width 50px
        font-size 12px
        border-radius 12px
        color #fff
        background-color #FF1268
        border none 
    .C-contentImg
      padding-top 10px
      .leftImg
        width 30%
        height 140px
        background-color red
        border-radius 5px
        margin-right 2%
      .rightImg
        width 68%
        height 140px
        background-color red
        border-radius 5px
    .C-bottom
      padding 14px 0
      h2
        font-size 14px
        padding-bottom 6px
      p
        color #aaa
    .C-btn
      width 100%
      height 30px
      border-radius 5px
      border none
      background-color #eee
      text-align left 
      padding-left 14px
      font-size 12px
      color #777
      .number 
        color #FF1268
      .C-right
        padding 0 12px
        display inline-block
        color #222
</style>
