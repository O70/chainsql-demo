<template>
  <div class="app-container">
    <todo content="My Assets" />
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
