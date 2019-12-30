<template>
  <div class="showContainer">
      
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li class="listItem" v-for="(item, index) in navList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="listContainer">
    <div class="showList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
      <span class="s2">2020.01.01</span>
      <span class="s3">￥80起</span>
    </div>

    
    <div class="showList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
      <span class="s2">2020.01.01</span>
      <span class="s3">￥80起</span>
    </div>
    <div class="showList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
      <span class="s2">2020.01.01</span>
      <span class="s3">￥80起</span>
    </div>
    <div class="showList">
      <img src="//pimg.dmcdn.cn/perform/project/1803/180338_n.jpg?_t=1575366971613&x-oss-process=image/quality,q_60/format,webp" alt="">
      <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
      <span class="s2">2020.01.01</span>
      <span class="s3">￥80起</span>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
     watch: {
      show(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.wrap,{})
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .showContainer
          
            
            background pink
          .wrapper
            overflow hidden
            width 100%
            position absolute
            left 0
            top 40px
            right 0
            bottom 0
          .content
            background pink	
            white-space nowrap
            .listItem
              height 20px
              display inline-block
        &.active
          color #000
          font-size 16px
        .listContainer
          width 600px
          background skyblue 
          .showList
            //width 50%
            margin-top 50px
            // display flex
            // flex-direction column
            img 
              width 120px
              height 120px
              border-radius 8px
            .s1
              font-size 18px
       
      .s2
        display inline-block
        font-size 18px
        margin-top 10px
 
</style>
