<template>
  <div class="sidebar-container" :style="{ height: `${height}px` }">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="rgb(24, 25, 21)"
      text-color="#FFFFFF"
      active-text-color="#FFD04B">
      <el-menu-item
        v-for="(item, ind) in items"
        :key="ind"
        :index="item.name"
        :route="item">
        <i class="el-icon-menu" />
        <span slot="title">
<!--          <router-link :to="item">{{ item.meta.title }}</router-link>-->
          {{ item.meta.title }}
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    height: Number,
    routeName: {
      type: String,
      default: null
    }
  },
  computed: {
    items() {
      return (this.$router.options.routes.find(
        it => it.name === this.routeName) || {}).children || []
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar-container {
  overflow-y: auto;
  background-color: rgb(24, 25, 21);

  .el-menu {
    border: none!important;
  }
}
</style>
