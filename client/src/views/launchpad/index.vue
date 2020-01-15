<template>
  <div class="app-container">
    <div class="app-box">
      <div
        v-for="(item, ind) in apps"
        :key="`app-${ind}`"
        class="app-item">
        <router-link :to="item.path">
          <el-avatar
            shape="square"
            :size="100"
            class="app-icon cursor-p"
            :src="`${publicPath}images/apps/app-${item.icon}.jpeg`" />
        </router-link>
        <div class="app-name txt-c">
          <router-link class="cursor-p" :to="item.path">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Launchpad',
  data() {
    return {
      publicPath: process.env.BASE_URL,
      apps: [
        { icon: 'numbers', name: 'Assets', path: '/assets' },
        { icon: 'mail', name: 'Database', path: '/database' },
        { icon: 'notes', name: 'Account', path: '/account' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.app-box {
  display: flex;
  display: -webkit-flex;
  /*justify-content: space-between;*/
  /*-webkit-justify-content: space-between;*/
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;

  .app-item {
    margin: 15px 20px;
    width: 100px;

    .app-icon {
      box-shadow: 0 5px 28px 0 rgba(0, 0, 0, .1);
      -webkit-box-shadow: 0 5px 28px 0 rgba(0, 0, 0, .1);
      border-radius: 23%;
      overflow: hidden;
      pointer-events: all;
    }

    .app-name {
      margin-top: 8px;
    }
  }
}
</style>
