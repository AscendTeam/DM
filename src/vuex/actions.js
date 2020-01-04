/*
包含n个用于间接更新状态数据的方法的对象
方法可以包含异步和逻辑处理代码
*/
import { reqDiscover,reqBuzz } from "../api";
import { RECEIVE_DISCOVER,RECEIVE_BUZZ } from "./mutation-types";
export default {
  //异步获取作品列表
  async getDiscover({commit}) {
    // 发异步请求
    const result = await reqDiscover()
    // 请求成功后, 提交给mutation

    if(result.code===0) {
      const info = result.data
      // console.log(info);
      // 内部同步调用mutation更新状态数据
      commit(RECEIVE_DISCOVER, info)
      // 在数据更新之后, 调用回调函数
      typeof callback === 'function' && callback()
    }
  },
  //异步获取作品列表
  async getBuzz({commit}) {
    // 发异步请求
    const result = await reqBuzz()
    // 请求成功后, 提交给mutation
    if(result.code===0) {
      const info = result.data
      console.log(info);
      // 内部同步调用mutation更新状态数据
      commit(RECEIVE_BUZZ, info)
      // 在数据更新之后, 调用回调函数
      typeof callback === 'function' && callback()
    }
  },

}
