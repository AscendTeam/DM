/*
  接口请求函数的模块
*/
import ajax from './ajax'
//2、获取***分类(列表/数据)
// export const req*** = ()=>ajax('/****')
//获取明星评论
  // export const reqCircle = ()=>ajax('http://localhost:3000/getCircle')
  export const reqCircle = ()=>ajax('http://localhost:3000/getCircle')
//获取明星评论
  // export const reqStar = ()=>ajax('http://localhost:3000/getStar')
  export const reqStar = ()=>ajax('/getStar')
// 获取brand数据
//export const reqBrand = ()=>ajax('/circle/dys')
export const reqBrand = ()=>ajax('http://localhost:3000/circle/dys')

// 详情页面数据
export const reqDetail = () => ajax('http://localhost:3000/getdetail')
