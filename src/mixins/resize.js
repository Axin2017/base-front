const resizeMixin = {
  data() {
    return {
      reEvt: 'resize'
    }
  },
  mounted() {
    // orientationchange->手机屏幕转屏事件
    // resize->页面大小改变事件(兼容pc，移动端)
    this.reEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(this.reEvt, this.resetFontSize)
    // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
    document.addEventListener('DOMContentLoaded', this.setFontSize)
  },
  beforeDestroy () {
    window.removeEventListener(this.reEvt, this.resetFontSize)
  },
  methods: {
    setFontSize() {
      const html = document.getElementsByTagName('html')[0]

      const designWidth = process.env.VUE_APP_DISIGN_WIDTH
      const clientW = document.documentElement.clientWidth || document.body.clientWidth
      if (!clientW) {
        return
      }
      html.style.fontSize = 100 * (clientW / designWidth) + 'px'
    },
    resetFontSize() {
      const _this = this
      if (window.resetFontTimeout) {
        clearTimeout(window.resetFontTimeout)
      }
      //防抖
      window.resetFontTimeout = setTimeout(() => {
        _this.setFontSize()
      }, 500)
    }
  }
}
export default resizeMixin
