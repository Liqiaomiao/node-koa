/**
 * Created by Liqiaomiao on 2018/7/26.
 */
const fs =require("fs");
new Promise((resolve,reject)=>{
    fs.readFile(`./data_json/goods.json`,'utf-8',function (err, data) {
      let newData = JSON.parse(data);
      let i =0;
      let pushData = [];
      newData.RECORDS.map(function (value,index) {
        if(value.IMAGE1!=null){
          i++;
          pushData.push(value)
        }
      });
      resolve(pushData)
    });

  }).then(function (data) {
    fs.writeFile("./data_json/newGoods.json",JSON.stringify(data),function (err,data) {
      if(err){
        console.log("写文件操作失败")
      }else{
        console.log("写文件操作成功");
      }

    })
})




