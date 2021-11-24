<template>
  <div class="loading-bg-overlay">
    <div class="loader">
      <scale-loader :loading="true" color="#B71C1C" width="6px" height="70px" margin="4px" radius="0"></scale-loader>
    </div>
  </div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default {
  name: "Loading1",
  components: {
    ScaleLoader,
  },
}
</script>

<style scoped>
.loading-bg-overlay {
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  z-index: 99999999999999;
}

.loader {
  z-index: 99999999999999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
