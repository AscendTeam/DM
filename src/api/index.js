/* 
  接口请求函数的模块
*/
//2、获取***分类(列表/数据)
export const reqPwdLogin = ({name,info})=>ajax.post('/login_pwd',{name,info})
// export const reqAutoLogin = () => ajax.get('/auto_login')\
export const reqShops = ()=>ajax('/login_pwd')