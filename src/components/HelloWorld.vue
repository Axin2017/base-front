<template>
  <div class="hello">
    <button @click="testHttp">测试网络请求</button>
    <ScrollDiv class="sc">
      <div>
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      </div>
      <div>
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      </div>
      <div>
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      </div>
      <div>
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      阿斯蒂芬卡斯的看法啊撒旦看风景阿斯蒂芬阿克苏的flak士大夫拉萨酱豆腐立刻就哦i去我家弗兰克,
      </div>
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
    testHttp() {
      testApi
        .test({ sindex: 2 })
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
.sc{
  width:200px;
  height: 200px;
  margin: auto;
}
</style>
