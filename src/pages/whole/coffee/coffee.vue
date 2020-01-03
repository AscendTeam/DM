<template>
  <div class="C-coffeeComponent" >
    <div class="widthUl" ref="topScroll">
      <ul class="C-coffeeList" ref="topPlace">
        <li class="C-Item" :class="{active:index===swIndex}" v-for="(item,index) in nameArr" :key="index" @click="amendSwiper(index)">{{item}}</li>
      </ul>
    </div>
    <div class="parcel swiper-container">
      <div class="add swiper-wrapper" >
        <div class="module swiper-slide" v-for="(list,index) in nameArr" :key="index">
          <div class="bscroll" >
            <div v-if="index===0">
              <Slide :starList="starList"/>
            </div>
            <div v-if="index!==0">
              <Details :starItem="starList[index-1] || {}" />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import StarCard from "../../../component/starCard/starCard";
import Slide from '../../../component/slide/slide'
import Details from "../../../component/details/details";
import { reqStar } from "../../../api";
export default {
  components: {
    // StarCard,
    Slide,
    Details
  },
  data() {
    return {
      starList: [],
      swiperIndex:0
    };
  },
  async mounted() {

    // 判断初始是否有数据
    if (this.starList.length) {
      this.gainSwiper()
      this.gainSscroll()
    }

    // 请求数据
    let data = await reqStar();
    if (data.code == 0) {
      this.starList = data.data;
      this.$store.dispatch("modStarList",data.data)
    }
    
  },
  computed:{
    swIndex(){
      if (this.swiperIndex) {
        const li = this.$refs.topPlace.children[this.swiperIndex]
        this.bScrol.scrollToElement(li,300,true)
      }
      return this.swiperIndex
    },
    nameArr(){
      let list = [...this.starList]
      console.log(this.starList);
      
      let listArr = list.map(star=>star.userName)
      listArr.unshift('推荐')
      return listArr
    },
  },
  methods:{

    // 内容区滑动
    gainSwiper(){
      // 实现轮播滑动
      this.mySwiper = new Swiper(".swiper-container", {
        on:{
          // 高亮
            slideChangeTransitionEnd: (event)=> {
              console.log(this.mySwiper.activeIndex);
              this.swiperIndex = this.mySwiper.activeIndex
            },
            click:(event)=>{
              if (event.target.attributes.name) {
                // 这是唯一标识id
                console.log(event.target.innerText);
                // 跳转到详细页面
                this.$router.push(`/worksdetail/${event.target.innerText}`)
              }
            }
          },
        pagination: {
          stopPropergation: false,
          // preventClicks:false
          // preventDefault:false
        },

      });
      
      
    },

    // 头部滑动
    gainSscroll(){
      this.bScrol = new BScroll(this.$refs.topScroll, {
        scrollX: true,
        bounce: false,
        click:true,
        probeType: 1
      })
    },

    // 点击切换到指定swiper页
    amendSwiper(index){
      this.mySwiper.slideTo(index,0,false)
      this.swiperIndex=index
    }
    
  },
  watch: {
    starList() {
      // 当数据回来时调用
      this.$nextTick(() => {
        this.gainSwiper()
        this.gainSscroll()
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active
  color #FF1268

.C-coffeeComponent 
  // position absolute
  width 100%;
  // height 100%
  overflow-x hidden;

  .widthUl 
    white-space nowrap;
  

  .C-coffeeList 
    display inline-block;

    .C-Item 
      display inline-block;
      padding 0 10px;
      height 40px;
      text-align center;
      line-height 40px;
  .parcel 
    height 540px;
    overflow hidden;

    .add 
      // width 2000px
      .module 
        .bscroll
          height 540px
          overflow hidden
        
        
      
    
  

</style>
