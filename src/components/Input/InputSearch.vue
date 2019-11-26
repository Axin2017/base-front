<template>
  <span class="input-search">
    <input type="text" v-model="searchKey" :placeholder="placeholder" />
    <i v-show="searchKey" class="el-icon-close cursor-pointer clear" @click="onCleanClick" title="清除"></i>
    <i class="el-icon-search search" />
  </span>
</template>
<script>
export default {
  name: 'InputSearch',
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.lazyTimeOut = null
    return {
      searchKey: ''
    }
  },
  methods: {
    onCleanClick() {
      this.searchKey = ''
    }
  },
  destroyed() {
    if (this.lazyTimeOut) {
      this.lazyTimeOut = null
    }
  },
  watch: {
    searchKey() {
      if (this.lazy) {
        this.lazyTimeOut && clearTimeout(this.lazyTimeOut)
        this.lazyTimeOut = setTimeout(() => {
          this.$emit('input', this.searchKey)
        }, 1000)
      } else {
        this.$emit('input', this.searchKey)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input-search {
  position: relative;
  display: inline-block;
  height: 34px;
  line-height: 34px;
  vertical-align: middle;
  color: $placeholder-color;
  input {
    width: calc(100% - 70px);
    margin-left: 20px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    @include placeholder;
  }
  .search {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .clear {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      color: #fff;
    }
  }
}
</style>
