<template>
  <div class="showContainer">
      
    <div class="wrapper">
      <ul class="content" ref="wrap">
        <li class="listItem" v-for="(item, index) in navList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="listContainer">
      <img src="./images/ly.jpg" alt="">
      <div class="showList">
        <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
        <span class="s2">2020.01.01</span>
        <span class="s3">￥80起</span>
      </div>
    </div>
    <div class="listContainer">
      <img src="./images/ly.jpg" alt="">
      <div class="showList">
        <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
        <span class="s2">2020.01.01</span>
        <span class="s3">￥80起</span>
      </div>
    </div>
    <div class="listContainer">
      <img src="./images/ly.jpg" alt="">
      <div class="showList">
        <span class="s1">[北京]开心麻花原创贺岁大戏《蒙娜丽莎的微笑》</span>
        <span class="s2">2020.01.01</span>
        <span class="s3">￥80起</span>
      </div>
    </div>
    <div class="listContainer">
      <img src="./images/ly.jpg" alt="">
      <div class="showList">
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
    data() {
      return {
         navList:[
          '全部',
          '折扣',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          
        ]
      }
    },
     watch: {
      
    },
    mounted() {
      this.$nextTick(()=>{
          new BScroll(".wrapper",{scrollX:true,bounce:false})
        })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .showContainer
          
            
    background pink
    .wrapper
      overflow hidden
      width 375px
      position absolute
      left 0
      top 40px
      display flex
      
      .content
        // width 100%
        background pink	
        white-space nowrap
        display flex
        .listItem
          line-height 40px
          height 40px
          display inline-block
          font-size 16px
          margin-left 5px
          &.active
            color #000
            font-size 16px
    .listContainer
      display flex
      margin-top 30px 
      img 
        width 120px
        height 120px
        border-radius 8px
      .showList
        span 
          display block
          margin-left 10px
       
        
        .s1
          padding 10px 0
          font-size 22px

        .s2
          padding-top 10px
          font-size 18px
        .s3
          font-size 16px
          padding-top 5px
          color orange
 
</style>
