<template>
  <div class="showContainer">
      
    <div class="wrapper" ref="wrap">
      <ul class="content" >
        <li @click="showList(index)" class="listItem " :class="{active:navIndex ===index}" v-for="(item, index) in navList" :key="index">{{item}}</li>
      </ul>
    </div>
    <!-- <div class="parcel swiper-container" >
      <div class=" add swiper-wrapper">
        <div class="module swiper-slide" v-for="(list,index) in navList" :key="index" >
          <div class="recommend" v-if="index===0">
            <StarCard :starItem="item" v-for="(item,index) in starList" :key="index" />
          </div>
          <div class="recommend"  v-if="index!==0">
            <Details :starItem="starList[index]"/>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
    <Whole/>
    <!-- <div class="parcel swiper-container">
      <div class="add swiper-wrapper">
        <div class="module swiper-slide" v-for="(list, index) in navList" :key="index">
          <div class="all" v-if="index===0">
            <Whole :starItem="item" v-for="(item,index) in starList" :key="index" />
          </div>
          <div class="all"  v-if="index!==0">
            <Party :starItem="starList[index]"/>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import Whole from '@/component/whole/whole'
  import Party from '@/component/party/party'
  import BScroll from 'better-scroll'
  
  import Swiper from 'swiper'
  import  'swiper/css/swiper.min.css'
  
 
  export default {
    components:{
      Whole,
      Party
      
    },
    
    data() {
      return {
        navIndex:0,
         navList:[
          '全部',
          '折扣',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
          '演唱会',
        ],
        starList:[]
      }
    },
    // async mounted(){
      
      
    //   let data = await reqStar()
    //   if (data.code==0) {
    //     this.starList = data.data
    //   }
    // },
   
      mounted() {
        this.$nextTick(()=>{
          new BScroll(this.$refs.wrap,{scrollX:true,bounce:false,click:true})
          
        })
      },
      methods: {
        showList(index){
          this.navIndex = index

        }
      }
  }

      
    // },
    //  watch: {
    //   starList(){
    //     this.$nextTick(()=>{
    //       // new BScroll(this.$refs.contentScroll,{scrollX:true,bounce:false})
    //       new Swiper('.swiper-container',{
    //         pagination: {
    //           // el: '.swiper-pagination',
    //           stopPropergation:false
    //         }
    //       })
    //     })
    //   }
    // }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .showContainer
          
            
    background pink
    .wrapper
      overflow hidden
      width 375px
      position absolute
      left 0
      top 40px
      white-space nowrap
      .content
        // width 100%
        background pink	
        
        display inline-block
        .listItem
          line-height 40px
          height 40px
          display inline-block
          font-size 16px
          margin-left 20px
          text-align center
          &.active
            color red
            font-size 16px
    
    <div>
        show
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
