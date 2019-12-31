<template>
  <div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '@/component/footerGuide/footerGuide'
  export default {
    components:{
      FooterGuide,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>


