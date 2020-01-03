<template>
  <div>
    <span class="for-you">为您推荐</span>
   <div class="recommendContainer">
    
    <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <span class="s2">￥80起</span>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <span class="s2">￥80起</span>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <span class="s2">￥80起</span>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <span class="s2">￥80起</span>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <span class="s2">￥80起</span>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
.recommendContainer
    width 100%
    display flex
    flex-wrap wrap

    .recommendList
      width 50%
      display flex
      flex-direction column
      
      img 
        width 150px
        height 150px
        border-radius 8px
      h2
        font-size 20px
        overflow:hidden;
        display:-webkit-box
        -webkit-box-orient:vertical
        -webkit-line-clamp:2
      span
        margin-top 10px
        &.s1
          font-size 18px
          color #aaa
      .s2
        font-size 20px
        color orange
 
</style>
