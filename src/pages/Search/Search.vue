<template>
  <div id="J_search">
    <div class="search_bar">
      <input type="text" placeholder="搜索明星、演出比赛、场馆" v-model="search"  @change="show()">
      <i class="iconfont iconsearch1"></i>
      <img src="./images/clear.png" alt="" v-show="search" @click="clearInput">
      <span>取消</span>
    </div>
    <div class="key_word" :disabled="isHide" v-show="Show">
      <div class="hot_search">热搜</div>
      <ul class="star_list">
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
        <li>吴青峰</li>
      </ul>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
     return{
        search:'',
        Show:true,
        showBar:true
     }
    },
    methods:{
      // toBack(){
      // this.$router.go(-1)
      // },
      clearInput(){
        this.search = '',
        this.$router.replace('/search')
        this.Show = true,
        this.showBar= false
      },
      show(){
        this.Show=false
        this.$router.push('/search/itemCard')
      },
      },
      mounted(){
        //读取路由路径不是this.$router.path('/search/itemCard')
        if(this.$route.path==='/search/itemCard'){
          this.Show = false
        }
      },
      computed:{
        isHide(){
        if(this.search=''){
          this.$router.replace('/search')
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #J_search
    width 100%
    margin 20px auto
    overflow hidden
    .search_bar
      position relative
      width 375px
      height 40px
      left -10px
      input
        position relative
        width 260px
        height 25px
        border-radius 10px
        margin-left 20px
        background-color #F2F3F4
        padding-left: 30px;
        outline none
      .iconfont
        position absolute
        left 30px
        width 16px
        height 16px
        top 8px;
        background-color #F2F3F4
        color #CBC4C4
      img
        position absolute
        width 16px
        height 16px
        right 70px
        top 5px
      span
        font-size 14px
        text-align center
        margin-left 21px
    .key_word
      position relative
      width 400px
      height 200px
      padding-top 5px
      left 25px
      .hot_search
        margin-left 20px
        color #757575
        margin-bottom 20px
      .star_list
        position absolute
        width 320px
        height 140px
        left -25px
        li
          display block
          width 55px
          height 30px
          float:left
          overflow:hidden
          text-align center
          border-radius 15px
          border 1px solid #CBC4C4
          line-height 30px
          margin-left 20px        
          margin-bottom 5px
          font-size 16px
</style>
