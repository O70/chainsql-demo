<template>
  <div class="app-container">
    <todo content="Portal" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
