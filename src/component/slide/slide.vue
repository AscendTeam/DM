<template>
  <div class="slideComponent"  ref="bscroll">
    <div class="bscroll"  >
      <StarCard :starItem="item" v-for="(item,index) in starList" :key="index"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import StarCard from '../starCard/starCard'
import BScroll from "better-scroll";
  export default {
    props:["starList"],
    components:{
      StarCard
    },
    mounted(){
      console.log(this.starList.length);
      
      if (this.starList.length) {
        new BScroll(this.$refs.bscroll,{scrollY:true,bounce:false})
      }
    },
    watch:{
      starList(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.bscroll,{scrollY:true,bounce:false})
        })
      }

    }
  }
</script>

<style lang="stylus" scoped>
  .slideComponent
    height calc(100vh - 130px)
    overflow hidden
</style>
