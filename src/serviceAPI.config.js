/**
 * Created by Liqiaomiao on 2018/6/21.
 */
'use strict';
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://127.0.0.1:3000/";
const URL = {
  getShopingMallInfo : BASEURL+'index',    //商城首页所有信息
  registerUser:LOCALURL +'user/register',
  login:LOCALURL + 'user/login',
  getDetailGoodsInfo:LOCALURL+'goods/getDetailGoodsInfo',

}
module.exports = URL;
