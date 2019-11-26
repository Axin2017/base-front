const dataResourceTreeMixin = {
  methods: {
    //添加wmts服务
    addWebTileLayer(id, code, sindex, ak) {
      console.log('添加wmts服务')
      const layer = new this.gisConstructor.WebTileLayer({
        urlTemplate: window.operationBackendUrl + '/' + id + '/service' + id + '/wmts/ResourceService_' + id + '_' + code + '_' + sindex + '/grid/{level}/{col}/{row}.png?ak=' + ak,
        id: id + code + ak,
        spatialReference: { wkid: 2384 },
        tileInfo: this.gisInst.tileInfo,
        fullExtend: this.gisInst.extent
      })
      const layerObj = { id: id + code + ak, layer: layer }
      this.gisInst.map.add(layer)
      this.$store.commit('global/addResourceTreeLayer', layerObj)
    },
    removeWebTileLayer(id) {
      const layerData = this.$store.state.global.resourceTreeAddedLayers.find(x => x.id === id)
      if (layerData) {
        this.gisInst.map.remove(layerData.layer)
      }
      this.$store.commit('global/removeResourceTreeLayer', id)
    }
  }
}
export default dataResourceTreeMixin
