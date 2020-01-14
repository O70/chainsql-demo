<template>
  <div class="navbar">
    <el-row type="flex" align="middle">
      <el-col :span="12">
        <el-avatar class="cursor-p" :src="logoUrl" />
      </el-col>
      <el-col :span="12" align="right">
        <el-dropdown class="cursor-p" trigger="click" v-if="hasLogin">
          <el-row type="flex" align="middle">
            <el-avatar
              :src="userUrl"
              shape="square"
              size="small"
              @error="errorHandler">
              <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
            </el-avatar>
            <i class="el-icon-caret-bottom" />
          </el-row>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item>Log Out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div v-else>
          <el-link :underline="false" type="dark">
            <router-link :to="{ name: 'Login' }">Sign in</router-link>
          </el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      keyword: null,
      logoUrl: 'https://avatar.gitee.com/uploads/group/238434124708134.png',
      userUrl: 'https://avatar.gitee.com/uploads/82/1542182_Guiwang.png?1563158493',
      hasLogin: false
    }
  },
  methods: {
    errorHandler() {
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding: 6px 10px;
  background-color: rgb(40, 41, 35);

  .el-link.el-link--dark {
    color: rgb(126, 127, 123);
    font-size: 16px;
  }

  .el-link.el-link--dark:hover { color: #FFFFFF; }
}
</style>
