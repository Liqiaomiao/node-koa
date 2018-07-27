<template>
  <div>
      <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
      ></van-nav-bar>
      <div class="register-panel">
        <van-field
          v-model="userName"
          label="用户名"
          icon="clear"
          placeholder="请输入用户名"
          reqiured
          :error-message="usernameErrorMsg"
          @click-icon="userName=''"
        ></van-field>
        <van-field
          v-model='password'
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="passwordErrorMsg"
        ></van-field>
        <div class="register-button">
          <van-button type="primary" size="large" @click="LoginAction" :loading="openLoading">马上登录</van-button>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import url from '@/serviceAPI.config.js'
  import {Toast} from 'vant'
    export default {
        name: "Resigter",
        data(){
          return {
            userName:'',
            password:'',
            openLoading:false,
            usernameErrorMsg:'',
            passwordErrorMsg:''
          }
        },
        created(){
          if(localStorage.userInfo){
              Toast.success('您已经登录过了');
              this.$router.push("/")
            }
        },
        methods:{
          goBack(){
            this.$router.go(-1)
          },
          axiosLoginUser(){
            this.openLoading=true
            const data = {
              userName:this.userName,
              password:this.password
            };
            axios({
              url:url.login,
              method:'post',
              data:data
            })
              .then(response=>{
                this.openLoading=false;
                if(response.data.code==200 && response.data.message()){
                    new Promise((resolve,reject)=>{
                      localStorage.userInfo={
                        userName:this.userName
                      }
                      resolve()
                    }).then(()=>{
                      Toast.success('登录成功')
                      this.$router.push("/")
                    }).catch(err=>{
                      Toast.fail('登录状态保存失败')
                      console.log(err);
                    })

                }else{
                  Toast.fail('登录失败')
                  this.openLoading=false;
                }
              })
              .catch(error=>{
                Toast.fail('登录失败')
                this.openLoading=false;
              })
          },
          checkForm(){
            let isOk= true;
            if(this.userName.length<5){
              this.usernameErrorMsg='用户名不能小于5位'
              isOk=false
            }else{
              this.usernameErrorMsg=''
            }
            if(this.password.length<6){
              this.passwordErrorMsg='密码不能少于6位'
              isOk=false
            }else{
              this.passwordErrorMsg=''
            }
            return isOk

          },
          LoginAction(){
            this.checkForm() && this.axiosLoginUser()
          }
        }
    }
</script>

<style scoped>
  .register-panel{
    width:96%;
    border-radius: 5px;
    margin:20px auto;
    padding-bottom:50px;
  }
  .register-button{
    padding-top:10px;
  }
</style>
