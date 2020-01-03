<template>
  <div class="ticketContainer" ref="wrap">
    <header>
      <span class="s1">正在热抢</span>
      <span class="s2">不错过每一个热门演出qaq</span>
    </header>
    <div class="wrapper">
      <div class="listContainer">
        <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
        <div class="jay">
          <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
          <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
          <span class="s3">￥380-1580</span>
        </div>
      </div>
      <div class="listContainer">
          <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
          <div class="jay">
            <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
            <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
            <span class="s3">￥380-1580</span>
          </div>
      </div>
      <div class="listContainer">
        <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
        <div class="jay">
          <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
          <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
          <span class="s3">￥380-1580</span>
        </div>
      </div>
       <div class="listContainer">
        <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
        <div class="jay">
          <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
          <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
          <span class="s3">￥380-1580</span>
        </div>
      </div>
       <div class="listContainer">
        <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
        <div class="jay">
          <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
          <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
          <span class="s3">￥380-1580</span>
        </div>
      </div>
       <div class="listContainer">
        <img src="//img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01YaY2kr2GdSDlEP8TE_!!2251059038.jpg_q60.jpg_.webp" alt="">
        <div class="jay">
          <span class="s1">杰伦·2020年新年畅响 巨星演唱会</span>
          <span class="s2">南昌 / 2020.01.03 周五 19:30 / 南昌国际体育中心体育场</span>
          <span class="s3">￥380-1580</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    
    watch: {
      ticket(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.wrap,{})
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ticketContainer
    height 300px
    header 
      position fixed
      background pink
      width 400px
      height 40px
      padding-left 10px
      z-index 99
      span 
        line-height 40px
        vertical-align middle
      .s1
        width 200px
        height 40px
        font-weight bold
        font-size 20px
      .s2
        font-size 14px
        padding  0 5px
    
     
    .wrapper
      position absolute
      top 40px
      left 0
      .listContainer
        width 100%
        display flex
        img 
          border-radius 6px
          width 120px
          height 120px
          border 1px soild rgba(0,0,0,.06)
        .jay
          padding-left 10px
          .s1
            color #111
            font-size 24px
            font-weight bold
          .s2
            display block
            font-size 14px
            padding 12px 0 0
          .s3
            display block
            color #000
            font-size 20px
            padding-top 10px


</style>
