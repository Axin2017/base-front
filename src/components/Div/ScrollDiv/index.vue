<template>
  <div :style="{width:width,height:height}">
    <el-scrollbar :native="false" :class="{'scroll-box-vertical':isVertical,'scroll-box-horizontal':isHorizontal}" :tag="tag">
      <slot/>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'ScrollDiv',
  components: {},
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    // 渲染后的标签
    tag: {
      type: String,
      default: 'div'
    },
    // 是否是纵向滚动
    isVertical: {
      type: Boolean,
      default: true
    },
    // 是否是横向滚动
    isHorizontal: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-box-vertical{
  height: 100%;
}
.scroll-box-horizontal{
  width: 100%;
  white-space: nowrap;
}
</style>
