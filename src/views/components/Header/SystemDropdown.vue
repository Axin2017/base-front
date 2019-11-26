<!--
 * @Description: 菜单信息内容
 * @Author: your name
 * @Date: 2019-09-07 14:28:42
 -->
<template>
  <div class="Menus">
    <div class="top-menu">
      <div v-for = "(menu,index) in menuList" :class="['top-menu-div',{'actived':getRouterPath.indexOf(menu.path) === 0}]" :key="index" @click="onTopMenusClick(menu.path)">
        {{menu.name}}
      </div>
    </div>
  </div>
</template>
<script>
// ToDo 这个应该独立出去
export default {
  name: 'SystemDropdown',
  data() {
    this.menuList = [
      {
        name: '首页',
        path: '/'
      }
    ]
    return {}
  },
  methods: {
    onTopMenusClick(path) {
      this.$router.push(path)
    }
  },
  computed: {
    getRouterPath() {
      return this.$store.state.global.routerPath
    }
  }
}
</script>
<style lang="scss" scoped>
$actived-background-color: #21bdca;
@mixin dropdown-item-actived {
  color: #fff;
  background-color: $actived-background-color;
}
.Menus {
  display: flex;
  .dropdown-box {
    position: relative;
    display: flex;
    padding-left: 23px;
    font-size: 20px;
    color: #00effe;
    z-index: 1;
    .dropdown-current {
      display: flex;
      flex-direction: row;
      align-items: center;
      i {
        margin-left: 18px;
      }
    }
    .dropdown-list {
      position: absolute;
      height: 0;
      width: 293px;
      top: 60px;
      left: 0;
      box-sizing: border-box;
      background-color: rgba(20, 35, 106, 0.85);
      border-radius: 0 0 6px 6px;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      transition: all 0.3s;
      font-size: 14px;
      color: #c5d0ff;
      .drop-box {
        padding: 22px 10px;
        .dropdown-item {
          height: 36px;
          line-height: 36px;
          border: 1px solid transparent;
          border-radius: 6px 0px 6px 0px;
          padding-left: 37px;
          cursor: pointer;
          &.actived,
          &:hover {
            @include dropdown-item-actived;
          }
        }
      }
    }
    &:hover {
      .dropdown-list {
        height: 274px;
      }
    }
  }
  .top-menu {
    padding-left: 400px;
    color: white;
    font-size: 16px;
    display: flex;
    .top-menu-div {
      padding: 0px 10px;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 20px;
      }
      &:hover {
        border-bottom: 3px solid #21bdca;
      }
    }
    .el-dropdown-link {
      width: 112px;
      text-align: center;
      &:hover {
        background: #0e1b56;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .actived {
    border-bottom: 3px solid #21bdca;
  }
}
</style>
