// import { 
  
//   } from "../../api"
import {MODARRENTION,MODSTARLIST} from '../mutation-types'

  export default{
    state:{
      sartObj:{},//用户关注信息
      starList:[]
      // token:localStorage.getItem('token_key')||'',
    },
    mutations:{
      [MODARRENTION](state,{starItem,flag}){
        if (state.sartObj[starItem.star_id]!=="undefined") {
          state.sartObj[starItem.star_id]=flag
        }else{
          Vue.set(sartObj,starItem.star_id,flag)
        }
      },
      [MODSTARLIST](state,{data}){
        state.starList=data
      }

    },
    actions:{
      
       // 关注
      modAttention({commit,state},{starItem,flag}){
        if (starItem.star_id) {
          commit(MODARRENTION,{starItem,flag})
        }
      },
      // 存储数据
      modStarList({commit,state},data){
        commit(MODSTARLIST,{data})
      }
    },
    getters:{

    }
  }