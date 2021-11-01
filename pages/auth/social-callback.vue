<template>
  <div>
    <h1>sfasfasfdddddddddddd</h1>
  </div>
</template>

<script>
export default {
  name: 'socialCallback',
  data() {
    return {
      token: this.$route.query.token ? this.$route.query.token : null,
    }
  },
  mounted() {
    this.$auth.loginWith('laravelJWT', {
      data: {
        token: this.token
      }
    }).catch((e) => {
      return this.$router.push('/register?error=Your token invalid')
    })

    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
