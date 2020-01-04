<template>
  <div class="bottomRouter">
    <router-link class="listRouter" :class="{active:$route.path==='/home'}" to='/home'>
      <span class="iconfont iconzhuye"></span>
      <span class="y_bottom_text">首页</span>
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path.indexOf('/whole')===0}" to='/whole'>
      <span class="iconfont iconall" ></span>
      <span class="y_bottom_text">全部</span>
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/discover'}" to='/discover'>
      <span class="iconfont iconfind"></span>
      <span class="y_bottom_text">发现</span>
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/wallet'}" to='/wallet'>
      <span class="iconfont iconticket "></span>
      <span class="y_bottom_text">票夹</span>
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/personal'}" to='/personal'>
      <span class="iconfont iconuser "></span>
      <span class="y_bottom_text">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bottomRouter
    width 100%
    position fixed
    left 0
    bottom 0
    height 50px
    background-color #eee
    position fixed; bottom 0
    height 50px; width 100%
    background-color white
    border-top 1px solid #eee
    display flex
    flex-direction row
    justify-content space-around
    .listRouter
      width 20%
      text-align center
      font-size 12px
      padding 10px 0
      &.active
        color #ff2d79
      span
        display block
        font-size 22px
        &.y_bottom_text
          font-size 13px
</style>
