let Koa = require('koa');
let KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();

router.get('/', (ctx, next) => {
	ctx.body = '123'
})
// 详情页面评论
let indexDatas = require('./datas/circle-jay.json')
router.get('/getCircle', (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = indexDatas;
});

// C大咖
let starDatas = require('./datas/allstarData.json')
router.get('/getStar', (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = starDatas;
});

// Y品牌详情
let detail = require('./datas/detail.json')
router.get('/getdetail', (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*')
	ctx.body = detail;
});


// let categoryDatas = require('./datas/categoryDatas.json')
// router.get('/getCategoryDatas', (ctx, next) => {
// 	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
// 	console.log('请求到达')
// 	ctx.set('Access-Control-Allow-Origin', '*')
// 	ctx.body = categoryDatas;
// });


// let cateList = require('./datas/cateList.json')
// router.get('/getCateList', (ctx, next) => {
// 	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
// 	ctx.set('Access-Control-Allow-Origin', '*')
// 	ctx.body = cateList;
// });




app
	.use(router.routes())
	.use(router.allowedMethods())
	
	
app.listen('3000', () => {
	console.log('服务器启动');
	console.log('服务器地址： http://localhost:3000')
})