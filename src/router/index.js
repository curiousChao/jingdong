import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
const routes = [
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/login/Login.vue'),
    beforeEnter(to,from,next){
      const isLogin = localStorage.isLogin;
      (localStorage.isLogin)?next({name:"Home"}):next();
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/register/Register.vue'),
    beforeEnter(to,from,next){
      const isLogin = localStorage.isLogin;
      (localStorage.isLogin)?next({name:"Home"}):next();
    }
  },
  {
    path:'/shop/:id',
    name:'Shop',
    component:()=>import('../views/shop/Shop.vue')
  },
  {
    path:'/shop/pay/:id',
    name:'Pay',
    component:()=>import('../views/pay/Pay.vue')
  },
  {
    path:'/personal',
    name:'Personal',
    component:()=>import('../views/personal/Personal.vue')
  },
  {
    path:'/address',
    name:'Address',
    component:()=>import('../views/address/Address.vue')
  },
  {
    path:'/address/set_address',
    name:'SetAddress',
    component:()=>import('../views/setAddress/SetAddress.vue')
  },
  {
    path:'/order',
    name:'Order',
    component:()=>import('../views/order/Order.vue')
  },
  {
    path:'/cart',
    name:'Cart',
    component:()=>import('../views/cart/Cart.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 router.beforeEach((to,from,next)=>{
       const isLogin = localStorage.isLogin;
       /* 没有登录时跳转到登录页面,登录后不在允许跳到登录界面*/
      (isLogin||to.name==='Login'||to.name==='Register')?next():next({name:"Login"});
    });
export default router
