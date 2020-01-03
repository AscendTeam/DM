<template>
  <div class="C-cardComponent" >
    <div class="floatss" name="key" >{{starItem.id}}</div>
    <div class="C-header">
      <img :src="starItem.avatar" alt="">
      <div class="C-userConter">
        <h2>
          {{starItem.userName}}
          <img :src="starItem.icon" alt="">
          <!-- <span class="grade">歌手</span> -->
        </h2>
          <p>
            {{starItem.show}}场在售演出|{{starItem.fans}}万粉丝
          </p>
      </div>
      <!-- <button class="concern">关注</button> -->
      <Attention class="starBtn" :starItem="starItem" />
    </div>
    <div class="C-contentImg">
      <img class="leftImg" :src="starItem.imgs" alt="">
      <img class="rightImg" :src="starItem.videoImg[0]" alt="">
    </div>
    <div class="C-bottom">
      <h2>{{starItem.title}}</h2>
      <p>{{starItem.content}}</p>
    </div>
    <div class="C-btn">
      <span class="number">{{starItem.cityTour.length}}</span>个巡演城市 
      <span class="C-right">{{starItem.cityTour[0].city}}</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import Attention from '../attention/attention'
  export default {
    props:["starItem"],
    components:{
      Attention,
    },
    // computed:{
    //   cityCount(){
    //     let text =""
    //     starItem.cityTour.forEach(item => {
    //       text+=item.city+"|"
    //     })
    //     return text.split(0,text.length-1)
    //   }
    // }
  }
</script>

<style lang="stylus" scoped>
  .C-cardComponent
    width 92%
    // margin auto
    // height 200px
    // background-color #555
    padding 16px 4%
    border-bottom 1px solid #eee
    position relative
    overflow hidden
    .floatss
      position absolute
      width 100%
      height 400px
      // background-color red
      z-index 2
      color transparent
    .C-header
      display flex
      position relative
      &>img 
        width 48px
        height 48px
        border-radius 50%
        vertical-align middle
      .C-userConter
        display inline-block
        vertical-align middle
        width 50%
        padding 6px
        &>h2
          font-size 14px
          padding-bottom 10px
          &>img 
            width 12px
            height 12px
            border none
          // .grade
          //   font-size 8px
          //   color #fff
          //   background-color #2A2A2A 
          //   border-radius 10px
        &>p
          font-size 12px
          color #aaa
      .starBtn
        position absolute
        right 0
        top 6px
        z-index 3
      //   height 24px
      //   width 50px
      //   font-size 12px
      //   border-radius 12px
      //   color #fff
      //   background-color #FF1268
      //   border none 
    .C-contentImg
      padding-top 10px
      .leftImg
        width 30%
        height 140px
        border-radius 5px
        margin-right 2%
      .rightImg
        width 68%
        height 140px
        border-radius 5px
    .C-bottom
      padding 14px 0
      &>h2
        font-size 14px
        padding-bottom 6px
      &>p
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
      line-height 30px
      .number 
        color #FF1268
      .C-right
        padding 0 12px
        display inline-block
        color #222
</style>
