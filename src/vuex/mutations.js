/*
包含n个用于直接更新状态数据的方法的对象
方法不可以包含异步和逻辑处理代码

*/
import {
  RECEIVE_DISCOVER,
  RECEIVE_BUZZ,
  FOOT_SHOW
} from "./mutation-types.js"

export default {
  // xxx (state) { // state是总的state

  // }
  [RECEIVE_DISCOVER](state, info) {
    state.discover = info
  },
  [FOOT_SHOW](state) {
    state.footShow = !state.footShow
  },
  [RECEIVE_BUZZ](state, info) {
    state.buzz = info
  }
}
