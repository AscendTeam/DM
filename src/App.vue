<template>
  <div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
    </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './component/footerGuide/footerGuide'
  export default {
    async mounted(){
      this.$store.dispatch('autoLogin')
    },

    components:{
      FooterGuide,
    },
    data() {
      return {
        isProject: false
      }
    },
    mounted() {
      this.isProject = (this.$route.path.indexOf('/project/')===0)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
<<<<<<< HEAD
.div
  width 375px
  height 400px
  background red
 
</style>

=======
>>>>>>> 983f7df05e7ea16c5ea85badedc7fc218619345d

</style>