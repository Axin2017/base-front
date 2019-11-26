<template>
  <div class="map-view">
    <div id="arcgisMap" ref="arcgisMap"></div>
    <iframe id="print-iframe" class="iframe-class"></iframe>
    <!-- 左上侧插槽 -->
    <div class="extra-div-left">
      <slot name="mapSlotLeft"></slot>
    </div>
    <!-- 右上侧插槽 -->
    <div class="extra-div-right">
      <slot name="mapSlotRight"></slot>
    </div>
    <!-- 左下侧插槽 -->
    <div class="extra-div-left-bottom">
      <slot name="mapSlotLeftBottom"></slot>
    </div>
    <!-- 右下侧插槽 -->
    <div class="extra-div-right-bottom">
      <slot name="mapSlotRightBottom"></slot>
    </div>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader'
import subscribeMixin from './mixin/subscribeMixin'
import executeMixin from './mixin/executeMixin'
import dataResourceTreeMixin from './mixin/dataResourceTree'
export default {
  name: 'MapView',
  mixins: [subscribeMixin, executeMixin, dataResourceTreeMixin],
  components: {
  },
  created() {
  },
  props: {
    mapType: {
      type: String
    }
  },
  data() {
    return {
      gisConstructor: {},
      gisModules: [
        'esri/core/watchUtils',
        'esri/geometry/Extent',
        'esri/geometry/geometryEngine',
        'esri/geometry/Point',
        'esri/geometry/Polyline',
        'esri/geometry/Polygon',
        'esri/geometry/SpatialReference',
        'esri/Graphic',
        'esri/layers/FeatureLayer',
        'esri/layers/GeoJSONLayer',
        'esri/layers/MapImageLayer',
        'esri/layers/GraphicsLayer',
        'esri/layers/support/TileInfo',
        'esri/layers/TileLayer',
        'esri/layers/WebTileLayer',
        'esri/Map',
        'esri/views/draw/Draw',
        'esri/views/MapView',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Compass',
        'esri/widgets/Home',
        'esri/tasks/support/Query',
        'esri/tasks/QueryTask',
        'esri/tasks/IdentifyTask',
        'esri/tasks/support/IdentifyParameters',
        'esri/widgets/ScaleBar',
        'esri/config'
      ],
      gisInst: {},
      layers: [],
      isMaPInit: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      loadModules(this.gisModules)
        .then(this.construct)
        .then(this.initMap)
    },
    construct(args) {
      for (let k = 0; k < args.length; k += 1) {
        const name = this.gisModules[k].split('/').pop()
        this.gisConstructor[name] = args[k]
      }
    },
    initMap() {
      const url = 'http://172.26.156.205:6080/arcgis/rest/services/ZSSJZL/DZDT_1116/MapServer'
      if (!url) {
        throw new Error('请配置arcgis底图地址')
      }
      // 添加规则，解析地方坐标系
      const ZSspatialReference = new this.gisConstructor.SpatialReference({
        wkt:
          'PROJCS["ZS",GEOGCS["zsGeo",DATUM["",SPHEROID["",6378317.0,298.2999999999968]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Gauss_Kruger"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",113.3666666666667],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]],VERTCS["Yellow_Sea_1985",VDATUM["Yellow_Sea_1985"],PARAMETER["Vertical_Shift",0.0],PARAMETER["Direction",1.0],UNIT["Meter",1.0]]'
      })
      this.gisInst.spatialReference = ZSspatialReference
      // 切片地图
      const basemap = new this.gisConstructor.TileLayer({
        url: url
      })
      this.gisInst.map = new this.gisConstructor.Map({
        layers: basemap
      })
      // 太大了，设置两个看行不行
      const extent = new this.gisConstructor.Extent({
        xmin: 447090.3099275249,
        ymin: 2447972.7082539117,
        xmax: 556310.5283679618,
        ymax: 2524934.8621782195,
        spatialReference: { wkid: 2384 }
      })
      this.gisInst.extent = extent

      const view = new this.gisConstructor.MapView({
        map: this.gisInst.map,
        extent: extent,
        container: 'arcgisMap',
        popup: {
          actions: [],
          dockOptions: {
            buttonEnabled: false
          }
        }
      })
      this.gisInst.view = view
      // remove 'power by esri' and zoom
      view.ui._removeComponents(['attribution', 'zoom'])
      this.gisInst.view.zoom = 1
      // configurate tileinfo
      const tileInfo = new this.gisConstructor.TileInfo({
        dpi: 96,
        format: 'image/png',
        spatialReference: { wkid: 2384 },
        size: [256, 256],
        origin: [477765.4786376953, 2519842.0604248047],
        lods: [
          {
            level: 0,
            resolution: 8.466666666666667,
            scale: 30238.095238095237
          },
          {
            level: 1,
            resolution: 4.233333333333333,
            scale: 15119.047619047618
          },
          {
            level: 2,
            resolution: 2.1166666666666667,
            scale: 7559.523809523809
          },
          {
            level: 3,
            resolution: 1.0583333333333333,
            scale: 3779.7619047619046
          },
          {
            level: 4,
            resolution: 0.6614583333333334,
            scale: 2362.3511904761904
          },
          {
            level: 5,
            resolution: 0.26458333333333334,
            scale: 944.9404761904761
          },
          {
            level: 6,
            resolution: 0.13229166666666667,
            scale: 472.4702380952381
          }
        ]
      })
      this.gisInst.tileInfo = tileInfo
      basemap.when(() => {
        console.log('地图加载完成')
        this.isMaPInit = true
        this.excuteMapMethod('afterMapInit')
      })
    }
  }
}
</script>

<style lang='scss' scope>
.map-view {
  #arcgisMap {
    height: 100%;
    width: 100%;
    background-color: #eff1fd;
    .right-more {
      right: 50px;
    }
  }
  .extra-div-left {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  .extra-div-right {
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
  }
  .extra-div-left-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  .extra-div-right-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: center;
  }
  .iframe-class {
    display: none;
  }
}
</style>
