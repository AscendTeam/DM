<template>
  <div class="comment">
    <div class="soltComponent">
      <div class="commentShow">全部</div>
      <!-- 全部/官方 -->
    </div>
    <div class="header">
      <img class="userimg" src="../starCard/images/14.jpg" alt="">
      <div class="userData">
        <h2>麦子</h2>
        <p>1天前发布评论</p>
        <!-- 星星组件 -->
      </div>
      <div>...</div>
    </div>
    <!-- 内容 -->
      <div class="userContent">
        <p>总体混的一般议案,总总体混的一般议案总体混的一般议案总体混的一般议案</p>
        <img src="../starCard/images/14.jpg" alt="">
      </div>
      <!-- 卡片 -->
      <div class="catdComponent">
        <img src="../starCard/images/14.jpg" alt="">
        <div class="abstract">
          <h3>2019超级巨星演唱会</h3>
          <p>简介|时间待定|时间待定</p>
        </div>
        <span class="right iconfont iconarrow-right"></span>
      </div>
      <!-- 底部转载等 -->
      <ul class="bottomlist">
        <li>2<span class="iconfont iconweibiaoti-"></span></li>
        <li>回复<span class="iconfont iconhuifu"></span></li>
        <li>转载<span class="iconfont iconfenxiang"></span></li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" scoped>
  .comment
    .soltComponent
      position relative
      margin-top 10px
      width 64px
      height 22px
      border-radius 10px
      background-color #F2F2F2
      .commentShow
        position absolute
        left 0
        // left 24px
        top 0
        width 40px
        height 20px
        line-height 20px
        text-align center
        background-color #ffffff
        border-radius 10px
        border 1px solid #EBEBEB

    .header
      padding-top 10px
      display flex
      .userimg
        width 60px
        height 60px
        border-radius 50%
      .userData
        // height 60px
        padding 10px 0
        margin-left 10px
        width 70%
        h2
          font-size 16px
          padding-bottom 4px
        p
          color #bcbcbc
    .userContent
      background-color #eee
      p
        color #676767
      img
        width 100px
        height 100px
    .catdComponent
      display flex
      border 1px solid #cdcdcd
      border-radius 5px
      width 90%
      margin 0 auto
      padding 8px
      img 
        width 40px
        height 60px
      .abstract
        padding 12px 0 12px 10px
        width 78%
        h3
          font-size 16px
          padding-bottom 8px
        p
          color #676767
      .right
        width 10px
        // color #676767
        font-size 26px
        line-height 60px
    .bottomlist
      padding 10px
      li
        float right 
        margin-left 10px
        color #787878
        span 
          padding-left 3px
          font-size 16px
</style>
