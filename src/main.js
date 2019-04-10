import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerPlugins } from './plugins'

Vue.config.productionTip = false
// 注册自定义插件
registerPlugins(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
