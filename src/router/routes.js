import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'

import Project from '../component/project/project'


export default [
  {
    path:'/home',//首页
    component:Home

  },
  {
    path:'/whole',//全部
    component:Whole,
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

  {
    // Project页面 临时放置
    path:'/project',
    component:Project
  },
]
