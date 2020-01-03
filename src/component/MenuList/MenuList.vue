<template>
  <div>
    <span class="for-you">为您推荐</span>
   <div class="recommendContainer">
    <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <p class="s2">
        ￥80
        <span>起</span>
      </p>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <p class="s2">
        ￥80
        <span>起</span>
      </p>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <p class="s2">
        ￥80<span>起</span>
      </p>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <p class="s2">
        ￥80
        <span>起</span>
      </p>
    </div>
     <div class="recommendList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <h2>[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</h2>
      <span class="s1">2020.01.01</span>
      <p class="s2">
        ￥80
        <span>起</span>
      </p>
      
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
 .for-you
  font-size 20px
  font-weight bold
  display inline-block
  padding-left 20px
  line-height 46px
  letter-spacing 2px
.recommendContainer
    width 100%
    display flex
    flex-wrap wrap
    flex-wrap wrap
    justify-content space-evenly
    &:after
      width 160px
      content ""
      height 1px
    .recommendList
      width 160px
      display flex
      flex-direction column
      margin-bottom 20px
      border-radius 5px
      border 1px solid #dedede
      
      img 
        width 160px
        height 200px
        border-radius 8px
      h2
        font-size 16px
        line-height 24px
        width 150px
        text-align center
        overflow:hidden;
        display:-webkit-box
        -webkit-box-orient:vertical
        -webkit-line-clamp:2
      &>span
        margin-top 10px
        display inline-block
        margin 6px
        &.s1
          font-size 14px
          color #aaa
      .s2
        font-size 16px
        color #ff1268
        padding 0 0 10px 6px
        &>span 
          font-size 12px
          color #898989
        
</style>
