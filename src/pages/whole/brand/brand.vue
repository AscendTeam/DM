<template>
  <div class="y_brand_container">
    <div class="y_brand_project_list_container">
      <ul>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
  // import BScroll from 'better-scroll'
  import ScrollX from '../../../component/scrollX/scrollX'
  export default {
    components:{
      ScrollX,
    },
    // mounted() {
    //   let scroll = new BScroll('.wrapper',{
    //     scrollX: true,
    //     click: true
    //   })
    //
    // }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .y_brand_container
    .y_brand_project_list_container
      overflow hidden
      /*.y_brand_project_item*/
        /*.y_brand_project_title
          display flex
          flex-direction row
          justify-content space-between
          padding 10px 20px
          align-items center
          .y_item_img
            width 70px; height 70px; border-radius 50%
            background #FBFBFB
            position: relative;
            vertical-align middle
            img
              width 50px; height 50px; border-radius 50%
              position: absolute; top 0; bottom 0; left 0; right 0
              margin auto
          .y_item_info
            width 200px
            height 45px
            padding 6px 0
            display flex
            flex-direction column
            justify-content space-around
            .y_item_title_container
              .y_item_title
                font-size 16px; font-weight bold
              img
                width 16px; height 16px
            p
              font-size 13px; color #aaa
          .y_attention_button
            width 54px; height 24px; line-height 22px;border-radius 12px
            background-image linear-gradient(90deg,#ff3299,#ff2869)
            color white
            text-align center
        .y_brand_project_info
          width 100%
          .y_brand_project_info_container
            display flex
            >ul
              display flex
              flex-direction row
            .y_project_item
              width 110px
              padding-left 10px
              .y_item_img
                position: relative;
                padding-bottom 10px
                span
                  padding 3px
                  position absolute; top 4px; right 4px; margin auto
                  font-size 10px; color #DCDCDC
                  background rgba(30,29,29,0.8)
                  border-radius 4px
                img
                  width 110px
                  height 150px
                  border-radius 8px
              .y_item_info
                p
                  &.y_info_title
                    font-size 16px
                    color #111
                    line-height 1.2em
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                  &.y_info_price
                    padding-top 5px
                    font-size 16px
                    font-weight bold
                    color #ff2d79
                    span
                      font-size 12px
                      color #aaa
                      &.price
                        color #ff2d79
                        font-weight bold
                  &.y_info_want
                    padding-top 5px
                    font-size 10px
                    color #aaa*/
</style>
