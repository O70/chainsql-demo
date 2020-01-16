<template>
  <div>
    <navbar />
    <transition name="fade-transform" mode="out-in">
      <el-row v-if="sidebar">
        <el-col :span="4">
          <sidebar />
        </el-col>
        <el-col :span="20" class="br-a">
          <router-view :key="key" />
        </el-col>
      </el-row>
      <router-view :key="key" v-else />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {
    Navbar: () => import('./navbar'),
    Sidebar: () => import('./sidebar')
  },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  updated() {
    console.log('show', this.sidebar)
  }
}
</script>
