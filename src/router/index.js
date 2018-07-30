import ShoppingMall from '../pages/ShoppingMall'
import Register from '../pages/Resigter'
import Login from '../pages/Login'
import Goods from '../pages/Goods'
const  routes=[
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path:'/Goods',name:'Goods',component:Goods}
  ];
export default routes



