let path = require('path')
const px2rem = require('postcss-px2rem')   
   function resolve (dir) {
     return path.join(__dirname, dir)
   }


// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
module.exports = {
  //runtimeCompiler: true,

  //去关闭eslint规则   
  lintOnSave: false,  

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
 },

  configureWebpack: {// 当前配置需要写入该选项中
   resolve: {
     extensions: ['.js', '.vue', '.json'],
     alias: {
       'vue$': 'vue/dist/vue.esm.js', 
       '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
       'components': resolve('src/components'),
     }
   }
  },

  devServer: {   //代理配置
   open: true,
   proxy: {
     // 处理以/api开头路径的请求
     '/api': {
       target: 'http://localhost:4000', // 转发的目标地址
       pathRewrite: {
         '^/api' : ''  // 转发请求时去除路径前面的/api
       },
       changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
     },
   }
 },
}