<template>
  <div id="main-layout">
    <navbar />
    <transition name="fade-transform" mode="out-in">
      <el-row v-if="sidebar">
        <el-col :span="4">
          <sidebar :height="availableHeight" :route-name="sidebar" />
        </el-col>
        <el-col :span="20">
          <router-view :key="key" :style="style" />
        </el-col>
      </el-row>
      <router-view :key="key" v-else :style="style"/>
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
      type: String,
      default: null
    }
  },
  data() {
    return {
      availableHeight: 0
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    style() {
      return { height: `${this.availableHeight}px`, overflowY: 'auto' }
    }
  },
  created() {
    window.addEventListener('resize', this.handleWindowSize, false)
  },
  updated() {
    this.handleWindowSize()
  },
  methods: {
    handleWindowSize() {
      const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      const navHeight = document.querySelector('#main-layout .navbar').clientHeight
      this.availableHeight = winHeight - navHeight
    }
  }
}
</script>
