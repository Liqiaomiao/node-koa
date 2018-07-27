// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerview from 'vue-router'
import routes from './router/index'
import { NavBar ,Field ,Button  } from 'vant';
Vue.use(NavBar)
  .use(Field)
  .use(Button);
Vue.config.productionTip = false
Vue.use(routerview);
const router = new routerview({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
