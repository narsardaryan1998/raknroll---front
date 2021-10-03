<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"><h1 style="font-size: 50px">848564165165</h1></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      console.log('9999');
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
