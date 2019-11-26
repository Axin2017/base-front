<template>
  <div class="right-panel-item">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'RightPanelItem',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.right-panel-item {
  height: 100%;
}
</style>
