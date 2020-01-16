<template>
  <div class="br-a">
    <todo content="Sidebar" />
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
