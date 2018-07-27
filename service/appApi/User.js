const Router= require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
router.post('/register',async(ctx)=>{
  const User = mongoose.model('User');
  let newUser = new User(ctx.request.body);
  await newUser.save().then(()=>{
    ctx.body={
      code:200,
      message:'注册成功'
    }
  }).catch(error=>{
    ctx.body={
      code:500,
      message:error
    }
  })

});
router.post('/login',async(ctx)=>{
  let loginUser = ctx.request.body;
  let userName = loginUser.userName;
  let password = loginUser.password;
  const User = mongoose.model('User');
  await User.findOne({userName:userName}).exec().then(async(result)=>{
    if(result){
      let newUser = new User();
      await newUser.comparePassword(password,result.password)
        .then((isMatch)=>{
          ctx.body = {code:200,message:isMatch}
        })
        .catch((error)=>{
          ctx.body={code:500,message:error}
        })
    }else{
      ctx.body={code:200,message:'用户名不存在'}
    }
  }).catch(error=>{
    ctx.body={code:500,message:error}
  })
});

module.exports=router;
