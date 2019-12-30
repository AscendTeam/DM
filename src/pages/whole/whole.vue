<template>
  <div class="wholeComponent">
    <div class="C-router">
      <div class="listRouter" :class="{active:isshow==1}" @click="isshow=1">
          演出
        
      </div>
      <div class="listRouter" :class="{active:isshow==2}" @click="isshow=2">
        大咖
      </div>
      <div class="listRouter" :class="{active:isshow==3}" @click="isshow=3">
        品牌
      </div>
    </div>

    <span class="C-search iconfont iconsearch"></span>
    <Brand></Brand>
    <Show v-if="isshow==1"/>
    <Coffee v-if="isshow==2"/>
    <Brand v-if="isshow==3"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Show from './show/show'
import Coffee from './coffee/coffee'
import Brand from './brand/brand'

  export default {
    components:{
      Coffee,
      Brand,
       Show
    },
    data(){
      return{
        isshow:2, //1.演出  2大咖  3品牌
       
      }
    },

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
       
            

    .C-search
      position absolute
      font-size 20px
      right 10px
      top 12px
      color #aaa

</style>
