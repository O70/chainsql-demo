<template>
  <div class="todo-box">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-row>
      <el-col :span="6" :offset="9">
        <el-alert
          title="New Features"
          type="warning"
          :description="content"
          :closable="false"
          center
          show-icon />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss">
.todo-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .el-alert {
    .el-alert__title {
      font-size: 19px;
    }

    .el-alert__description {
      font-size: 18px;
    }
  }
}
</style>
