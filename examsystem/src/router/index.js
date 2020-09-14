import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutco',
    name: 'Aboutco',
    component: () => import(/* webpackChunkName: "about" */ '../views/Aboutco.vue')
  },
  {
    path: '/header',
    name: 'header',
    component: () => import(/* webpackChunkName: "about" */ '../views/header.vue')
  },
  {
    path: '/sjdetail',
    name: 'sjdetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/sjdetail.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "about" */ '../views/result.vue')
  },
  {
    path: '/paihang',
    name: 'paihang',
    component: () => import(/* webpackChunkName: "about" */ '../views/paihang.vue')
  },
  {
    path: '/newheader',
    name: 'newheader',
    component: () => import(/* webpackChunkName: "about" */ '../views/newheader.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
