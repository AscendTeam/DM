<template>
  <div v-if="projectData.detail">
    <div class="y_project_container">
      <div class="y_project_header">
        <!--    顶部返回\分享-->
        <div class="y_back-share_container">
          <i class="back iconfont iconarrow-lift" @click="$router.go(-1)"></i>
          <div class="y_share_button">
            <span class="y_share_icon">￥</span>
            <span class="y_share_span">分享</span>
          </div>
        </div>
      </div>
      <!--  标题\价格  -->
      <div class="y_header_project_info">
        <img :src="projectData.detail.detailViewComponentMap.item.staticData.itemBase.itemPic">
        <div class="y_project_info_container">
          <div class="y_project_title">
            <p class="y_title">{{projectData.detail.detailViewComponentMap.item.staticData.itemBase.itemName}}</p>
<!--            <span class="y_label y_super_label" >超平日</span>-->
            <span class="y_label" v-if="projectData.detail.detailViewComponentMap.item.staticData.itemBase.generalAgent.description">{{projectData.detail.detailViewComponentMap.item.staticData.itemBase.generalAgent.description}}</span>
            <span class="y_label" v-if="projectData.detail.detailViewComponentMap.item.staticData.itemBase.showTag"
            v-for="(showTagItem,index) in projectData.detail.detailViewComponentMap.item.staticData.itemBase.showTag"
                  :key="index"
            >{{showTagItem}}</span>
          </div>
          <div class="y_project_price">
