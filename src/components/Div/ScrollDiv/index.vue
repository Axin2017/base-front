<template>
  <div :style="{width:width,height:height}">
    <el-scrollbar class="sc">
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
.sc{
  height: 100%;
}
</style>
