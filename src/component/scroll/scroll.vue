<template>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiper" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
        <!-- 小圆点 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import "swiper/css/swiper.css"
  import {reqSwiper} from "../../api";
    export default {
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

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    margin-top 15px
    img
      width 335px
      height 160px
      display block
      border-radius 15px
      margin auto
</style>
