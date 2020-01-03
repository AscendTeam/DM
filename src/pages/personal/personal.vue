<template>
    <div class="hBigScroll" ref="hBigScroll">
        <div>       
            <div class="hTop">
                <div class="hRef">
                    <div class="hRef1">
                        <router-link to=""><i class="iconfont iconC"></i></router-link>
                    </div>
                    <div class="hRef1">
                        <router-link to=""><i class="iconfont iconxinxi"></i></router-link>
                    </div>    
                    
                </div>
                <div class="hMain">
                    <img class="hAvater" src="http://perico.damai.cn/userheadphotos/763881/152776325.jpg" alt="头像">
                    <div class="hName">
                        <p>麦子1iQpA</p>
                        <div class="hUserPages" @click="hChange()">查看个人主页<i class="iconfont iconjiantou"></i></div>
                    </div>
                </div>
                <div class="hUserData">  
                    <div class="hPerform">
                        <p>0</p>
                        <p>想看的演出</p>
                    </div>
                    <div class="hPerform">
                        <p>0</p>
                        <p>关注</p>
                    </div>
                    <div class="hPerform">
                        <p>0</p>
                        <p>我的评价</p>
                    </div>
                    <div class="hPerform">
                        <p>0</p>
                        <p>优惠券</p>
                    </div>
                </div>
            </div>
            <div class="hMyOrder">
                <div class="hVip">
                    <div>
                        <p>VIP会员</p>
                        <p>含760元演出红包</p>
                    </div>
                    <button>限时特惠</button>
                </div>
                <div class="hOrder">
                    <div class="hMyOrder" @click="hChange2">
                        <span><i class="iconfont iconsingle"></i></span>
                        <span>我的订单</span>
                        <span><i class="iconfont iconjiantou"></i></span>                  
                    </div>
                    <div class="hOrderIcon">
                        <div>
                            <i class="iconfont iconren2"></i>
                            <p>观演人</p>
                        </div>
                        <div>
                            <i class="iconfont icondizhi1"></i>
                            <p>收货地址</p>
                        </div>
                        <div>
                            <i class="iconfont icondianziqianbao"></i>
                            <p>电子钱包</p>
                        </div>
                        <div>
                            <i class="iconfont iconkefu"></i>
                            <p>在线客服</p>
                        </div>
                    </div>
                </div>
                <div class="hOther">
                    <div>
                        <i class="iconfont iconpiao"></i>
                        <p>0元票</p>
                    </div>
                    <div>
                        <i class="iconfont iconzhekou-"></i>
                        <p>折扣票</p>
                    </div>
                    <div>
                        <i class="iconfont iconaixin"></i>
                        <p>公益三小时</p>
                    </div>
                    <div>
                        <i class="iconfont iconhuiyuan"></i>
                        <p>联名会员</p>
                    </div>
                    <div>
                        <i class="iconfont iconpinglun"></i>
                        <p>评论赚年终</p>
                    </div>
                    <div>
                        <i class="iconfont icon-dianyingzhoubian-"></i>
                        <p>明星周边</p>
                    </div>
                    <div>
                        <i class="iconfont iconmojing"></i>
                        <p>观演团</p>
                    </div>
                    
                </div>
            </div>
            
            <button class="hQuite" @click="quiteLogin">退出登录</button>        
        </div> 
    </div>
   
</template>
<script>
    import BScroll from "better-scroll"
export default {
    
    methods:{
        hChange(){
            this.$router.push('/information')
        },
        hChange2(){
            this.$router.push("/myorder/all")
        },
        quiteLogin(){
            console.log(1)
        },
        
        hBigScroll(){
            this.bigScroll = new BScroll(this.$refs.hBigScroll,{
                click:true,
                probeType:1
                
            })
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.hBigScroll()
        })       
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
 .hBigScroll
    height calc(100vh)
    .hTop
        width 100%
        height 230px
        background green
        .hRef
            position fixed
            display flex
            justify-content right 
            color #ffffff
            top 30px 
            right 5px
            width 80px            
            .iconfont 
                display inline               
                color #ffffff
                // background white
                // width 30px
                // height 30px
                margin 0 10px 
                font-size 20px
                font-weight 400
        .hMain            
        //     width 100%
            height 80px
            padding 80px 10px 0
            display flex

            .hAvater
                margin 0 10px
                width  50px
                height 50px
                border-radius 25px
                display inline-block
                align-items center
            .hName
                width 200px
                height 50px
                p
                    font-size 24px
                    color #ffffff 
                    margin-bottom 10px  
                .hUserPages
                    font-size 12px
                    color #AFE8DE
        .hUserData
            height 52px
            padding 10px 20px
            display flex
            justify-content space-around 
            .hPerform
                display flex
                flex-direction column
                align-items center
                p:nth-child(1)
                    font-size 14px
                    color #ffffff
                p:nth-child(2)
                    margin-top 6px 
                    font-size 12px
                    color #AFE8DE
    .hMyOrder
        padding 0 20px
        margin-bottom 20px
        .hVip
            width 100%
            height 37px
            padding 13px 0px
            border-radius 10px
            background #0F1225
            position relative
            margin-bottom 20px
            div
                margin-left   50px
                width 190px
                display inline-block
                
                p
                    line-height 18px
                    font-size 16px
                    color #D2AC86

            button 
                position absolute
                top 16px
                display inline-block
                height 28px
                width 72px
                border-radius 14px
                color #0F1225
                background #D2AC86
        .hOrder
            height 140px
            padding 0 20px
            border 2px solid #F2F2F2
            box-shadow 1 1 5px #F2F2F2
            border-radius 10px
            margin-bottom 20px
            .hMyOrder
                width 100%
                padding 0
                line-height 55px
                border-bottom 1px solid #eeeeee
                font-size 18px
                font-weight 900
                position relative
                span:nth-child(1)
                    margin-right 10px
                span:nth-child(3)
                    position absolute
                    right 0px
            .hOrderIcon
                display flex
                justify-content space-between
                div
                    display flex
                    flex-direction column
                    align-items center
                    justify-content space-around
                    height 50px
                    padding 0 0 18px 0
                    i
                        width 20px
                        height 20px
                        color pink  
                        font-size 24px
                    p
                       font-size 14px 
                       marin-top 13px
        .hOther
            // height 140px
            padding 20px 0 0 0
            border 2px solid #F2F2F2
            box-shadow 1 1 5px #F2F2F2
            border-radius 10px
            margin-bottom 20px
            display flex
            justify-content space-between
            align-items center
            flex-wrap:wrap
            &:after{
                content:"";
                width:25%
            }
            div 
                height 70px
                width 25%
                display flex
                flex-direction column
                align-items center
                justify-content space-space-around
                i 
                    font-size 30px
                    color pink
    .hQuite
        width 100%
        height 60px
        background green
        font-size 20px
        font-weight 600
        color #ffffff        
                    

            
        

</style>