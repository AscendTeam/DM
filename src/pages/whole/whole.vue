<template>
  <div class="wholeComponent">
    <div class="top_container">
      <div class="C-router">
        <router-link to="/whole/show" class="listRouter" :class="{active:$route.path==='/whole/show'}">演出</router-link>
        <router-link to="/whole/coffee" class="listRouter" :class="{active:$route.path==='/whole/coffee'}">大咖</router-link>
        <router-link to="/whole/brand" class="listRouter" :class="{active:$route.path==='/whole/brand'}">品牌</router-link>
      </div>
      <span class="C-search iconfont iconsearch"></span>
    </div>
    <div class="componentParcel">
        <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components:{
    },
    data(){
      return{
      }
    },

  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .wholeComponent
    // height 40px
    .top_container
      position sticky
      top 0
      background white
      width 100%
      z-index 99
      // background-color #eee
      .C-router
        display flex
        justify-content center
        .listRouter
          color #aaa
          padding 0 20px
          text-align center
          font-size 14px
          line-height 40px
          &.active
            color #000
            font-size 18px
      .C-search
        position absolute
        font-size 20px
        right 10px
        top 12px
        color #aaa

</style>
