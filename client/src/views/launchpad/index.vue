<template>
  <div class="app-container">
    <div class="app-box">
      <div
        class="app-item"
        v-for="item in 39"
        style="margin: 15px 20px;width: 142px;"
        :key="item">
        <el-avatar
          shape="square"
          :size="142"
          src="https://avatar.gitee.com/uploads/group/238434124708134.png" />
        <label>app-{{item}}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Launchpad'
}
</script>
<style lang="scss" scoped>
.app-box {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
