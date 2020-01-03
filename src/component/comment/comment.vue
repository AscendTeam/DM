<template>
  <div class="comment">
    <div class="header">
      <img class="userimg" :src="circleItem.watchData[0].userImg" alt="">
      <div class="userData">
        <h2>{{circleItem.watchData[0].userNick}}</h2>
        <p>{{circleItem.bizTime}}{{circleItem.title}}</p>
        <!-- 星星组件 -->
      </div>
      <div class="right1">...</div>
    </div>
    <!-- 内容 -->
      <div class="userContent">
        <p>{{circleItem.watchData[0].comment}}</p>
        <div v-if="circleItem.watchData[0].imgs">
          <img :src="img" v-for="(img,index) in circleItem.watchData[0].imgs" :key='index' alt="">
        </div>
      </div>
      <!-- 卡片 -->
      <div class="catdComponent">
        <img :src="circleItem.watchData[0].targetImg" alt="">
        <div class="abstract">
          <h3>{{circleItem.watchData[0].targetName}}</h3>
          <p>{{circleItem.watchData[0].targetCityName}}|{{circleItem.watchData[0].targetShowTime}}|{{circleItem.watchData[0].targetPlace}}</p>
        </div>
        <span class="right iconfont iconarrow-right"></span>
      </div>
      <!-- 底部转载等 -->
      <ul class="bottomlist">
        <li>{{circleItem.praiseNum}}<span class="iconfont iconweibiaoti-"></span></li>
        <li>回复<span class="iconfont iconhuifu"></span></li>
        <li>转载<span class="iconfont iconfenxiang"></span></li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['circleItem'],
    data(){
      return{

      }
    },
    mounted(){
      // console.log(this.circleItem);
      
    }
  }
</script>

<style lang="stylus" scoped>
  .comment
    padding-bottom 10px
    .header
      padding-top 10px
      // display flex
      height 48px
      .userimg
        width 48px
        height 48px
        border-radius 50%
        float left
      .userData
        // height 60px
        padding 10px 0
        margin-left 10px
        // width 60%
        float left
        h2
          font-size 16px
          padding-bottom 4px
        p
          color #A5A5AE
      .right1
        margin-right 10px
        float right 
        line-height 20px
    .userContent
      // background-color #eee
      p
        margin-top 10px
        color #7A7A7A
        font-size 14px
        line-height 20px
      img
        width 100px
        height 100px
        margin 10px 12px 0 0 
        border-radius 6px
    .catdComponent
      display flex
      border 1px solid #cdcdcd
      border-radius 5px
      width 90%
      margin 10px 0
      padding 8px
      img 
        width 40px
        height 54px
        border-radius 8px
      .abstract
        padding 10px 0 0 10px
        width 78%
        h3
          font-size 16px
          padding-bottom 8px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        p
          color #676767
      .right
        width 10px
        // color #676767
        font-size 26px
        line-height 60px
    .bottomlist
      padding 10px
      li
        float right 
        margin-left 10px
        color #787878
        span 
          padding-left 3px
          font-size 16px
</style>
