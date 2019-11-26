<template>
  <div class="content-class">
    <!-- TODO Aside应该是由一个类似RightPanel的LeftPanel包裹起来的 -->
    <div class="left-panel">
      <Aside />
    </div>
    <MapMain class="map" :style="mapStyle"></MapMain>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Aside from '../components/Aside'
import MapMain from '@/views/components/Map'
import executeMixin from '@/views/components/Map/mixin/executeMixin'
export default {
  name: 'Home',
  components: {
    MapMain,
    Aside
  },
  mixins: [executeMixin],
  data() {
    return {
      mapStyle: {
        width: '100%'
      }
    }
  },
  mounted() {
    this.refreshMapStyle()
  },
  methods: {
    refreshMapStyle() {
      let leftAndRightwidth = 0
      let left = 0
      leftAndRightwidth += this.getRightPanelWidth
      if (this.getLeftPanelShow) {
        // 转换成rem TODO 当有左侧面板独立组件的时候，这里的逻辑要提出去
        leftAndRightwidth += this.getLeftPanelWidth
        left += this.getLeftPanelWidth
      }
      this.mapStyle = {
        width: leftAndRightwidth ? `calc(100% - ${leftAndRightwidth}rem)` : '100%',
        left: left + 'rem'
      }
    }
  },
  computed: {
    getRightPanelWidth() {
      return this.$store.state.global.rightPanelWidth
    },
    getLeftPanelWidth() {
      // return this.$store.state.global.leftPanelWidth
      // 把一些手动设置的初始px转换成当浏览器宽度不是1920px时的px，因为开发的时候都是1920px的，要转换成当前的基数
      const width = 70 // 左侧栏70px
      const pxNow = width * (this.htmlFontSize / process.env.VUE_APP_ROOT_VALUE)
      // 转换成rem单位
      const remWidth = pxNow / this.htmlFontSize
      return remWidth
    },
    getLeftPanelShow() {
      // return this.$store.state.global.leftPanelShow
      return true
    },
    htmlFontSize() {
      return this.$store.state.global.htmlFontSize
    },
    // 监听路由
    getRouterPath() {
      return this.$store.state.global.routerPath
    }
  },
  watch: {
    getRightPanelShow() {
      this.refreshMapStyle()
    },
    getRightPanelWidth() {
      this.refreshMapStyle()
    },
    htmlFontSize() {
      this.refreshMapStyle()
    }
  }
}
</script>
<style lang="scss" scoped>
.content-class {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  color: black;
  .left-panel {
    position: absolute;
    left: 0;
    height: 100%;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    // transform: translateX(-100%);
    z-index: 11;
  }
  .map {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s;
  }
}
</style>
