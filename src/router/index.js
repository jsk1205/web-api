import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/views/home/Home"
import Welcome from '@/components/Welcome'

import Detail from '@/components/category/Detail'
import Label from '@/components/category/Label'

import PlatformRegister from '@/views/register/PlatformRegister'
Vue.use(Router)

export const constantRouterMap = [
  // {
  //   path:'/',
  //   redirect: '/login',
  //   name:Login,
  //   component:Login,
  
  // },
  {
    path:'/home',
    name:Home,
    component:Home,
    redirect: '/Welcome',
    children:[
      {
        path:'/Welcome',
        name:Welcome,
        component:Welcome
      },
      {
        path:'/Detail',
        name:Detail,
        component:Detail
      },
      {
        path:'/Label',
        name:Label,
        component:Label
      }
    ]
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
