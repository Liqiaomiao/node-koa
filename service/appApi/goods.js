/**
 * Created by Liqiaomiao on 2018/7/27.
 */
const Koa = require("koa");
const app= new Koa();
const Router = require('koa-router');
let router = new Router();

const mongoose = require('mongoose');
const fs = require('fs');

router.get("/insertAllCategory",async()=>{
    fs.readFile("./data_json/category.json",'utf8',(err,data)=>{
      data=JSON.parse(data);
      let saveCount = 0;
      const Category = mongoose.model('Category')
      data.RECORDS.map((value,index)=>{
        let newCategory =  new Category(value)
        newCategory.save().then(()=>{
          saveCount++
          console.log('成功:'+saveCount)
        }).catch(error=>{
          console.log('失败:', error);
        })
      })

    })
})
router.get("/insertAllGoodsInfo",async (ctx)=>{
  fs.readFile('./data_json/newGoods.json','utf8',(err,data)=>{
    data=JSON.parse(data)
    let saveCount = 0 ;
    const Goods = mongoose.model('Goods')
    data.map((value,index)=>{
      let newGoods = new Goods(value)
      newGoods.save().then(()=>{
        saveCount++;
        console.log('成功', saveCount);
      }).catch((err)=>{
        console.log('失败', err);
      })
    })
  })
  ctx.body='开始导入数据'
});

module.exports=router;
