import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './validate'
import MintUI from 'mint-ui';
Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  render: h => h(App),
  router
  
}).$mount('#app')
