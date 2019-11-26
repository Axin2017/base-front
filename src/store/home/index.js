const home = {
  namespaced: true,
  state: {
    homeRightWidth: 0,
    //左侧菜单栏内图层叠加操作
    layerOperate: {
      type: 'add', //or 'remove'
      layers: []
    },
    layerAddedKeys: []
  },
  mutations: {
    setHomeRightWidth(state, width) {
      state.homeRightWidth = width
    },
    setLayerOperate(state, data) {
      // 排除重复项
      if (data.type === 'add') {
        const filteredData = data.layers.filter(layer => !state.layerAddedKeys.includes(layer._element_key))
        state.layerAddedKeys = state.layerAddedKeys.concat(filteredData.map(fd => fd._element_key))
        state.layerOperate = { type: data.type, layers: filteredData }
      } else if (data.type === 'remove') {
        data.layers.forEach(layer => {
          const index = state.layerAddedKeys.indexOf(layer._element_key)
          index > -1 && state.layerAddedKeys.splice(index, 1)
        })
        state.layerOperate = { type: data.type, layers: data.layers }
      }
    }
  }
}
export default home
