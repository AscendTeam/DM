<template>
    <div>
        <div class="hHeader">
            <img class="hUserAvater" src="http://perico.damai.cn/userheadphotos/763881/152776325.jpg" alt="头像">
            <span class='hUserName'>用户</span>
        </div>
        <!-- <scroller> -->
            <div class="hUserTool">
                <div class="hUserList"> 
                    <ul>
                        <li class="hUserItem"><div><i class="iconfont iconhuiyuan- tr"></i><span>会员中心</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconsingle tr"></i><span>我的订单</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconyouhuiquan tr"></i><span>优惠券</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconpiaojia24 tr"></i><span>我的票</span><i class='hArrow iconfont iconjiantou'></i></div></li>                 
                    </ul>
                </div>
                <div class="hUserFocus">
                    <ul>
                        <li class="hUserItem"><div><i class="iconfont iconguanzhu tr"></i><span>我的关注</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                    </ul>
                </div>
                <div class="huserTool">
                    <ul>
                        <li class="hUserItem"><div><i class="iconfont icondizhi1 tr"></i><span>收货地址</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconren2 tr"></i><span>常用观演人</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconshimingrenzheng tr"></i><span >实名认证</span><i class="hArrow">未认证<i class=' iconfont iconjiantou'></i></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconfankuiyijian tr"></i><span>意见反馈</span><i class='hArrow iconfont iconjiantou'></i></div></li>
                        <li class="hUserItem"><div><i class="iconfont iconkefu tr"></i><span>客服电话</span><i class='hArrow'>1010-3721</i></div></li>
                    </ul>
                </div>
                <button class="hBack">退出登录</button>
                <div class="hAbout"><span>关于我们</span>|<span>联系我们</span></div>              
             </div>    
        <!-- </scroller> -->
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

    .hHeader
        width 100%
        height 180px
        background #ff1268      
        display flex
        align-items center
        position fixed
        z-index 9
        top 0
        left 0
        .hUserAvater
            width 107px
            height 107px
            margin 0 20px 0 30px
            border-radius 67px 
            border 7px white solid
        .hUserName 
            font-size 30px
            color #ffffff
    .hUserTool
        background-color #F2F3F4 
        width:750px
        overflow hidden
        color #666666 
        margin-top 180px 
        padding-top 20px    
        .hUserList           
            margin 0 0 20px 0           
            li:nth-child(1),li:nth-child(2),li:nth-child(3)           
                div
                    padding 0 24px 0 0
                    border-bottom 1px #CDCDCD solid
        .hUserFocus
            margin 20px 0
            div
                padding 0 24px 0 0
        .huserTool      
            margin 20px 0
            li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4)        
                div
                    padding 0 24px 0 0
                    border-bottom 1px #CDCDCD solid
    .hUserItem
        width 100%
        height 111px
        background #ffffff
        padding-left 24px
        line-height 111px
        font-size 28px 
        .tr
            color #FF87B2
            width 30px
            height 30px
            margin 0 15px 0 0
        div 
            position relative
           
            .hArrow
                position absolute
                right 48px
    .hBack
        width 100%
        height 90px
        text-align center
        color #666666
        font-size 32px
     
        background #ffffff
        border 0PX
    .hAbout
        display flex
        justify-content center
        font 24px #999999
        padding  40px 0

        


</style>