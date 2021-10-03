<template>
  <v-app dark>
    <Header></Header>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header,
  },
}
</script>
