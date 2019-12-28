import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import Coffee from '../pages/whole/coffee/coffee.vue'

import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'
export default [
  {
    path:'/home',//首页
    component:Home
    
  },
  {
    path:'/whole',//全部
    component:Whole,
    children:[
      {
        path:'/whole/coffee',//发现
        component:Coffee
      },
    ]
  },
  {
    path:'/discover',//发现
    component:Discover
    
  },
  {
    path:'/wallet',//票夹
    component:Wallet
    
  },
  {
    path:'/profile',//我的
    component:Profile
    
  },
]