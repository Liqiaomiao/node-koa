const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/smile_db";
const glob = require('glob');
const {resolve} = require("path");
exports.initSchemas = ()=>{
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
};
exports.connect=()=>{
  //链接数据库
  mongoose.connect(url,{ useNewUrlParser: true });

  let maxConnectTimes =0;
  return new Promise((resolve,reject)=>{
        mongoose.connection.on('disconnected',()=>{
          console.log('*****************数据库断开时******************');
          if(maxConnectTimes<3){
            maxConnectTimes++
            mongoose.connect(url,{ useNewUrlParser: true });
          }else{
            reject();
            throw new Error('数据库出现问题，程序无法搞定，请人为修理.......')
          }
        })

    mongoose.connection.on('error',(err)=>{
      console.log('*****************数据库错误******************');
      if(maxConnectTimes<3){
        maxConnectTimes++
        mongoose.connect(url,{ useNewUrlParser: true });
      }else{
        reject();
        throw new Error('数据库出现问题，程序无法搞定，请人为修理.......')
      }
    })

    mongoose.connection.on('open',()=>{
      console.log('MongoDB connected successfully');
      resolve()
    })

  })

}
