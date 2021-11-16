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
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      header: true,
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
  },
  components: {
    Header,
    Footer,
    CartModal,
  }
}
</script>
