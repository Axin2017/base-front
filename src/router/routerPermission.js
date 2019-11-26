import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

function registerRouterHook(router) {
  router.beforeEach(async (to, from, next) => {
    // 记录路由
    store.commit('global/setRouterPath', to.path)
    NProgress.start()
    // 这里执行诸如路由的权限验证等工作
    next()
  })
  router.afterEach((to, from, next) => {
    NProgress.done()
  })
}

export default registerRouterHook
