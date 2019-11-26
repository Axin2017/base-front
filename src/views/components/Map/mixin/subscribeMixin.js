const subscribeMixin = {
  data() {
    return {
    }
  },
  computed: {
    getExecuteFunName() {
      return this.$store.state.global.executeMehod
    }
  },
  watch: {
    getExecuteFunName(val) {
      if (val.length) {
        // 地图加载完成之后，应该在Map.vue中设置此变量为true。同时地图加载完成之后，应该执行afterMapInit方法清空队列
        if (this.isMaPInit) {
          val.forEach(methodProxy => {
            if (methodProxy.method !== 'afterMapInit') {
              console.log('执行' + methodProxy.method)
              this[methodProxy.method](...methodProxy.params)
            }
          })
          // 执行完之后置空
          this.$store.commit('global/setExecuteFunName', [])
        }
      }
    }
  }
}
export default subscribeMixin
