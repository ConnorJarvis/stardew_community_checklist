import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Bundles from '@/components/bundles/Bundles'
import BundleItems from '@/components/bundles/BundleItems'
import Search from '@/components/search/Search'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/welcome/:saveid',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      redirect: {
        name: 'Welcome'
      }
    },
    {
      path: '/bundles/:saveid',
      name: 'Bundles',
      component: Bundles,
      children: [
        {
          path: ':id',
          name: 'bundle-items',
          component: BundleItems
        }
      ]
    },
    {
      name: 'Search',
      path: '/search/:saveid',
      component: Search
    },
    // {
    //   name: 'Inventory',
    //   path: '/inventory'
    // },
    {
      name: 'Settings',
      path: '/settings/:saveid',
      component: Settings
    }
  ],
  linkActiveClass: 'is-active'
})
