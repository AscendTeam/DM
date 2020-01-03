<template>
  <div>
    <div class="shakedownContainer" >
      <div class="head" @click="$router.push('/ticket')">
        <i>抢票播报站</i>
        <span class="s1">168万人想看德云社北京</span>
        <span class="more"> > </span>
      </div>
    <div class="contentContainer">
      <img class="qwe" src="./images/ly.jpg"/>
      <div class="content">
        <span class="s1">[北京]开心麻花爆笑舞台剧《鞠菊菊鞠菊菊</span>
        <span class="s2">4387人想看</span>
        <div class="pr">
          <span class="price">￥80</span>
          <span class="qi">起</span>
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
    margin 10px auto
    width 90%
    height 100%
    border-radius 10px
    background-color #fff
    border-radius 10px
    border 1px solid #efefef
    box-shadow 0 3px 8px #ccc
    .head
      height 40px
      // display flex
      // justify-content center
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      i
        padding-left 10px
        height 40px
        font-size 18px
        font-weight bold
        line-height 40px
        color red
      &>.s1 
        height 40px
        line-height 40px
        font-size 12px
        padding 0 10px 
      .more
        padding-right 10px
        float right 
        font-size 24px
        height 40px
        line-height 36px
    .contentContainer
      display flex
      padding-top 10px
      .qwe
        width 50px
        height 70px
        border-radius 5px
        margin 0 10px
      .content
        height 80px
        .s1
          display block
          font-weight bold
          font-size 18px
          width 264px
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
            font-size 16px
          .qi
            margin-left 3px
            font-size 12px
            color #898989
          button
            background-color #ff1268
            border none
            height 24px
            color #fff 
            border-radius 10px
            position absolute
            right 10px
            bottom 8px
  span 
    font-size 24px            
 
</style>
