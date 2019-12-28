<template>
  <div class="wholeComponent">
    <div class="C-router">
      <router-link class="listRouter" :class="{active:$route.path==='/whole/***'}" to='/***'>
        演出
      </router-link>
      <router-link class="listRouter" :class="{active:$route.path==='/whole/coffee'}" to='/whole/coffee'>
        大咖
      </router-link>
      <router-link class="listRouter" :class="{active:$route.path==='/whole/***'}" to='/***'>
        品牌
      </router-link>
    </div>
    <span class="C-search">加</span>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" scoped>
  .wholeComponent
    height 40px
    width 100%
    // background-color #eee
    .C-router
      display flex
      justify-content center
      .listRouter
        padding 0 20px
        text-align center
        font-size 14px
        line-height 40px
        &.active
          color #000
          font-size 16px
    .C-search
      position absolute
      font-size 16px
      right 10px
      top 10px
 
</style>
