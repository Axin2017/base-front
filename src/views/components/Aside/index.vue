<!--
 * @Description: 规划一张图主体页面
 * @Author: your name
 * @Date: 2019-09-06 09:59:42
 -->
<template>
  <aside class="aside">
    <MenuList :currentMenuIndex="currentMenuIndex" class="menu-list abs-fill" @menuchange="onMenuChange" />
    <div :class="['menu-item-content', { show : currentMenuIndex }]">
      <i class="el-icon-d-arrow-left close" @click="onCloseBtnClick"></i>
      <DataResource v-show="currentMenuIndex === 1" />
    </div>
  </aside>
</template>
<script>
import MenuList from './MenuList'
import DataResource from './DataResource'
export default {
  name: 'Aside',
  components: {
    MenuList,
    DataResource
  },
  props: [],
  data() {
    return {
      currentMenuIndex: 0
    }
  },
  methods: {
    onMenuChange(sindex) {
      this.currentMenuIndex = sindex
    },
    onCloseBtnClick() {
      this.currentMenuIndex = 0
    }
  },
  computed: {
    routerPath() {
      return this.$store.state.global.routerPath
    }
  },
  watch: {
    routerPath(val) {
      if (val === '/content/planningSystemResult') {
        this.currentMenuIndex = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aside {
  position: relative;
  width: 70px;
  height: 100%;
  .menu-list {
    padding-top: 23px;
    z-index: 25;
    background: $aside-backgroud-color;
    color: $second-level-color;
  }
  .menu-item-content {
    position: absolute;
    height: 100%;
    background-color: $alpha-backgroud-color;
    transform: translateX(-100%);
    transition: all 0.3s;
    &.show {
      transform: translateX(70px);
    }
    .close {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
      z-index: 18;
      color: $second-level-color;
      &:hover{
        color:#fff;
      }
    }
  }
}
</style>
