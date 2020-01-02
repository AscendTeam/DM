<template>
  <div>
    <button class="concern" @click.stop="isAtten">{{isShow?"已关注":"关注"}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["starItem"],
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      isAtten(){
        console.log(this.starItem);
        let isShow = !this.isShow
        this.isShow = isShow
        this.$store.dispatch("modAttention",{starItem:this.starItem,flag:isShow})
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .concern
    outline: none
    height 24px
    width 50px
    font-size 12px
    border-radius 12px
    color #fff
    background-color #FF1268
    border none 

</style>
