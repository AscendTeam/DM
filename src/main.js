import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import store from './vuex/store'
import vueScroller from "vue-scroller"
Vue.use(vueScroller)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
