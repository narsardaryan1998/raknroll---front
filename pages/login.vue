<template>
  <div>
    <h1 @click="socialLogin">Google</h1>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      socialLogin(){
        // this.$axios.get('/api/auth/login/google').then(response => {
        //   console.log(response);
        // })
        window.location.href = 'https://raknroll.ua/api/auth/login/google';
      }
    }
  }
</script>

<style scoped>

</style>
