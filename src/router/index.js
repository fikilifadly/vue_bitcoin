import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Exchange from '../views/Exchange.vue'

const Home = () => import('../views/Home.vue')
const Exchange = () => import('../views/Exchange.vue')

const routes =  [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/btc-ex/:money',
    name: 'Exchange',
    component: Exchange
  }
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
