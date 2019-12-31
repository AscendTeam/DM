<template>
  <div class="y_brand_container">
    <div class="y_brand_project_list_container">
      <ul>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
        <li class="y_brand_project_item">
          <ScrollX></ScrollX>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
  // import BScroll from 'better-scroll'
  import ScrollX from '../../../component/scrollX/scrollX'
  export default {
    components:{
      ScrollX,
    },
    // mounted() {
    //   let scroll = new BScroll('.wrapper',{
    //     scrollX: true,
    //     click: true
    //   })
    //
    // }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .y_brand_container
    .y_brand_project_list_container
      overflow hidden
</style>
