<template>
  <div class="y_brand_container">
    <div class="y_brand_project_list_container">
      <ul>
        <li class="y_brand_project_item">
          <BrandItem v-if="brandData" :data="brandData" ></BrandItem>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
  import BrandItem from './brandItem/brandItem'

  import {reqBrand} from '../../../api'
  export default {
    components:{
      BrandItem
    },
    data(){
      return{
        brandData:{}
      }
    },
    methods:{
      getData(){
        reqBrand().then(response=>{
          // console.log(response);
          this.brandData = response.data;
        }, err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.getData();
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .y_brand_container
    .y_brand_project_list_container
      overflow hidden
</style>
