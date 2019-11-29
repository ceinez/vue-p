import Vue from 'vue'
import VueRouter from 'vue-router'
import '../assets/css/reset.css'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Goods from '../views/Goods.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop/:cate_id',
    name: 'shop',
    component:Shop,
    props:true
  },
  {
    path: '/goods/:goods_id',
    name: 'goods',
    component:Goods,
    props:true
  },
  {
    path: '/cart',
    name: 'cart',
    component:Cart,
    props:true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component:Checkout,
    props:true
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
