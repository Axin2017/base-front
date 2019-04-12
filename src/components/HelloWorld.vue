<template>
  <div class="hello">
    <button @click="testHttp">测试网络请求</button>
  </div>
</template>

<script>
import testApi from '@/api/testApi'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    testHttp(){
      testApi.test({ sindex: 2 })
        .then(d => {
          console.log(d)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
