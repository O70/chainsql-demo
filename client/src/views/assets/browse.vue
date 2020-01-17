<template>
  <div class="app-container">
    <todo content="Assets Browse" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
