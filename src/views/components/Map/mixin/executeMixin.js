const executeMixin = {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    excuteMapMethod(name, ...params) {
      const methodProxy = {
        method: name,
        params
      }
      this.$store.commit('global/addExecuteFunName', methodProxy)
    }
  },
  computed: {
  },
  watch: {
  }
}
export default executeMixin
