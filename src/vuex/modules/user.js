import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_TOKEN,
  RESET_USER,
} from '../mutation-types'

import {
  reqAutoLogin,
  
} from '@/api'

export default {
  state:{
    user:{}, //用户信息
    token:localStorage.getItem('token_key') || '',//当前用户登录的标记
  },
  mutations:{
    [RECEIVE_TOKEN] (state,{token}){
      state.token = token
    },
    [RECEIVE_USER] (state,{user}){
      state.user =  user
    },
    [RESET_USER] (state){
      state.user =  {}
    },
    [RESET_TOKEN] (state){
      state.token =  ''
    },
  },
  actions:{

     /* 
  保存用户信息
  */
 saveUser({commit},user){
  const token = user.token
 //把token保存到local
 localStorage.setItem('token_key',token)

 delete user.token

  //将user存入state
  commit(RECEIVE_USER,{user})
  //将token存入state
  commit(RECEIVE_TOKEN,{token})
},

/* 自动登录 */
async autoLogin({commit,state}){
 if(state.token && !state.user._id){
     const result = await reqAutoLogin()
     // 发送自动登录请求
     if(result.code === 0){
       const user = result.data
       commit(RECEIVE_USER,{user})
     }
 }
},


   logout ({commit}){
     localStorage.removeItem('token_key')
     commit(RESET_USER)
     commit(RESET_TOKEN)
   },

  },
  getter:{}
}