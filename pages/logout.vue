<template>
  <div>
    <h1 @click="logout">
      logout
    </h1>
  </div>
</template>

<script>
export default {
  name: "logout",
  methods: {
    async logout() {
      await this.$auth.logout()
      window.location.reload();
    }
  }
}
</script>

<style scoped>

</style>
