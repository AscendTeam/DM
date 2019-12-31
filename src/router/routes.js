import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'
import Ticket from '../pages/ticket/ticket.vue'

import Project from '../component/project/project'


export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',//首页
    component: Home
  },
  {
    path: '/whole',//全部
    component: Whole,
    children: [
      {
        path: "",
        redirect: 'coffee'
      },
      {
        path: 'coffee',
        component: WholeCoffee
      },
      {
        path: 'brand',
        component: WholeBrand
      }
    ]
  },
  {
    path: '/discover',//发现
    component: Discover
  },
  {
    path: '/wallet',//票夹
    component: Wallet

  },
  {
    path: '/profile',//我的
    component: Profile

  },
  {
    path:'/ticket',//跳转抢票站页面
    component:Ticket
  },
  {
    // Project页面 临时放置
    path: '/project',
    component: Project
  },
]

