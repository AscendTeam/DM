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
    <div class="imgscroll" ref="left">
      <div class="imgList" >
          <img class="imgItem" src="../starCard/images/14.jpg" alt="">
          <img class="imgItem" src="../starCard/images/14.jpg" alt="">
          <img class="imgItem" src="../starCard/images/14.jpg" alt="">
      </div>
    </div>
    <!-- 巡演城市 -->
    <div class="tourCity">
      <p class="title">巡演城市</p>
      <div class="tourScroll" ref="tourScroll">
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
          <div class="tourCityItem">
            <p class="cityItem">深圳站</p>
            <p class="timeItem">2019.12.29...</p>
            <p class="button">想看</p>
          </div>
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
    <div class="soltComponent">
      <div class="commentShow">全部</div>
      <!-- 全部/官方 -->
    </div>
    <!-- <div v-for="(item,index) in circleArr" :key="index">
      <Comment :circleItem="item"/>
    </div> -->
    <!-- <div style="height:1000px"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
// import Comment from '../comment/comment'
import {reqCircle} from '../../api'
  export default {
    components:{
      // Comment
    },
    data(){
      return{
        circleArr:[]
      }
    },
    async mounted(){
      new BScroll(this.$refs.left,{scrollX:true})
      new BScroll(this.$refs.tourScroll,{scrollX:true})
      // 获取评论信息
       let circle = await reqCircle()
      //  console.log(circle)
       this.circleArr=circle.data.feedMergeDataList
    }
  }
</script>

<style lang="stylus" scoped>
  .frame
    margin-left -10%
    width 120vw
    height 10px
    background-color #eee
    
  .soltComponent
    position relative
    margin-top 10px
    width 64px
    height 22px
    border-radius 10px
    background-color #F2F2F2
    .commentShow
      position absolute
      left 0
      // left 24px
      top 0
      width 40px
      height 20px
      line-height 20px
      text-align center
      background-color #ffffff
      border-radius 10px
      border 1px solid #EBEBEB
  .C-detailComponent
    // background-color pink
    overflow hidden
    width 92%
    // height 100%
    padding 0 4%
    background-image url('https://intercms.damai.cn/artist/bgpic/1571306137043/1571306137043-main.jpg?x-oss-process=image/resize,w_750,/quality,q_50/format,webp')
    background-repeat no-repeat
    background-size 100% 200px
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
    .imgscroll
      white-space nowrap
      .imgList
        border-bottom 1px solid #eee
        padding 10px 0
        display inline-block
        .imgItem
          display inline-block
          height 100px
          width 220px 
    .tourCity
      border-bottom 1px solid #eee
      .title
        padding 10px 0
        font-size 16px
        width 100%
      .tourScroll
        white-space nowrap
        .tourCityList
          display inline-block
          margin-bottom 10px
          .tourCityItem
            display inline-block
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