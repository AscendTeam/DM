<template>
  <div>
    <div class="detailContent_x">
      <!-- 评论标题 -->
      <div class="content_x">
      <span class="content_title_x">
        观众热评
      </span>
        <div class="icon_x">去评价</div>
      </div>
      <!-- 推荐 -->

      <div class="recommend_x">
        <div class="recommend_title_x">推荐</div>
        <div class="letter_x">
          <div class="letter_books_x">先锋戏剧孟京辉</div>
          <div class="letter_books_x">2019陈粒“泪游”</div>
          <div class="letter_books_x">吴青峰太空备忘录</div>
        </div>
      </div>
      <!-- 导图 -->
      <div class="photo_x">
        <img src="./images/1.jpg" alt="">
      </div>
      <!-- 评价头部 -->
      <div class="discuss_header_x" v-for="(item,index) in buzz" :key="index">
        <div class="discuss_img_x">
          <img :src="item.portrait">
        </div>
        <div class="discuss_right_x">
          <h4 class="discuss_title_x">{{item.nickname}}</h4>
          <Star class="discuss_star_x" :score="item.score" :size="24"/>
        </div>
        <div class="discuss_content_x">
          <div class="content_text_x">
            {{item.comment}}
          </div>
          <img :src="item.illustration" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { FOOT_SHOW } from "../../vuex/mutation-types";
  import { mapState } from "vuex";
  export default {
    mounted(){
      this.$store.commit(FOOT_SHOW)
      this.$store.dispatch('getBuzz')
    },
    beforeDestroy(){
      this.$store.commit(FOOT_SHOW)
    },
    computed:{
      ...mapState(['buzz'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  //标题css样式
  .content_x
    margin 15px
    height 30px
    display flex
    flex-direction row
    justify-content space-between
    padding-right 20px
    .content_title_x
      font-size 20px
      color #000000
      font-weight bold
    .icon_x
      border 1px solid #ffffff
      border-radius 30px
      background-color #F5507A
      color #ffffff
      text-align center
      line-height 30px
      padding 0 10px
  // 推荐css样式
  .recommend_x
    width 100%
    display flex
    height 30px
    text-align center
    line-height 30px
    .recommend_title_x
      font-size 18px
      font-weight bold
      color #FD4D7D
      margin-left 20px
    .letter_x
      display flex
      .letter_books_x
        text-align center
        margin-left 5px
        border 1px solid #B1B1B1
        padding 0 3px
        color #B1B1B1
        border-radius 30px
  // 导图的样式
  .photo_x
    margin 15px 15px
    img
      width 100%
      height 200px
      border-radius 10px
  // 评论的样式
  .discuss_header_x
    margin 15px 15px
    .discuss_img_x
      float left
      box-sizing border-box
      height 75px
      padding-right 5px
      img
        display block
        height 80%
        border-radius 80%
    .discuss_right_x
      height 80px
      .discuss_title_x
        margin-left 60px
        font-size 16px
        font-weight bold
      .discuss_star_x
        margin 15px
    .discuss_content_x
      padding 5px
      .content_text_x
        font-size 16px
        text-indent 20px
      img
        width 100px
        padding 10px
</style>
