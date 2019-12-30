<template>
  <div class="bottomRouter">
    <router-link class="listRouter" :class="{active:$route.path==='/home'}" to='/home'>
      <span class="iconfont iconu"></span>
      首页
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/whole'}" to='/whole'>
      <span class="iconfont iconsousuo" ></span>
      全部
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/discover'}" to='/discover'>
      <span class="iconfont iconwode"></span>
      发现
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/wallet'}" to='/wallet'>
      <span class="iconfont icondingdan "></span>
      票夹
    </router-link>
    <router-link class="listRouter" :class="{active:$route.path==='/profile'}" to='/profile'>
      <span class="iconfont icondingdan "></span>
      我的
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
    .listRouter
      display inline-block
      width 20%
      text-align center
      font-size 12px
      &.active
        color red
      span
        display block
        font-size 22px
        padding 6px 0
</style>
