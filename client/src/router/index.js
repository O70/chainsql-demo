import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import apps from './applications'

const routes = [
  { path: '/login', name: 'Login', component: () => import('@/views/login/index') },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'launchpad',
        name: 'Launchpad',
        alias: '/',
        component: () => import('@/views/launchpad/index'),
        meta: { title: 'Launchpad' }
      }
    ]
  },
  ...apps.map(it => it.router),
  {
    path: '/404',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Page404',
        component: () => import('@/views/404'),
        meta: { title: '404' }
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
