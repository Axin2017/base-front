<template>
  <RightPanel v-model="activePanel" @update="onPanelUpdate" ref="rightPanel">
    <RightPanelItem label="面板1" name="panel1" :canDelete="false">
      <div style="width:200px">面板1的内容</div>
    </RightPanelItem>
    <RightPanelItem label="面板2" name="panel2" :canDelete="true">
      <div style="width:400px">面板2的内容</div>
    </RightPanelItem>
  </RightPanel>
</template>
<script>
import RightPanel from '@/views/components/RightPanel'
import RightPanelItem from '@/views/components//RightPanel/RightPanelItem'
import rightPanelMixin from '@/views/components/RightPanel/mixin/hasRightPanel'
import executeMixin from '@/views/components/Map/mixin/executeMixin'
export default {
  name: 'Test',
  components: { RightPanel, RightPanelItem },
  mixins: [rightPanelMixin, executeMixin],
  props: [],
  data() {
    return {
      // 右侧面板需要的store变量
      rightPanelNameSpace: 'home',
      rightPanelWidthKey: 'homeRightWidth',
      setRightPanelWidthKey: 'setHomeRightWidth',
      // 右侧面板列表激活值
      activePanel: 'panel1'
    }
  },
  methods: {
    // 取得右侧面板宽度
    getRightPanelWidth() {
      return this.$refs.rightPanel.$el.offsetWidth
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
