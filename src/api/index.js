/*
  接口请求函数的模块
*/
import ajax from './ajax'
//2、获取***分类(列表/数据)
// export const req*** = ()=>ajax('/****')
//获取明星评论
  // export const reqCircle = ()=>ajax('http://localhost:3000/getCircle')
  export const reqCircle = ()=>ajax('/getcircle')
//获取明星评论
  // export const reqStar = ()=>ajax('http://localhost:3000/getStar')
  export const reqStar = ()=>ajax('/getstar')
// 获取brand数据
//export const reqBrand = ()=>ajax('/circle/dys')
export const reqBrand = ()=>ajax('/circle/dys')
//获取token
export const reqPwdLogin = ({name, info}) => ajax.post('/login_pwd', {name,info})
//自动登录
export const reqAutoLogin = () => ajax.get('/auto_login')
