const mongoose = require("mongoose");
const Koa = require('koa');
const app = new Koa();
const {connect,initSchemas} = require("./database/init.js");
const Router = require("koa-router");
let user = require("./appApi/User");
let goods = require("./appApi/goods");
let router = new Router();
const bodyParser = require("koa-bodyparser");
const cors = require('koa2-cors');
;(async ()=>{
  await connect();
  initSchemas();
  app.use(cors());
  app.use(bodyParser());
  router.use('/goods',goods.routes())
//装载所有子路由
  router.use('/user', user.routes(), user.allowedMethods())
//加载路由中间件
  app.use(router.routes()).use(router.allowedMethods())
})();



app.listen(3000,(ctx)=>{
  console.log('[Server] starting at port 3000');
});

