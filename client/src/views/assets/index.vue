<template>
  <div class="app-container">
    <todo content="Asset Management" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
