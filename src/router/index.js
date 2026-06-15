import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/pages/Catalog/Catalog.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/pages/Cart/Cart.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About/About.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('@/pages/Delivery/Delivery.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/Contacts/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory('/Furniture/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router