<template>
   <div>

    <router-view></router-view>
    <!-- <FooterGuide/> -->
    
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './component/footerGuide/footerGuide'
  // import user from "./"
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.div
  width 375px
  height 400px
  background red
 
</style>


