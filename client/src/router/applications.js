import Layout from '@/layout'
import Sidebar from '@/layout/sidebar'

export default [
  {
    icon: 'find-friends',
    name: 'Portal',
    router: {
      path: '/portal',
      component: Layout,
      redirect: { name: 'Portal' },
      children: [
        {
          path: 'index',
          name: 'Portal',
          alias: '/',
          component: () => import('@/views/portal/index'),
          meta: { title: 'Portal' }
        }
      ]
    }
  },
  {
    icon: 'numbers',
    name: 'Assets',
    router: {
      path: '/assets',
      component: Layout,
      redirect: { name: 'Assets' },
      children: [
        {
          path: 'index',
          name: 'Assets',
          alias: '/',
          components: {
            default: () => import('@/views/assets/index'),
            Sidebar
          },
          // component: () => import('@/views/assets/index'),
          meta: { title: 'Assets Management' }
        }
      ]
    }
  },
  {
    icon: 'mail',
    name: 'Database',
    router: {
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
    }
  },
  {
    icon: 'notes',
    name: 'Account',
    router: {
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
    }
  }
]