<!--            <span class="price">￥</span>-->
            <span>{{projectData.detail.detailViewComponentMap.item.item.priceRange}}</span>
          </div>
        </div>
      </div>
      <!--  购票详情页面  -->
      <div class="y_project_more_info">
        <!--   注意事项  -->
        <div class="y_project_notices">
          <ul class="y_project_notices_list">
            <li class="y_project_notices_item" v-for="(serviceNotes,index) in projectData.detail.detailViewComponentMap.item.staticData.itemBase.serviceNotes"
            :key="index">
              <span class="y_notices_icon">!</span>
              <span>{{serviceNotes.tagName}}</span>
            </li>
          </ul>
          <i class="y_notices_moreinfo iconfont iconjiantou"></i>
        </div>
        <!--   演出时长   -->
        <div class="y_project_time">
          <div class="y_time_info">
            <span class="y_time_info_data">{{projectData.detail.detailViewComponentMap.item.staticData.itemBase.showTime}}</span>
            <span class="y_time_info_length">{{projectData.detail.detailViewComponentMap.item.staticData.itemBase.showDuration}}</span>
          </div>
          <i class="y_notices_moreinfo iconfont iconjiantou"></i>
        </div>
        <!--   演出地点   -->
        <div class="y_project_address">
          <div class="y_address_info">
            <span class="y_address_info_name">{{projectData.detail.detailViewComponentMap.item.staticData.venue.venueCityName}} | {{projectData.detail.detailViewComponentMap.item.staticData.venue.venueName}}</span>
            <span class="y_address_info_detail">{{projectData.detail.detailViewComponentMap.item.staticData.venue.venueAddr}}</span>
          </div>
          <div class="y_address_icon_container">
            <i class="y_address_icon iconfont icondizhi1"></i>
            <span>17.7km</span>
          </div>
        </div>
      </div>
      <!--  榜单排名  -->
      <div class="y_project_rank">
        <div class="y_rank_container">
          <span class="y_rank_icon">榜</span>
          <span class="y_rank_info">{{projectData.detail.detailViewComponentMap.item.staticData.rankListVO.name}}NO.{{projectData.detail.detailViewComponentMap.item.staticData.rankListVO.type}}</span>
        </div>
        <i class="y_notices_moreinfo iconfont iconjiantou"></i>
      </div>
      <!--  具体详情页面-->
      <div class="y_project_detail_container">
        <!--  详情/评价/须知/推荐-->
        <div class="y_project_detail_choice">
          <div class="y_detail_container">
            <ul>
              <li class="y_detail_item_info" :class="{detail_item_chiose:choiceIndex===0}" @click="scrollTo(0)">
                详情
                <p class="y_detail_item_info detail_item_chiose" v-if="choiceIndex===0"></p>
              </li>
              <li class="y_detail_item_notice" :class="{detail_item_chiose:choiceIndex===1}" @click="scrollTo(1)">
                须知
                <p class="y_detail_item_info detail_item_chiose" v-if="choiceIndex===1"></p>
              </li>
              <li class="y_detail_item_suggestion" :class="{detail_item_chiose:choiceIndex===2}" @click="scrollTo(2)">
                推荐
                <p class="y_detail_item_info detail_item_chiose" v-if="choiceIndex===2"></p>
              </li>
            </ul>
          </div>
        </div>
        <!--  详情-->
        <div class="y_detail">
          <div class="y_detail_info" >
  <!--          <img class="y_detail_ads_banner" src="https://img.alicdn.com/tfs/TB1EjBrphD1gK0jSZFsXXbldVXa-648-148.gif_600x600.jpg" alt="">-->
  <!--          <p class="y_detail_info_title">品牌</p>-->
  <!--          <div class="y_detail_info_brand">
              <div class="y_item_info_container">
                <div class="y_item_img">
                  <img src="//intercms.damai.cn/artist/pic/1554108643078/1554108643078-main.jpg">
                </div>
                <div class="y_item_info">
                  <div class="y_item_title_container">
                    <span class="y_item_title">德云社</span>
                    <img src="https://gw.alicdn.com/tfs/TB1c4U2koT1gK0jSZFhXXaAtVXa-72-72.png" alt="">
                  </div>
                  <p>北京相声大会 | 相声社团No1</p>
                </div>
              </div>
              <i class="y_notices_moreinfo iconfont iconjiantou"></i>
            </div>-->
            <p class="y_detail_info_title">演职人员</p>
            <ul>
              <li v-for="(artistsItem,index) in projectData.detail.detailViewComponentMap.item.dynamicExtData.artists"
              :key="index">
                <div  class="y_detail_info_artist">
                  <div class="y_item_info_container">
                    <div class="y_item_img">
                      <img :src="artistsItem.picUrl">
                    </div>
                    <div class="y_item_info">
                      <div class="y_item_title_container">
                        <span class="y_item_title">{{artistsItem.artistName}}</span>
                        <img src="https://gw.alicdn.com/tfs/TB1c4U2koT1gK0jSZFhXXaAtVXa-72-72.png">
                      </div>
                      <p>{{artistsItem.archives}}</p>
                    </div>
                    <i class="y_notices_moreinfo iconfont iconjiantou"></i>
                  </div>
                </div>


              </li>
            </ul>

            <p class="y_detail_info_title">演出介绍</p>
            <div class="y_detail_info_tips_container" v-html="projectData.detail.detailViewComponentMap.item.staticData.itemExtendInfo.itemExtend">
              {{projectData.detail.detailViewComponentMap.item.staticData.itemExtendInfo.itemExtend}}
            </div>
          </div>
          <div class="y_detail_notice">
            <ul>
              <li v-for="(noticeList,index) in projectData.detail.detailViewComponentMap.item.staticData.noticeMatter.noticeList"
              :key="index">
                <p class="y_bottom_line"></p>
                <p class="y_detail_info_title">{{noticeList.noteTitle}}</p>
                <div class="y_detail_info_tips_container">
                  <ul>
                    <li v-for="(noticeItem,index) in noticeList.ticketNoteList" :key="index">
                      <p class="y_detail_info_title">{{noticeItem.title}}</p>
                      <p class="y_detail_info_Tips">{{noticeItem.content}}</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="y_detail_suggestion">推荐</div>
        </div>
      </div>
    </div>
    <div class="y_buyTicket_container">
      <div class="y_kefu_container">
        <i class="iconfont iconkefu"></i>
        <span>客服</span>
      </div>
      <div class="y_want_container">
        <i class="iconfont iconguanzhu"></i>
        <span>想看</span>
      </div>
      <div class="y_buy_container">
        <div class="y_but_seat">
          选座购买
        </div>
      </div>
    </div>
  </div>





</template>

