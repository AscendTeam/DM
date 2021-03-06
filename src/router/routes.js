import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'

import WholeShow from '../pages/whole/show/show'
import WholeCoffee from '../pages/whole/coffee/coffee'
import WorksDetail from '../component/worksDetail/worksDetail'
import WholeBrand from '../pages/whole/brand/brand'


import Discover from '../pages/discover/discover'
import Details from '../pages/discover/details';
import Wallet from '../pages/wallet/wallet.vue'
// import Profile from '../pages/profile/profile.vue'
import User from "../pages/user/user.vue"
import Personal from "../pages/personal/personal.vue"
import Information from "../pages/information/information.vue"
import MyOrder from "../pages/myOrder/myOrder.vue"
import All from "../pages/myOrder/all.vue"
import Pay from "../pages/myOrder/pay.vue"
import Branch from "../pages/myOrder/branch.vue"
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
      },
      {
        path: 'show',
        component: WholeShow,
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
    path:'/details',
    component:Details,
  },
  {
    path: '/wallet',//票夹
    component: Wallet,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',//我的
    component:Personal,
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
    path:'/user',
    component:User
  },

  // {
  //   path:'/personal',//用户界面
  //   component:Personal,
  //   children:[
  //
  //   ]
  // },
  {
    path:'/information',//个人详情
    component:Information
  },
  {
    path:'/myorder',//订单
    component:MyOrder,
    children:[
      {
        path:"all",
        component:All
      },
      {
        path:'branch',
        component:Branch
      },
      {
        path:"pay",
        component:Pay
      },
      {
        path:'',
        redirect:'all'
      }

    ]
  },
  {
    path:'',
    redirect:'/personal'
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

