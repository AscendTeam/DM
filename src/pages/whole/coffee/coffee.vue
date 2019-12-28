<template>
  <div class="C-coffeeComponent">
    <ul class="C-coffeeList" ref="list">
      <li class="C-Item">
        推荐
      </li>
      <li class="C-Item">
        我关注的
      </li>
      <li class="C-Item" v-for="(item,index) in listArr" :key="index">
        {{item}}
      </li>
    </ul>
    <div class="module">
      <StarCard v-if="isShow"/>
      <Details v-if="isShow!==true"/>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  // import BScroll from 'better-scroll'
  import StarCard from '../../../component/starCard/starCard'
  import Details from '../../../component/details/details'

  export default {
    components:{
      StarCard,
      Details
    },
    data(){
      return{
        listArr:[
          '林嘉佑',
          '陈粒',
          '周杰伦',
          '林俊杰',
          '张杰',
          '蔡依林',
          '梁静茹',
          '张韵涵',
          '任贤齐',
          '李建',
          '周深',
          '伍佰',
          '汪苏泷',
          '陈绮贞',
          '韦礼安'
        ],
        isShow:false,//true为推荐 false为其他
      }
    },
    mounted(){

    }
  }
</script>

<style lang="stylus" scoped>
  .C-coffeeComponent
    width 100%
    overflow-x hidden
    .C-coffeeList
      display flex
      width 820px
      
      .C-Item
        display block
        width 60px
        height 40px
        text-align center
        line-height 40px
</style>
