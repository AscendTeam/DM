import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import WholeCoffee from '../pages/whole/coffee/coffee'
import WorksDetail from '../component/worksDetail/worksDetail'
import WholeBrand from '../pages/whole/brand/brand'

import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'
import Ticket from '../pages/ticket/ticket.vue'

import Project from '../component/project/project'


import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import ItemCard from '../pages/Search/ItemCard/ItemCard.vue'
export default [
  {
    path: '',
    redirect: '/home',
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/home',//首页
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/whole',//全部
    component: Whole,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: "",
        redirect: 'coffee',
        meta: {
          isShowFooter: true
        },
      },
      {
        path: 'coffee',
        component: WholeCoffee,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: 'brand',
        component: WholeBrand,
        meta: {
          isShowFooter: true
        },
      }
    ]
  },
  {
    path: '/discover',//发现
    component: Discover,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/wallet',//票夹
    component: Wallet,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',//我的
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/ticket',//跳转抢票站页面
    component:Ticket,
    meta: {
      isShowFooter: true
    }
  },
  {
    // Project页面
    path: '/project/:index',
    component: Project,
  },
  {
    // 大咖作品详情页面
    path: '/worksdetail/:index',
    component: WorksDetail
  },

  {
    path:'/login',//跳转抢票站页面
    component:Login
  },
  {
    path:'/search',//跳转抢票站页面
    component:Search,
    children: [
      {
        path: 'itemcard',
        component: ItemCard
      },
    ]
  }
]

