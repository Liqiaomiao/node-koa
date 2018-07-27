const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId ;
const bcrypt = require('bcrypt');
const saltRounds = 10 ;
//创建Schema
const userSchema = new Schema({
  UserId:ObjectId,
  userName:{unique:true,type:String},
  password:String,
  creatAt:{type:Date,default:Date.now()},
  lastLoginAt:{type:Date,default:Date.now()}
},{
  collection:'user'
});

userSchema.methods={
  comparePassword:(_password,password)=>{
    return new Promise((resolve,reject)=>{
      bcrypt.compare(_password,password,(err,isMatch)=>{
        if(!err)resolve(isMatch);
        else reject(err)
      })
    })
  }
};
userSchema.pre('save',function (next) {
  bcrypt.genSalt(saltRounds,(err,salt)=>{
    if(err) return next(err);
    bcrypt.hash(this.password,salt,(err,hash)=>{
      if(err) next(err);
      this.password = hash;
      next()
    })
  })
});

//发布模型
mongoose.model('User',userSchema);
