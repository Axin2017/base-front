/*
 *@description: 给每一个vue组件根元素添加cid属性，方便调试的时候，从界面直接找到组件名
 *@author: 谭新
 *@date: 2019-04-10 17:50:53
 *@note: 请为每个组件添加name属性，否则无法起作用
*/
export default {
  install(Vue){
    Vue.mixin({
      mounted() {
        const name = this.$options.name
        const el = this.$el
        // 排除第三方组件，笨办法,可能会误伤
        const extrasReg = [
          /^El[A-Z]+/ // elemetn-ui
        ]
        if (name && el){
          const isExtras = extrasReg.some(reg => reg.test(name))
          !isExtras && el.setAttribute('cid', name)
        }
      }
    })
  }
}
