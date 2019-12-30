<template>
  <div class="C-detailComponent">
    <div class="detailHeader">
      <div class="detailLeft">
        <h2>林宥嘉</h2>
        <p>
          <span class="fanSize">21.3</span>
          万粉丝
        </p>
        <p>
          <span class="fanSize">3</span>
          场在售
        </p>
        <div class="btn">
          <button class="buttonPink">关注</button>
          <button class="buttonShare">分享</button>
        </div>
      </div>
      <div class="detailRight">
        <img src="../starCard/images/14.jpg" alt="">
      </div>
    </div>
    <div class="detailCatd">
      <img class="catdImg" src="../starCard/images/14.jpg" alt="">
      <div class="catdText">
        <h2>林宥嘉idol世界巡回演唱会</h2>
        <p>出道十年、极具纪念意义</p>
        <div>
          <span>￥380</span>
          起
        </div>
      </div>
    </div>
    <div class="imgList">
      <img class="imgItem" src="../starCard/images/14.jpg" alt="">
      <img class="imgItem" src="../starCard/images/14.jpg" alt="">
      <img class="imgItem" src="../starCard/images/14.jpg" alt="">
    </div>
    <!-- 巡演城市 -->
    <div class="tourCity">
      <p class="title">巡演城市</p>
      <div class="tourCityList">
        <div class="tourCityItem">
          <p class="cityItem">深圳站</p>
          <p class="timeItem">2019.12.29...</p>
          <p class="button">想看</p>
        </div>
        <div class="tourCityItem">
          <p class="cityItem">深圳站</p>
          <p class="timeItem">2019.12.29...</p>
          <p class="button">想看</p>
        </div>
        <div class="tourCityItem">
          <p class="cityItem">深圳站</p>
          <p class="timeItem">2019.12.29...</p>
          <p class="button">想看</p>
        </div>
      </div>
    </div>
    <div class="dynamic">
      <p class="title">巡演城市</p>
      <p class="dynamicItem">星统环球入驻林</p>
      <p class="dynamicItem">星统环球入驻林</p>
      <p class="dynamicItem">星统环球入驻林</p>
    </div>
    <div class="frame"></div>
    <Comment/>
    <div style="height:1000px"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Comment from '../comment/comment'
  export default {
    components:{
      Comment
    }
  }
</script>

<style lang="stylus" scoped>
  .frame
    margin-left -10%
    width 120vw
    height 10px
    background-color #eee
  .C-detailComponent
    // background-color pink
    width 92%
    margin auto
    .detailHeader
      display flex
      .detailLeft
        width 60%
        h2
          margin-top 40px
          font-size 18px
        p
          padding 14px 0 0 5px
        .btn
          padding-top 14px
          .buttonPink
            margin-right 10px
            height 24px
            width 50px
            font-size 12px
            border-radius 12px
            color #fff
            background-color #FF1268
            border none 
          .buttonShare
            height 24px
            width 50px
            font-size 12px
            border-radius 12px
            color #fff
            background-color rgba(255,255,255,.3)
            border 1px solid #fff
      // .detailRight
    .detailCatd
      padding 10px
      border-radius 5px
      // background-color #556688
      border-bottom 1px solid #eee
      display flex
      .catdImg
        width 100px
        height 140px
      .catdText
        height 140px
        h2
          font-size 14px
          padding-bottom 10px
        p
          font-size 12px
        div
          padding-top 85px
          font-size 12px
          span 
            color #FF1268
            font-size 14px
            button 0
            left 0
    .imgList
      border-bottom 1px solid #eee
      padding 10px 0
      display flex
      .imgItem
        height 100px
        width 220px 
    .tourCity
      border-bottom 1px solid #eee
      .title
        padding 10px 0
        font-size 16px
        width 100%
      .tourCityList
        display flex
        .tourCityItem
          border 1px solid #EFEFEF
          margin-right 10px
          border-radius 16px
          height 100px
          width 100px
          background-color #F4F9F9
          border-radius 5px
          .cityItem
            padding-top 10px
            text-align center
          .timeItem
            color #B0B4B7
            text-align center
            padding 10px 0
          .button
            height 20px
            width 40px
            margin 0 auto
            text-align center
            line-height 20px
            border 1px solid #C3D6D7
            border-radius 10px
            color #76b8de
    .dynamic
      padding-bottom 10px
      .title
        padding 10px 0
        font-size 16px
        width 100%
      .dynamicItem
        font-size 12px
        line-height 20px

</style>