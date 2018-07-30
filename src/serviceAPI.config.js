/**
 * Created by Liqiaomiao on 2018/6/21.
 */
'use strict';
const BASEURL = "https://easy-mock.com/mock/5ae533bab188f2152c952d86/SmileVue/"
const LOCALURL = "http://127.0.0.1:3000/";
const URL = {
  getShopingMallInfo : BASEURL+'index',    //商城首页所有信息
  registerUser:LOCALURL +'user/register',
  login:LOCALURL + 'user/login',
  getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',

}
module.exports = URL;
