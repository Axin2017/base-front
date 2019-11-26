<script>
export default {
  name: 'RightPanel',
  props: {
    value: String,
    showTabs: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      activedValue: ''
    }
  },
  mounted() {
    if (this.value) {
      this.activedValue = this.value
      if (!this.show) {
        this.show = true
      }
    }
    // 这里必须等dom渲染完之后，才抛出去
    this.$nextTick(() => {
      this.$emit('update')
    })
  },
  methods: {
    onTabClick(name) {
      if (name !== this.value) {
        this.$emit('input', name)
        if (!this.show) {
          this.show = true
        }
      } else {
        // 点击相同的tab,清空激活值，隐藏面板
        this.$emit('input', '')
        this.show = false
      }
    },
    onTabDeleteClick(name, names, e) {
      // 删除当前的项
      if (name === this.value) {
        // 如果当前是展开的，切换到其他子面板
        if (this.show) {
          const index = names.indexOf(name)
          const copyNames = [...names]
          copyNames.splice(index, 1)
          // 默认激活剩下的第一项
          if (copyNames.length) {
            this.$emit('input', copyNames[0])
          } else {
            // 如果剩下的没有了，关闭
            this.$emit('input', '')
            this.show = false
          }
        }
      }
      this.$emit('tabRemove', name)
      e.stopPropagation()
    },
    // 计算面板，tab，names和canDeletes用于渲染
    getCaculatedPanel() {
      let panels = []
      let tabs = []
      let names = []
      let canDeletes = []
      if (this.$slots.default) {
        // 筛选出slot中是RightPanelItem的组件
        panels = this.$slots.default.filter(vnode => vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'RightPanelItem')
        panels.forEach(({ componentOptions }) => {
          tabs.push(componentOptions.propsData.label)
          names.push(componentOptions.propsData.name)
          canDeletes.push(componentOptions.propsData.canDelete)
        })
      }
      return {
        panels,
        tabs,
        names,
        canDeletes
      }
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.activedValue = this.value
        if (!this.show) {
          this.show = true
        }
      } else {
        this.show = false
      }
      // 这里必须等dom渲染完之后，才抛出去
      this.$nextTick(() => {
        this.$emit('update')
      })
    }
  },
  render() {
    const { panels, tabs, names, canDeletes } = this.getCaculatedPanel()
    const getActivedClassName = (v) => {
      return v === this.activedValue ? 'actived' : ''
    }
    const getPanelShowClassName = (show) => {
      return show ? 'show' : ''
    }
    const getTabDeleteIcon = (name, canDelete) => {
      return canDelete ? (<i class="el-icon-circle-close" onClick={(e) => {
        this.onTabDeleteClick(name, names, e)
      }} />) : ''
    }
    const leftTabs = (this.showTabs && tabs.length) ? (
      <div class="right-panel-tabs">
        {
          tabs.map((tab, i) => {
            if (tab) {
              return (
                <div class={'tab-item ' + getActivedClassName(names[i])} onClick={() => {
                  this.onTabClick(names[i])
                }}>
                  {tab}
                  {
                    getTabDeleteIcon(names[i], canDeletes[i])
                  }
                </div>
              )
            } else {
              return ''
            }
          })
        }
      </div>
    ) : ''
    const rightPanels = panels.length ? (
      <div class="right-panel">
        {
          panels.map((panel, i) => {
            return (
              <div class={'panel ' + getActivedClassName(names[i])} key={names[i]}>
                {panel}
              </div>
            )
          })
        }
      </div>
    ) : ''
    return (
      <div class={'right-panel-wrapper ' + getPanelShowClassName(this.show)} >
        {leftTabs}
        {rightPanels}
      </div >
    )
  }
}
</script>
<style lang='scss' scoped>
.right-panel-wrapper {
  position: absolute;
  right: 0;
  height: 100%;
  transition: all 0.3s;
  transform: translateX(100%);
  box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  z-index: 11;
  &.show {
    transform: translateX(0);
  }
  .right-panel {
    height: 100%;
    .panel {
      display: none;
      height: 100%;
      &.actived {
        display: block;
      }
    }
  }
  .right-panel-tabs {
    position: absolute;
    left: -37px;
    top: 13px;
    .tab-item {
      width: 17px;
      margin-top: 10px;
      padding: 16px 8px;
      background: #14236a;
      border: 2px solid transparent;
      border-radius: 5px 0px 0px 5px;
      font-size: 14px;
      color: #a4a9c3;
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        color: aqua;
        i {
          color: white;
        }
      }
      i {
        padding-top: 12px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      &.actived {
        background: linear-gradient(180deg, rgba(92, 104, 255, 0.95), rgba(33, 189, 202, 0.95));
        color: #fff;
        &:hover {
          color: aqua;
          i {
            color: white;
          }
        }
      }
    }
  }
}
</style>
