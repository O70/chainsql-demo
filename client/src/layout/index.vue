<template>
  <div>
    <navbar />
    <el-row v-if="sidebar">
      <el-col :span="4">
        <sidebar />
      </el-col>
      <el-col :span="20" class="br-a">
        <router-view :key="key"/>
      </el-col>
    </el-row>
    <router-view :key="key" v-else/>
  </div>
</template>
<script>
import Navbar from './navbar'
import Sidebar from './sidebar'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  },
  props: {
    sidebar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    key() {
      // console.log(this.$route.path)
      return this.$route.path
    }
  },
  updated() {
    console.log('show', this.sidebar)
  }
}
</script>
<style lang="scss" scoped>
body {
  background-color: rgb(40, 41, 35);
}
</style>
