<template>

</template>

<script>
  export default {
    data() {
      return {
        token: this.$route.params.token ? this.$route.params.token : null,
      }
    },
    mounted() {
      this.$auth.login({
        data: {
          token: this.token
        }
      }).catch((e) => {
        return this.$router.push('/register?error=Your token invalid')
      })
    }
  }
</script>

<style scoped>

</style>
