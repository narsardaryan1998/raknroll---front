<template>
  <div style="margin-top: 8vw; color:white;">
    <input type="text" class="form-control" v-model="form.email">
    <input type="text" class="form-control" v-model="form.password">
    <button class="v-btn" @click="register">sadfasfsdafsadf</button>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async register() {
        await this.$axios.post('/api/auth/register', this.form);
        console.log('regexav');
        await this.$auth.loginWith('laravelJWT', {
          data: this.form
        })
      }
    }
  }
</script>

<style scoped>

</style>
