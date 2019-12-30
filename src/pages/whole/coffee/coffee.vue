<template>
  <div class="C-coffeeComponent">
    <div class="widthUl" ref="topScroll">
      <ul class="C-coffeeList" >
        
        <li class="C-Item" v-for="(item,index) in listArr" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="parcel swiper-container" >
      <div class=" add swiper-wrapper">
        <div class="module swiper-slide" v-for="(list,index) in listArr" :key="index" >
          <div class="recommend" v-if="index===0">
            <StarCard :starItem="item" v-for="(item,index) in starList" :key="index" />
          </div>
          <div class="recommend"  v-if="index!==0">
            <Details :starItem="starList[index]"/>
          </div>
        </div>
        <!-- <div class="swiper-slide">11111111111111111111111111111</div>
        <div class="swiper-slide">22222222222222222222222222222</div>
        <div class="swiper-slide">32333333333333333333333333333</div> -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import  'swiper/css/swiper.min.css'
  import StarCard from '../../../component/starCard/starCard'
  import Details from '../../../component/details/details'
  import {reqStar} from '../../../api'
  export default {
    components:{
      StarCard,
      Details
    },
    data(){
      return{
        listArr:[
          "推荐",
          '林嘉佑',
          '陈粒',
          '周杰伦',
          '林俊杰',
          '张杰',
          '蔡依林',
          '梁静茹',
          '张韵涵',
          '任贤齐',
          '李建',
          '周深',
          '伍佰',
          '汪苏泷',
          '陈绮贞',
          '韦礼安'
        ],
        // isShow:true,//true为推荐 false为其他
        starList:[]
      }
    },
    async mounted(){
      
      
      let data = await reqStar()
      if (data.code==0) {
        this.starList = data.data
      }
      
    },
    watch:{
      starList(){
        this.$nextTick(()=>{
          console.log(1111);
          
          // new BScroll(this.$refs.contentScroll,{scrollX:true,bounce:false})
          new BScroll(this.$refs.topScroll,{scrollX:true,bounce:false})
          new Swiper('.swiper-container',{
            pagination: {
              // el: '.swiper-pagination',
              
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .C-coffeeComponent
    // position absolute
    width 100%
    // height 100%
    overflow-x hidden
    .widthUl
        white-space nowrap
      .C-coffeeList
        display inline-block
        .C-Item
          display inline-block
          padding 0 10px
          height 40px
          text-align center
          line-height 40px
    .parcel
      height 567px
      overflow hidden
      .add
        // width 2000px
        .module
          // white-space nowrap
          .recommend
            // width 375px
            height 100%
            // white-space nowrap
            // display inline-block
</style>
