import Layout from '@/layout'

export default [
  {
    icon: 'find-friends',
    name: 'Portal',
    router: {
      path: '/portal',
      name: 'Portal',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'PortalIndex',
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
      name: 'Assets',
      component: Layout,
      props: {
        sidebar: 'Assets'
      },
      children: [
        {
          path: 'index',
          name: 'AssetsIndex',
          alias: '/',
          component: () => import('@/views/assets/index'),
          meta: { title: 'Assets Management' }
        },
        {
          path: 'my',
          name: 'AssetsMy',
          component: () => import('@/views/assets/my'),
          meta: { title: 'My Assets' }
        },
        {
          path: 'browse',
          name: 'AssetsBrowse',
          component: () => import('@/views/assets/browse'),
          meta: { title: 'Assets Browse' }
        }
      ]
    }
  },
  {
    icon: 'mail',
    name: 'Database',
    router: {
      path: '/database',
      name: 'Database',
      component: Layout,
      props: {
        sidebar: 'Database'
      },
      children: [
        {
          path: 'index',
          name: 'DatabaseIndex',
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
      name: 'Account',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'AccountIndex',
          alias: '/',
          component: () => import('@/views/account/index'),
          meta: { title: 'Account Management' }
        }
      ]
    }
  }
]
