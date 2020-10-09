import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/views/home/Home"
import HomeContain from '@/views/home/HomeContain'
import PlatformRegister from '@/views/register/PlatformRegister'
Vue.use(Router)

export const constantRouterMap = [
  {
    path:'/',
    // redirect: '/index',
    name:Home,
    component:Home,
  
  },
  {
    path:'/HomeContain',
    name:HomeContain,
    component:HomeContain
  },
  {
    path:'/PlatformRegister',
    name:PlatformRegister,
    component:PlatformRegister
  }
]

export const asyncRouterMap = [
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
