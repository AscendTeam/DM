import Home from '../pages/home/home.vue'
import Whole from '../pages/whole/whole.vue'
import Coffee from '../pages/whole/coffee/coffee.vue'

import Discover from '../pages/discover/discover.vue'
import Wallet from '../pages/wallet/wallet.vue'
import Profile from '../pages/profile/profile.vue'
import User from "../pages/user/user.vue"
import Personal from "../pages/personal/personal.vue"
import Information from "../pages/information/information.vue"
import MyOrder from "../pages/myOrder/myOrder.vue"
import All from "../pages/myOrder/all.vue"
import Pay from "../pages/myOrder/pay.vue"
import Branch from "../pages/myOrder/branch.vue"
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
  {
    path:'/user',
    component:User
  },
  
  {
    path:'/personal',//用户界面
    component:Personal,
    children:[
     
    ]    
  },
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
  
]