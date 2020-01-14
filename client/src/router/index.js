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
  { path: '*', redirect: '/404' }
]

export default new Router({
  mode: 'history',
  routes
})
