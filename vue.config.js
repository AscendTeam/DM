const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
module.exports={
  css: { // 添加postcss配置
  loaderOptions: {
    postcss: {
      plugins: [
        postcss
      ]
    }
  }
},
  // no-console:false,
  lintOnSave: false,
  devServer:{
    open:true,
    proxy:{
      '/api':{
        target:'http://localhost:3000',//转发目标地址
        pathRewrite:{
          '^/api':''//转发请求时去除路径前面的/api
        },
        changeOrigin:true,//支持跨域,如果协议,主机不相同,必须加
      }
    }
  },
}
