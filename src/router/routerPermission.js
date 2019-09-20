import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration


// 取用户是否登录的一些身份信息，如token，userkey，这里的逻辑视具体项目而定
function hasUserKey() {
  return store.getters['global/userKey']
}

function registerRouterHook(router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()

    const hasKey = hasUserKey()
    if (hasKey) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else {
        next()
      }
    } else {
      // todo 这里有个小bug，如果用户已经登录了，但是还是直接进入login路由，应该跳转回首页
      if (to.path === '/login') {
        next()
      } else {
        // 记录有userkey或者token，通过这些标识取后台尝试读取用户信息
        const result = await validateUser()
        if (result.userinfo) {
          //store.commit('global/setUserInfo', result.userinfo)
          next()
        } else {
          // Message.error(result.errmsg)
          router.replace('/login')
        }
      }
      NProgress.done()
    }
  })
  router.afterEach((to, from, next) => {
    NProgress.done()
  })
}

// 到后台取用户身份信息，cookie传递到后台会返回用户身份信息
// 具体逻辑视具体项目而定
async function validateUser() {
  const result = {
    userinfo: null,
    errmsg: ''
  }
  return result
}


export default registerRouterHook
