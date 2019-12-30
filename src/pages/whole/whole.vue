<template>
  <div class="wholeComponent">
    <div class="C-router">
      <div class="listRouter" :class="{active:isshow==1}" @click="isshow=1">
        
        <div class="showContainer">
          <span class="show">演出</span>
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
        </div>
      </div>
      <div class="listRouter" :class="{active:isshow==2}" @click="isshow=2">
        大咖
      </div>
      <div class="listRouter" :class="{active:isshow==3}" @click="isshow=3">
        品牌
      </div>
    </div>
    <span class="C-search iconfont iconsearch"></span>
    
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  // import BScroll from 'better-scroll'
  // import Show from '@/components/show/show.vue'
  export default {
    // components:{
    //   Show
    // },
    data(){
      return{
        isshow:1, //1.演出  2大咖  3品牌
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
    //  mounted() {
    //    this.$nextTick(()=>{
    //      this.scroll = new BScroll(this.$refs.wrapper)
    //    })
    //  },
  }
</script>

<style lang="stylus" scoped>
  .wholeComponent
    height 40px
    width 100%
    .C-router
      
      display flex
      // justify-content center
      .listRouter
        
        width 33.333%
        color #aaa
        padding 0 20px
        text-align center
        font-size 14px
        line-height 40px
        .showContainer
          .show
            
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
            

    .C-search
      position absolute
      font-size 20px
      right 10px
      top 12px
      color #aaa
 
</style>
