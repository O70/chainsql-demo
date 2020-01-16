<template>
  <div class="app-container">
    <todo content="Account Management" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
