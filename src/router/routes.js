import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import ItemCard from '../pages/Search/ItemCard/ItemCard.vue'
export default [
  {
    path:'/home',//首页
    component:Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/whole',//全部
    component:Whole,
    meta: {
      isShowFooter: true
    },
    children:[
      
    ]
  },
  {
    path:'/discover',//发现
    component:Discover,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/wallet',//票夹
    component:Wallet,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/profile',//我的
    component:Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/login',//登录
    component:Login,
    meta: {
      isShowFooter: false
    },
  }, 
  {
    path:'/search',//搜索
    component:Search,
    meta: {
      isShowFooter: false
    },
    children:[
      {
        path: 'itemCard',
        component: ItemCard
      },
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]