<script>
  import {reqBrand,reqDetail} from "../../api"
  export default {
    data(){
      return{
        projectData:{},
        choiceIndex:0
      }
    },
    async mounted() {
      window.addEventListener('scroll', this.onScroll)

      let id = this.$route.params.index
      let list = await reqDetail()
      this.projectData = list.data.find((item,index)=>item.id==id)
    },

    destroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        const navContents = document.querySelectorAll('.y_detail>div')
        const offsetTopArr = []
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        })
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let navIndex = 0
        for (let n = 0; n < offsetTopArr.length; n++) {
          if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
          }
        }
        this.choiceIndex = navIndex
      },

      scrollTo(index){
        this.choiceIndex = index;
        const targetOffsetTop = document.querySelector(`.y_detail>div:nth-child(${index + 1})`).offsetTop - 60
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const STEP = 50
        if (scrollTop > targetOffsetTop) {
          smoothUp()
        } else {
          smoothDown()
        }
        function smoothDown() {
          if (scrollTop < targetOffsetTop) {
            if (targetOffsetTop - scrollTop >= STEP) {
              scrollTop += STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothDown)
          }
        }
        function smoothUp() {
          if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
              scrollTop -= STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
          }
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .y_project_container
    position relative
    background #F7F7F7
    /*更多详情 箭头*/
    .y_notices_moreinfo
      font-size 12px
      font-weight bold
      color #3D3D3D
    .y_project_header
      padding 20px 20px
      background #7481AD
      height 155px
      // 顶部返回\分享
      .y_back-share_container
        display flex
        justify-content space-between
        .back
          font-size 30px
          /*width 15px*/
          /*height 30px*/
          color white
        .y_share_button
          width 64px
          height 24px
          background #FEE6EF
          border-radius 12px
          line-height 24px
          text-align center
          .y_share_icon
            display inline-block
            width 16px
            height 16px
            border-radius 50%
            font-size 12px
            line-height 16px
            /*margin 5px*/
            color white
            background #F57291
          .y_share_span
            font-size 12px
            font-weight bold
            padding 0 4px
            color #F57291

    // 顶部 标题\价格
    .y_header_project_info
      position absolute
      top 40px
      z-index 99
      padding 20px 20px
      display flex
      flex-direction row
      img
        width 100px; height 135px; border-radius 10px
      .y_project_info_container
        padding-left 10px
        display flex
        flex-direction column
        justify-content space-between
        .y_project_title
          .y_title
            font-size 18px
            font-weight bold
            line-height 1.4em
            color white
          .y_label
            display inline-block
            margin 6px 2px
            padding 2px 6px
            border-radius 10px;
            border 1px solid white
            font-size 12px;
            color white
            &.y_super_label
              padding 3px 8px
              font-weight bold
              font-style italic
              background linear-gradient(135deg,#DB6269,#E7344D)
              border none
        .y_project_price
          padding-top 5px
          font-size 16px
          font-weight bold
          color #ff2d79
          .price
            font-size 13px



    // 购票详情页面
    .y_project_more_info
      margin-top -35px
      border-radius 10px 10px 0 0
      padding 0 20px
      width 100%
      box-sizing border-box
      background #F7F7F7
      background white

      /*注意事项*/
      .y_project_notices
        padding 50px 0 15px
        display flex
        justify-content space-between
        border-bottom 1px solid #D5D5D5
        .y_project_notices_list
          display flex
          /*flex-direction row*/
          .y_project_notices_item
            margin-right 4px
            span
              font-size 12px
              text-align center
              /*vertical-align middle*/
              color #aaa
              margin-right 4px
              &.y_notices_icon
                display inline-block
                color white
                background #EC9B3E
                border-radius 50%
                width 12px
                height 12px

      /*演出时长*/
      .y_project_time
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom 1px solid #D5D5D5
        padding 15px 0
        .y_time_info
          display flex
          flex-direction column
          .y_time_info_data
            display inline-block
            padding-bottom 8px
            font-size 16px
            font-weight bold

          .y_time_info_length
            font-size 12px
            color #aaa

      /*演出地点*/
      .y_project_address
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        /*border-bottom 1px solid #D5D5D5*/
        padding 15px 0
        .y_address_info
          display flex
          flex-direction column
          .y_address_info_name
            display inline-block
            padding-bottom 8px
            font-size 16px
            font-weight bold
          .y_address_info_detail
            font-size 12px
            color #aaa
        .y_address_icon_container
          display flex
          flex-direction column
          .y_address_icon
            color #6066FC
            text-align center
            font-size 24px
          span
            font-size 12px
            color #aaa
    /*榜单排名*/
    .y_project_rank
      background white
      border-top 10px solid #F7F7F7
      border-bottom 10px solid #F7F7F7
      padding 15px 20px
      display flex
      justify-content space-between
      align-items center
      .y_rank_container
        line-height 24px
        vertical-align middle
        .y_rank_icon
          display inline-block
          color white
          background #ff2d79
          width 24px
          height 24px
          text-align center
          border-radius 50% 50% 50% 0
        .y_rank_info
          display inline-block
          font-size 16px
          font-weight bold
          padding-left 10px

    /*具体详情页面*/
    .y_project_detail_container
      background #f7f7f7
      // 标题标签
      .y_detail_info_title
        font-size 16px
        font-weight bold
        padding 10px 0 4px
      .y_detail_info_Tips
        font-size 13px
        color #888
        line-height 1.5em
      /*详情\评价\须知\推荐 选择框*/
      .y_project_detail_choice
        padding 15px 20px
        background white
        position: sticky;
        top 0
        .y_detail_container
          >ul
            display flex
            >li
              font-size 18px
              /*font-weight bold*/
              padding-right 20px
              color #999999
              line-height 1.2em
              display flex
              flex-direction column
              align-items center
              &.detail_item_chiose
                font-weight bold
                color black
                /*border-bottom 3px solid #F2416C*/
              .y_detail_item_info
                width 20px
                height 4px
                background #F2416C
                border-radius 2px

      /*详情*/
      .y_detail_info
        margin-bottom 10px
        padding 0 20px
        background white
        // 广告banner
        .y_detail_ads_banner
          border-radius 10px
          width 100%
          overflow hidden
          margin-bottom 10px
        // 品牌
        .y_detail_info_brand
          padding 10px 0px
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .y_item_info_container
            display flex
            flex-direction row
            /*align-items center*/
            .y_item_img
              width 70px; height 70px; border-radius 50%
              background #FBFBFB
              /*background #7e8c8d*/
              position: relative;
              vertical-align middle
              img
                width 50px; height 50px; border-radius 50%
                position: absolute; top 0; bottom 0; left 0; right 0
                margin auto
            .y_item_info
              width 200px
              height 45px
              padding 6px 6px
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


        // 演职人员
        .y_detail_info_artist
          padding 10px 0px
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .y_item_info_container
            display flex
            flex-direction row
            align-items center
            .y_item_img
              vertical-align middle
              img
                width 70px; height 70px; border-radius 50%
                margin auto
            .y_item_info
              width 200px
              height 45px
              padding 6px 6px
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


        // 温馨提示
        .y_detail_info_tips_container
          width 100%
          padding-bottom 10px
          color #888
          img
            width 100%
            height 100%
            >div
              >span
                font-weight normal
                font-size 14px

          .y_detail_info_title
            font-weight normal
            font-size 14px
          .y_detail_info_Tips
            font-size 13px
            color #888
            line-height 1.5em

      /*须知*/
      .y_detail_notice
        margin-bottom 10px
        padding 0 20px
        background white
        .y_bottom_line
          padding-top 10px
          border-bottom 1px solid #F6F6F6
        .y_detail_info_title
          font-weight normal
          font-size 14px
        .y_detail_info_Tips
          font-size 13px
          color #888
          line-height 1.5em
      /*推荐*/
      /*.y_detail_suggestion*/
  .y_buyTicket_container
    position sticky
    bottom 0
    display flex
    flex-direction row
    justify-content space-between
    height 40px
    align-items center
    font-size 14px
    color #676767
    padding 12px 20px 2px
    background white
    i
      font-size 24px
      font-weight bold
    .y_kefu_container
      display flex
      flex-direction column
      align-items center
    .y_want_container
      display flex
      flex-direction column
      align-items center
    .y_buy_container
      background #FF4090
      width 250px
      height 40px
      margin-left 10px
      border-radius 20px 20px 20px 0
      .y_but_seat
        text-align center
        line-height 40px
        font-size 20px
        color white
</style>
