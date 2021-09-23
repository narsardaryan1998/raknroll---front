<template>
  <v-app dark>
<!--    <Intro></Intro>-->
    <Header></Header>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '~/components/Header'
  import Intro from '~/components/Intro'
  export default {
    data() {
      return {
        components: {
          Header,
          Intro,
        }
      }
    }
  }
</script>
