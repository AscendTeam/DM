<template>
  <div class="detailSlide" ref="detailSlide" v-if="starItem">
    <div  class="C-detailComponent" >
      <div class="detailHeader">
        <div class="detailLeft" >
          <h2>{{starItem.userName}}</h2>
          <p>
            <span class="fanSize">{{starItem.fans}}</span>
            万粉丝
          </p>
          <p>
            <span class="fanSize">{{starItem.show}}</span>
            场在售
          </p>
          <div class="btn">
            <!-- <button class="buttonPink">关注</button> -->
            <Attention class="buttonPink" :starItem="starItem" />
            <button class="buttonShare">分享</button>
          </div>
        </div>
        <div class="detailRight">
          <img :src="starItem.userImg" alt="">
        </div>
      </div>
      <div class="detailCatd">
        <img class="catdImg" :src="starItem.imgs" alt="">
        <div class="catdText">
          <div class="conten">
            <h2>{{starItem.title}}</h2>
            <p>{{starItem.content}}</p>
          </div>
          <div class="price">
            <span>￥{{starItem.price}}</span>
            起
          </div>
        </div>
      </div>
      <div class="imgscroll" ref="left">
        <div class="imgList" >
            <img class="imgItem" :src="img" v-for="(img,index) in starItem.videoImg" :key="index" alt="">
        </div>
      </div>
      <!-- 巡演城市 -->
      <div class="tourCity">
        <p class="title">巡演城市</p>
        <div class="tourScroll" ref="tourScroll">
          <div class="tourCityList">
            <div class="tourCityItem" v-for="(city,index) in starItem.cityTour" :key="index">
              <p class="cityItem">{{city.title}}</p>
              <p class="timeItem">{{city.times}}</p>
              <p class="button">想看</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dynamic">
        <p class="title">巡演城市</p>
        <p class="dynamicItem" v-for="(sta,index) in starItem.state" :key="index">{{sta}}</p>
      </div>
      <div class="frame"></div>
      <div class="soltComponent">
        <div class="commentShow">全部</div>
        <!-- 全部/官方 -->
      </div>
      <div v-for="(item,index) in circleArr" :key="index">
        <Comment :circleItem="item"/>
      </div>
      <!-- <div style="height:1000px"></div> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Comment from '../comment/comment'
import {reqCircle} from '../../api'
import {mapState} from 'vuex'
import Attention from '../attention/attention'
  export default {
    props:["starItem"],
    components:{
      Comment,
      Attention
    },
    data(){
      return{
        circleArr:[]
      }
    },
    async mounted(){
      if (this.starItem) {
        this.slide()
      }
      // 获取评论信息
       let circle = await reqCircle()
       this.circleArr=circle.data.feedMergeDataList
      //  console.log(this.starItem);
       
       
    },
    methods:{
      slide(){
        // 页面垂直滑动
        new BScroll(this.$refs.detailSlide,{scrollY:true,bounce:false})
        // 组件图片的左右滑动
        new BScroll(this.$refs.left,{scrollX:true,stopPropagation:true})
        // 巡演地名滑动
        new BScroll(this.$refs.tourScroll,{scrollX:true,stopPropagation: true})
      }
    },
    watch:{
      starItem(){
        this.$nextTick(()=>{
         this.slide()
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detailSlide
    height calc(100vh - 130px)
    overflow hidden
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
              display inline-block
            .buttonShare
              outline: none
              height 24px
              width 50px
              font-size 12px
              border-radius 12px
              color #fff
              background-color rgba(255,255,255,.3)
              border 1px solid #fff
        .detailRight
          padding-top 40px
          &>img
            width 179px
      .detailCatd
        padding 10px
        border-radius 5px
        // background-color #556688
        border-bottom 1px solid #eee
        display flex
        .catdImg
          width 100px
          height 130px
          border-radius 10px
        .catdText
          height 130px
          padding 5px 0 0 10px
          &>.conten
            height 80px
            h2
              font-size 14px
              padding-bottom 10px
            p
              font-size 12px
          &>.price
            padding-top 24px
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
            margin-right 10px
            border-radius 10px
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