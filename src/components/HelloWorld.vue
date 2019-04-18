<template>
  <div class="hello">
    <button @click="testHttp">测试网络请求</button>
    <ScrollDiv height="200px" width="200px">
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
    </ScrollDiv>
  </div>
</template>

<script>
import testApi from '@/api/testApi'
import ScrollDiv from './Div/ScrollDiv'
export default {
  name: 'HelloWorld',
  components: {
    ScrollDiv
  },
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
