import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import store from './vuex/store'
import Star from './component/Star/Star'
import vueScroller from "vue-scroller"
import * as API from './api'
import './validate'

Vue.use(vueScroller)
Vue.component('Star', Star)
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
