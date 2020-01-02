// import { 
  
//   } from "../../api"
import {MODARRENTION} from '../mutation-types'

  export default{
    state:{
      sartObj:{},//用户关注信息
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

    },
    actions:{
      
       // 关注
      modAttention({commit,state},{starItem,flag}){
        if (starItem.star_id) {
          commit(MODARRENTION,{starItem,flag})
        }
      }
    },
    getters:{

    }
  }