<template>
  <div>
      <div class="w-all-center">
        <div class="w-space"></div>
        <!-- 搜索 -->
        <div class="w-home-top">
          <div class="w-home-top-city">
            <span class="w-home-top-cityname">北京</span>
            <i class="iconfont icondown-copy icon-top-city"></i>
          </div>
          <div class="w-search-ladel">
            <i class="iconfont iconsearch1 iconsearch"></i>
            <span class="searchtext">搜索明星</span>
          </div>
          <i class="iconfont iconrili iconuser1"></i>
          <i class="iconfont iconduihua1 iconuser"></i>
        </div>
      <!-- <div class="div3"></div> -->
      <div class="w-header" ref="fix">
      <div class="wrapper w-search-fix">
        <!-- 导航跳转 -->
        <div class="navbar">
          <ul class="navlist">
            <li>证件信息</li>
            <li>跨年精彩</li>
            <li>放牛班的春天</li>
            <li>黄义达</li>
            <li>李荣浩</li>
          </ul>
        </div>
        <!-- 轮播图 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in swiper" :key="index">
                <img :src="item" alt="">
              </div>
            </div>
          <!-- 小圆点 -->
          <div class="swiper-pagination"></div>
          </div>
        <!-- 节目列表 -->
        <div class="w-nav-list" >
          <ul>
            <li>
              <i class="iconfont iconshengdanshu"></i>
              <span>演唱会</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-xingxing"></i>
              <span>话剧歌剧</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-xueren"></i>
              <span>音乐会</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-milu"></i>
              <span>体育</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-huahuan"></i>
              <span>曲艺杂坛</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-shoutao"></i>
              <span>儿童亲子</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-shengdanwa"></i>
              <span>展览休闲</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie-lingdang"></i>
              <span>舞蹈芭蕾</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie1"></i>
              <span>折扣专区</span>
            </li>
            <li>
              <i class="iconfont iconshengdanjie"></i>
              <span>全部</span>
            </li>
          </ul>
        </div>
        <!-- 抢票播报站 -->
        <div>
          <ShakeDown/>
        </div>
        <!-- 菜单轮播 -->
        <p class="w-title">必看排行榜</p>
        <div class="scroll-container">
          <HomeScroll/>
        </div>
        <div style="height:16px"> </div>
        <div>
          <MenuList/>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/css/swiper.css"
  import BScroll from 'better-scroll'
  import HomeScroll from '../../component/HomeSrcoll/HomeScroll'
  import ShakeDown from '../../component/Shakedown/Shakedown'
  import MenuList from '../../component/MenuList/MenuList'
  import { reqSwiper } from "../../api";
  export default{
   components:{
     HomeScroll,
     ShakeDown,
     MenuList
   },
   data(){
     return{
      swiper:[],
     }
   },
   async mounted(){
     let data = await reqSwiper();
     if (data.code == 0) {
     this.swiper =data.data.swiperImg;
    }
   },
   watch:{
     swiper(){
       this.$nextTick(()=>{
          new BScroll(this.$refs.fix,{scrollY:true,bounce:false}),
          new Swiper('.swiper-container',{
          loop: true,
          autoplay:true,
          pagination:{
            el: '.swiper-pagination'
          }
        })
       })
     }
   }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .w-space
      height 12px
    .w-home-top
      display flex
      justify-content center
      height 40px
      line-height 20px
      .w-home-top-city
        vertical-align middle
        font-size 16px
        display inline-block
        line-height 30px
        .icon-top-city
          font-size 18px
          vertical-align middle
      .w-search-ladel
        justify-content center
        border 1px solid
        height 25px
        border-radius 15px 15px 15px 0
        font-size 15px
        width 220px
        line-height 25px
        margin 0 10px
        background white
        .iconsearch
          margin auto 10px
          color black
        .searchtext
          color #999999
  .iconuser
    font-size 20px
    margin-top 5px
    margin-left 10px
  .iconuser1
    font-size 20px
    margin-top 5px
  .div3
    height 30px
  .w-header
    height 572px
    overflow hidden
  .navbar
    display flex
    justify-content center
    margin-top 10px
    .navlist
      display flex
      justify-content center
      li
        font-size 12px
        display block
        padding 0 12px
  .swiper-container
    width 100%
    margin-top 15px
    img
      width 335px
      height 160px
      display block
      border-radius 15px
      margin auto
  .w-nav-list
    margin-top 15px
    text-align center
    ul
      display flex
      flex-wrap wrap
      white-space pre-wrap
      justify-content space-around
      li
        display block
        padding 10px
        justify-content space-around
        i
          font-size 30px
          display inline-block
          margin 0 10px
        span
          display block
          color black
          margin 2px 4px
  .w-title
    font-size 20px
    color black
    font-weight bold
    padding 15px
  .scroll-container
    overflow hidden
</style>