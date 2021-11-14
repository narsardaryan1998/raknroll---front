<template>
  <v-app dark>
    <Header v-if="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && header"></Header>
    <v-main>
      <nuxt/>
    </v-main>
    <CartModal></CartModal>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import CartModal from '~/components/CartModal'

export default {
  data() {
    return {
      header: true,
    }
  },
  components: {
    Header,
    Footer,
    CartModal,
  }
}
</script>

<style scoped>
.mobile-header_logo {
  padding: 0 !important;
  width: 100%;
}

.mobile-header_logo_link img {
  height: 40px;
}
</style>
