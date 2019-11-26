/*
 * 当某个路由中含有rightPanel的时候，需要在路由展示的根组件中引入本mixin，使用方式：
 *   1、路由展示的根组件引入mixin
 *   2、在引入的组件data函数中设置mixin需要的变量
 *     需要在data中设置三个变量，分别是
 *     a)rightPanelNameSpace 组件的数据在store中的模块
 *     b)rightPanelWidthKey state中存放右侧面板的宽度的key
 *     c)setRightPanelWidthKey mutation中设置右侧面板的宽度的方法key
 *   3、在store中该组件存放数据的模块中，在state中添加rightPanelWidthKey,mutaion中添加setRightPanelWidthKey为对应的设置前两个变量的方法
 *   4、在路由展示的根组件中，需要自己写获取rightPanel宽度的方法
 *   注意！！！！！！！！！！
 *   存储的宽度需要是rem，因为要适配window.resize事件。
 *   另外，1920px是 VUE_APP_DISIGN_WIDTH 设置的
 *   其余时候，用js方法获取组件宽度调用this.setRightPanelWidth(width即可)
 */

export default {
  data() {
    return {
      // 组件是否被缓存
      isDeactivated: false
    }
  },
  methods: {
    // 存储右侧面板宽度到store.onemapApplication 存储的是rem
    setRightPanelWidth(width) {
      // 把一些手动设置的初始px转换成当浏览器宽度不是1920px时的px，因为开发的时候都是1920px的，要转换成当前的基数
      const pxNow = width * (this.htmlFontSize / process.env.VUE_APP_ROOT_VALUE)
      // 转换成rem单位
      const remWidth = pxNow / this.htmlFontSize
      this.$store.commit(`${this.rightPanelNameSpace}/${this.setRightPanelWidthKey}`, remWidth)
      // 当width本身是0的时候，设置为0不会触发watch事件，需要手动提交。
      // eg，路由1宽度为500px，切换到路由2，路由2本身宽度是0，不会触发watch，所以不会变，而真实情况是我们需要变
      if (remWidth === 0 && this.rightPanelWidth === 0) {
        this.$store.commit('global/setRightPanelWidth', remWidth)
      }
    },
    // 面板更新，设置宽度
    onPanelUpdate() {
      this.$nextTick(() => {
        // 计算宽度
        if (this.activePanel) {
          this.setRightPanelWidth(this.getRightPanelWidth())
        } else {
          this.setRightPanelWidth(0)
        }
      })
    }
  },
  computed: {
    rightPanelWidth() {
      return this.$store.state[this.rightPanelNameSpace][this.rightPanelWidthKey]
    },
    // 根字体
    htmlFontSize() {
      return this.$store.state.global.htmlFontSize
    }
  },
  watch: {
    // 当右侧面板宽度改变的时候，把保存的局部panel状态同步到全局状态
    rightPanelWidth() {
      this.$store.commit('global/setRightPanelWidth', this.rightPanelWidth)
    }
  },
  // 路由激活的时候，把保存的局部panel状态同步到全局状态
  activated() {
    // 做判断，当路由首次加载的时候，也会触发这个activated周期函数，有点浪费
    if (this.isDeactivated) {
      this.$store.commit('global/setRightPanelWidth', this.rightPanelWidth)
    }
  },
  // 路由缓存的时候
  deactivated() {
    this.isDeactivated = true
  }
}
