<template>
  <div class="find_x">
    <!-- 头部样式 -->
    <div class="header_x">
      <span class="title_x">发现</span>
    </div>
    <!-- 内容区 -->
    <div class="container_x" ref="container">
      <div class="wrapper_x">
        <!-- 轮播图 -->
        <div class="carousel"></div>
        <!-- 轮播底部内容 -->
          <div class="show-box_x">
            <!-- 左边盒子的布局 -->
            <div class="show-cell1_x show-cell">
              <span class="show-cell-title_x">赚年终</span>
              <div class="show-cell-explain_x">
                新年礼包预约开启
                <i class="iconfont iconhongbao1"></i>
              </div>
            </div>
            <!-- 右边盒子布局 -->
            <div class="show-cell2_x show-cell">
              <span class="show-cell-title_x">观演团</span>
              <div class="show-cell-explain_x">
                免费观评品质演出
                <i class="iconfont iconyanjing"></i>
              </div>
            </div>
          </div>
      </div>
    
      <!-- 视频头部标题 -->
      <div class="watch_skin_x">
        <div class="wach_bar_x">
          <div class="bar_x">先睹为快</div>
          <div class="icon_x">看视频</div>
        </div>
          <!-- 视频区域 -->
        <div class="watch_content_x" v-for="(item,index) in discover" :key="index">
          <video width="100%" height="100%" :src="item.videoList" controls autoplay="true"></video>
          <span class="content_x">{{item.describe}}</span>
          <!-- 链接内容区 -->
          <div class="realize_x" @click="$router.push('/details')">
            <img :src="item.map" alt="">
            <span class="realize_text_x">
              【{{item.city}}】 {{item.generalize}}
            </span>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState } from "vuex";
  export default {
    mounted(){
      this.$store.dispatch("getDiscover")
    },
    computed:{
        ...mapState(['discover'])
    }
  }
</script>

<style lang="stylus" scoped>
 @import '../../common/stylus/mixins.styl'
// 头部css样式
.header_x
  position fixed
  left 0px
  right 0px
  top 0px
  padding 12px
  text-align center
  height 18px
  background-color #181529
  z-index 10
  .title_x
    top 5px
    font-size 18px
    font-weight bold
    vertical-align middle //文本横向居中对齐
    color #ffffff
.container
  margin-top 18px
  height 100vh
  .wrapper_x
    position relative
  .buttom_list_x
    margin-top 20px
    // 轮播样式
.carousel
  width 100%
  height 200px
  background-color #4F171A
  //轮播下两个块元素的样式
.show-box_x
  display flex
  border-radius 8px
  margin 15px 0
  background-color #F6F6F6
  .show-cell
    flex: 1
    position relative
    margin 4px
    border 1px solid rgba(7, 17, 27, 0.1)
    background-color #ffffff
    border-radius 8px
    .show-cell-title_x
      display block
      font-size 18px
      font-weight bold
      padding 15px
    .show-cell-explain_x
      font-size 15px
      padding 0px 0px 15px 15px
      i 
        font-size 25px
        color red
//视频区域的样式
.watch_skin_x

  .wach_bar_x
    height 30px
    display flex
    flex-direction row//水平方向对齐
    justify-content space-between//沿两端排列
    position relative
    padding-right 20px
    .bar_x
      font-size 25px
      color #000000
      font-weight bold
    .icon_x
      border 1px solid #ffffff
      border-radius 8px
      background-color #F5507A
      color #ffffff
      text-align center
      line-height 30px
      padding 0 10px
  .watch_content_x
    width 100%
    margin 20px 0
    .content_x
      display block 
      font-size 20px
      font-weight bold
      margin 20px
    //视频下链接区域
    .realize_x
      height 120px
      margin 15px auto
      background-color #f6f6f6
      display flex
      border 1px solid #f6f6f6
      border-radius 8px
      img 
        margin 5px 5px
        height 100px
        border-radius 8px
      span 
        font-size 16px
        white-space pre-wrap
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        overflow hidden
        margin 20px 10px

</style>
