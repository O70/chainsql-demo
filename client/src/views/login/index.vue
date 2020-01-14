<template>
  <div class="login-container">
    <el-row type="flex" justify="center">
      <el-col :span="7">
        <div class="login-form">
          <div class="title">
            <label>ChainSQL DEMO</label>
          </div>
          <el-form>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-user-solid"
                v-model="form.account"
                autocomplete="on"
                placeholder="Account" />
            </el-form-item>
            <el-form-item>
              <el-input
                prefix-icon="el-icon-lock"
                suffix-icon="el-icon-warning"
                v-model="form.password"
                type="password"
                autocomplete="on"
                placeholder="Password" />
            </el-form-item>
          </el-form>
          <el-button class="el-button-dark">Sign in</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: null,
        password: null
      }
    }
  }
}
</script>
<style lang="scss">
.login-container {
  .login-form {
    .el-input {
      .el-input__icon {
        color: rgb(93, 94, 91);
      }
      input {
        background-color: rgb(40, 41, 35);
        border: 0;
        color: #FFFFFF;
      }
    }
    .el-button-dark {
      width: 100%;
      background-color: rgb(53, 53, 51);
      border: 0;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 18px;
    }
    .el-button-dark:focus, .el-button-dark:hover {
      background-color: rgb(75, 75, 73);
    }
  }
}
</style>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-color: rgb(40, 41, 35);
  overflow: hidden;

  .login-form {
    background-color: rgb(24, 25, 21);
    border-radius: 4px;
    padding: 22px;
    margin-top: 13rem;

    .title {
      margin-bottom: 44px;
      text-align: center;

      label {
        font-size: 30px;
        font-weight: bold;
        color: rgb(169, 153, 116);
      }
    }
  }
}
</style>
