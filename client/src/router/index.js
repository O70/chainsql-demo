import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

const routes = [
  { path: '/login', name: 'Login', component: () => import('@/views/login/index') },
  {
    path: '/404',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Page404',
        component: () => import('@/views/404')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: { name: 'Launchpad' },
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
  {
    path: '/account',
    component: Layout,
    redirect: { name: 'Account' },
    children: [
      {
        path: 'index',
        name: 'Account',
        alias: '/',
        component: () => import('@/views/account/index'),
        meta: { title: 'Account Management' }
      }
    ]
  },
  {
    path: '/assets',
    component: Layout,
    redirect: { name: 'Assets' },
    children: [
      {
        path: 'index',
        name: 'Assets',
        alias: '/',
        component: () => import('@/views/assets/index'),
        meta: { title: 'Assets Management' }
      }
    ]
  },
  {
    path: '/database',
    component: Layout,
    redirect: { name: 'Database' },
    children: [
      {
        path: 'index',
        name: 'Database',
        alias: '/',
        component: () => import('@/views/database/index'),
        meta: { title: 'Database Features' }
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  mode: 'history',
  routes
})
