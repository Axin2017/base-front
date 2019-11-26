import Vue from 'vue'
import Router from 'vue-router'
import registerRouterHook from './routerPermission'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (index.[home].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
      redirect: '/home/test',
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('@/views/home/test')
        }
      ]
    }
  ]
})

registerRouterHook(router)

export default router
