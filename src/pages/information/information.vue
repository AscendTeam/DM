<template>
    <div>
        <div class="hNom">
            <div class="hForwords">
                <span @click="hBack"><i class="iconfont iconarrow-lift"></i></span>
                <button>发动态</button>
                <span><i class="iconfont iconfenxiang"></i></span>
            </div>
            <div class="hAvater">
                <div>
                    <img src=" http://perico.damai.cn/userheadphotos/763881/152776325.jpg" alt="tx">
                    <p>麦子1IQpA<i></i></p>
                </div>
                <div>
                    <p class="hSignature">三冬暖春不寒，暂无简介涨粉慢</p>
                    <p><span>关注<i>0</i></span><span>|</span><span>粉丝<i>0</i></span></p>
                </div>               
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        hBack(){
            this.$router.back()
        }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .hNom
        height 320px
        background #4C276A
        .hForwords
            height 28px
            padding 30px 20px 0
            line-height 28px
            display flex
            align-items center
            span:nth-child(1)
                i
                    font-size 28px
                    color white
            button
                height 28px
                width 60px 
                border-radius 14px
                background #957EA8
                color white
                margin-left 200px
                border 0
            span:nth-child(3)
                i
                    margin-left 20px
                    font-size 24px
                    color white
        .hAvater
            height 260px 
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            div:nth-child(1)
                img
                    width 100px
                    height 100px
                    border-radius 50px
                p
                    color white
                    font-size 22px
                    font-weight 600
                    margin-top 12px
            div:nth-child(2)
                p:nth-child(1)
                    font-size  16px
                    color #ffffff
                p:nth-child(2)
                    margin-top  18px 
                    font-size 16px
                    color #959396
                    display flex 
                    justify-content space-around         





</style>