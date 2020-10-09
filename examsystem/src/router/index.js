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
    name: 'chiose',
    component: () => import(/* webpackChunkName: "about" */ '../views/chiose.vue')
  },
  {
    path: '/chiose',
    name: 'chiose',
    component: () => import(/* webpackChunkName: "about" */ '../views/chiose.vue')
  },
  {
    path: '/previewpage',
    name: 'previewpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/previewpage.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/uploadpage',
    name: 'uploadpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/uploadpage.vue')
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
  },
  {
    path: '/uploads',
    name: 'uploads',
    component: () => import(/* webpackChunkName: "about" */ '../views/uploads.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
