/* 
  对axio进行2次封装一个能发ajax请求的函数
*/

//引入axios
import axios from 'axios'
// import qs from 'qs'
// import { Indicator, Toast, MessageBox } from 'mint-ui'
// import store from '../store'
// import router from '../router'

const instance = axios.create({
  baseURL:'/api',// 让代理服务器转发请求4000
  timeout:20000, //配置请求超时的时间
})
//添加请求拦截器
instance.interceptors.request.use((config)=>{
  //对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  // const data=config.data
  // if (data instanceof Object) {
  //   config.data=qs.stringify(data)
  // }
  // 获取token
  // const token = store.state.user.token
  //通过请求头携带token数据
  // if (token) {//有进
    //在请求头添加token
    // config.headers.authorization=token
  // }else{//无token
    //没有token但请求需要token 根据自己设计的唯一标识确定
    // const unique = config.headers.unique
    // if (unique) {
      // throw new Error('请登录...')
    // }
  // }
  return config
})

//响应拦截器
instance.interceptors.response.use(
  reqponse=>{
    
    //异步请求成功的数据不是response, 而是response.data
    return reqponse.data
  },
  error=>{
    //首先错误分三种情况 
    // 一 没有发送请求
    // 二 发送请求了,正常出错了
    // 三  发送请求了 通肯过期了 返回401

    //判断有没有发请求
/*     const reqponse=error.reqponse
    const path = router.currentRoute.path
    if (!reqponse) {
      //没有发请求
      //判断是否在登录页面
      if (path!=='/login') {
        router.replace('/login')
        // Toast(error.message)
        alert(error.message)
      }
    }else{//发请求了
      const status=error.reqponse.status
      if (status===401) {
        //判断是否在登录页面
      if (path!=='/login') {
        //清除token
        store.dispatch('logot')
        router.replace('/login')
        // Toast(error.reqponse.data.message)
        // alert(error.message)
      }
      }else if(status==='404'){
        MessageBox('提示','访问资源不存在')
      }else{
        //1. 统一处理请求异常
        alert('请求出错'+error.message)
      }
    } */
    alert('请求出错'+error.message)
    return new Promise(()=>{})
  }
  )
export default instance