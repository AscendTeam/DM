const px2rem = require("postcss-px2rem")
const path = require("path")
module.exports = {
    lintOnSave:false,
    css:{
            loaderOptions: {
                postcss: {
                  plugins: [
                    px2rem({
                      remUnit: 37.5  // 设计稿等分后的rem值  180/3
                    })
                  ]
                }
              
        }
    },
    configureWebpack:{
        resolve:{
            extensions:[".js",".vue",".json"],
            alias:{
                '@':path.resolve(__dirname,"src"),

            }
        }
    }
}