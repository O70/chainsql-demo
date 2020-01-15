<template>
  <div>
    <navbar />
    <div class="main-container">
      <el-row>
        <el-col :span="4">
          <router-view name="Sidebar"/>
        </el-col>
        <el-col :span="20" class="br-a">
          <router-view :key="key"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Navbar from './navbar'

export default {
  name: 'Layout',
  components: {
    Navbar
  },
  computed: {
    key() {
      console.log(this.$route)
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  background-color: rgb(40, 41, 35);
}
</style>
