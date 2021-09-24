<template>
  <v-app dark>
    <Loading v-if="loading"></Loading>
    <Header></Header>
    <v-main v-if="!loading">
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Loading from '~/components/Loading'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Header,
    Loading,
  },
}
</script>
