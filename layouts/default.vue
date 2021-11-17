<template>
  <v-app dark>
    <transition name="fade">
      <Loading1 v-show="loading"></Loading1>
    </transition>
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
import Loading from '~/components/Loading'
import Loading1 from '~/components/Loading1'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      header: true,
      loading: true,
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
    this.$nextTick(() => {
      setTimeout(() => this.loading = false, 10000)
    })
  },
  components: {
    Header,
    Footer,
    CartModal,
    Loading,
    Loading1,
  }
}
</script>
