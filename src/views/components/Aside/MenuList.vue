<!--
 * @Description: 菜单列表
 * @Author: your name
 * @Date: 2019-09-06 09:59:42
 -->
<template>
  <div>
    <div :class="['menu-item', {actived: currentMenuIndex === 1}]" @click="onMenuClick(1)">
      <div :class="['data-div', {'actived-data': currentMenuIndex === 1}]"></div>
      <span>数据</span>
    </div>
  </div>
</template>
<script>
import executeMixin from '@/views/components/Map/mixin/executeMixin'
export default {
  name: 'MenuList',
  mixins: [executeMixin],
  components: {},
  props: {
    currentMenuIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onMenuClick(sindex) {
      this.$emit('menuchange', sindex === this.currentMenuIndex ? 0 : sindex)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-item {
  width: 38px;
  height: 42px;
  padding: 5px 10px 15px 15px;
  border-radius: 0px 8px 8px 0px;
  margin: 20px 0px;
  cursor: pointer;
  position: relative;
  z-index: 30;
  &.actived {
    background-color: #21BDCA;
    color: white;
  }
  & div {
    width: 32px;
    height: 32px;
    background-size: cover;
  }
  .data-div {
    background-image: url('./images/SJ-1.png')
  }
  .actived-data {
    background-image: url('./images/SJ-2.png')
  }
}
</style>
