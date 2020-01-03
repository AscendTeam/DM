<template>
    <div>
        <div class="hOrderTop">
            <span @click="hBack()"><i class="iconfont iconarrow-lift"></i></span>
            <span>我的订单</span>
        </div>
        <div class="hOrderItems">
            <!-- <router-link to='/myOrder/all' :class="{opt:this.$route.path==='/myorder/all'}" replace>全部</router-link>
            <router-link to='/myOrder/pay' replace>待支付</router-link>
            <router-link to='/myOrder/branch' replace>待收货</router-link>               -->
            <div class="hAll" :class="{haveI:pagesIndex*1 === 0}" @click='getIndex(0)'>全部</div>
            <div class="hWaitPay" :class="{haveI:pagesIndex*1 === 1}" @click='getIndex(1)'>待支付</div>
            <div class="hBrach" :class="{haveI:pagesIndex*1 === 2}" @click='getIndex(2)'>待收货</div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">全部</div>
                <div class="swiper-slide">带支付</div>
                <div class="swiper-slide">待收货</div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/css/swiper.css"
    
export default {
    data(){
        return{
            pagesIndex:0

        }
    },
    methods:{
        getIndex(num){
            this.pagesIndex = num
            this.swiper.slideTo(num,0)
        },
        hBack(){
            this.$router.back()
        },
        initSwiter(){
            this.swiper = new Swiper('.swiper-container',{
                direction:'horizontal',
                on:{
                slideChangeTransitionStart:()=>{
                    this.pagesIndex = this.swiper.activeIndex
                    console.log(this.pagesIndex)
                },
                slideChangeTransitionEnd:()=>{
                    this.pagesIndex = this.swiper.activeIndex
                    console.log(this.pagesIndex)
                }
            }    
            })
            
        }
    },
    mounted(){
        console.log(this.$route)
        this.initSwiter()
        this.pagesIndex = localStorage.getItem('imageIndex')||0
        console.log(this.pagesIndex)
        
    },
    watch:{
        pagesIndex(value){
            localStorage.setItem('imageIndex',value)
        }
    }   
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .swiper-container
        width calc(100vh)
        height calc(100vh - 128px )     
    .hOrderTop  
        height 70px
        padding 30px 0 0 0
        span:nth-child(1)
            .iconfont
                font-size 25px
                margin-left 16px
                font-weight 400
        span:nth-child(2)
            font-size 20px
            font-weight 700
            margin-left 110px 
    .hOrderItems
            padding 0 0 0 0
            display flex
            justify-content space-around
            align-items center
            font-size 16px
            color rgb(77,85,93)
           
            // .opt
            //     color #02a774
            //     &::after
            //         content '',
            //         position absolute
            //         left 50%
            //         bottom -5px
            //         width 40px
            //         height 8px
            //         transform translateX(-50%)
            //         background #02a774  
            .haveI
                position relative
                color #02a774
                &::after
                    content ''
                    position absolute
                    left 50%
                    bottom -5px
                    width 40px
                    height 8px
                    transform translateX(-50%)
                    background #02a774 

            // a
            //     display block
            //     position relative
            //     &.router-link-active
            //         color #02a774
            //         &::after
            //             content ''
            //             position absolute
            //             left 50%
            //             bottom -5px
            //             width 40px
            //             height 8px
            //             transform translateX(-50%)
            //             background #02a774  


            



</style>