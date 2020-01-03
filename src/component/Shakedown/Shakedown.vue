<template>
  <div>
    <div class="shakedownContainer" >
      <div class="head" @click="$router.push('/ticket')">
        <h1>抢票播报站</h1>
        <span class="s1">168万人想看德云社北京</span>
        <span class="more"> > </span>
      </div>
    <div class="contentContainer">
      <img class="qwe" src="./images/ly.jpg"/>
      <div class="content">
        <span class="s1">[北京]开心麻花爆笑舞台剧《鞠菊菊鞠菊菊</span>
        <span class="s2">4387人想看</span>
        <div class="pr">
          <span class="price">￥80起</span>
          <button>去抢票</button>
        </div>
      </div>
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
  .shakedownContainer
    width 100%
    height 100%
    border-radius 10px
    background-color #fff
    .head
      height 60px
      display flex
      justify-content center
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      h1
        height 60px
        font-size 22px
        line-height 60px
        color red
      .s1 
        height 60px
        line-height 60px
        font-size 16px
        padding 0 10px 
      .more
        font-size 20px
        height 60px
        line-height 60px
        margin-left 20px
    .contentContainer
      display flex
      padding-top 10px
      .qwe
        width 80px
        height 80px
        border-radius 13px
        padding-right 10px
      .content
        height 80px

        .s1
          display block
          font-weight bold
          font-size 22px
          width 300px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .s2 
          display inline-block
          margin 10px 0px
          font-size 16px
          color #333
          text-align left 
          
        .pr
          height 30px
          position relative
          .price
            color red
            font-size 20px
          button
            background pink
            color #fff 
            border-radius 10px
            position absolute
            right 30px
            bottom 8px
  span 
    font-size 24px            
 
</style>
