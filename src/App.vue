<template>
  <div id="app">
    <Header />
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/views/components/Header'
import resizeMixin from '@/mixins/resize'
export default {
  name: 'App',
  mixins: [resizeMixin],
  components: { Header },
  created() {
    this.setHtmlFontSize()
  }
}
</script>


<style lang="scss" scoped>
#app {
  height: 100%;
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main-wrapper {
    position: relative;
    height: calc(100% - 60px);
    overflow: hidden;
  }
}
</style>
