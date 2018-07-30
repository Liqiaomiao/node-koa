import ShoppingMall from '@/components/HelloWorld'
import Register from '../components/Resigter'
import Login from '../components/Login'
import Goods from '../components/Good'
const  routes=[
    {path: '/',name: 'ShoppingMall',component: ShoppingMall},
    {path: '/register',name: 'Register',component: Register},
    {path: '/login',name: 'Login',component: Login},
    {path:'/Goods',name:'Goods',component:Goods}
  ];
export default routes



