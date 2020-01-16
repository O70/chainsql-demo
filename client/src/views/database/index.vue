<template>
  <div class="app-container">
    <todo content="Database Features" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
