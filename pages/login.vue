<template>
  <div style="margin-top: 8vw">
    <div v-if="$route.params.error" style="color: red">
      {{ this.$route.params.error }}
    </div>
    <h1 @click="socialLoginGoogle">Google</h1>
    <h1 @click="socialLoginFacebook">Facebook</h1>
  </div>
</template>

<script>
export default {
  name: 'userLogin',
  methods: {
    socialLoginGoogle() {
      window.location.href = 'https://raknroll.ua/api/auth/login/google';
    },
    socialLoginFacebook() {
      window.location.href = 'https://raknroll.ua/api/auth/login/facebook';
    },
  }
}
</script>

<style scoped>

</style>
