<template>
  <div class="app-container">
    <todo v-for="i in 20" :key="i" :content="`Asset Management ${i}`" />
<!--    <todo content="Asset Management" />-->
  </div>
</template>
<script>
export default {
  components: {
    todo: () => import('@/views/todo')
  }
}
</script>
