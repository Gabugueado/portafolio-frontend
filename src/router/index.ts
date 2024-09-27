import { createWebHistory, createRouter } from 'vue-router'

import LoginLayout from '@/layouts/LoginLayout.vue'
import LandingPage from '@/layouts/LandingLayout.vue'
import LoginView from '@/views/AuthViews/LoginView.vue'
import RegisterView from '@/views/AuthViews/RegisterView.vue'
import ForgetView from '@/views/AuthViews/ForgetView.vue'
import StoreLayout from '@/layouts/StoreLayout.vue'
import ProductsView from '@/views/StoreViews/ProductsView.vue'
import ProductView from '@/views/StoreViews/ProductView.vue'
import CartView from '@/views/StoreViews/CartView.vue'
import WishlistView from '@/views/StoreViews/WishlistView.vue'

const routes = [
  { path: '/', component: LandingPage },
  {
    path: '/auth',
    component: LoginLayout,
    children: [
      { path: 'login', name: 'login', component: LoginView },
      { path: 'register', name: 'register', component: RegisterView },
      { path: 'forget', name: 'forget', component: ForgetView }
    ]
  },
  {
    path: '/store',
    component: StoreLayout,
    children: [
      { path: '', name: 'products', component: ProductsView },
      { path: 'product/:id', name: 'product', component: ProductView },
      { path: 'cart', name: 'cart', component: CartView },
      { path: 'wishlist', name: 'wishlist', component: WishlistView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
