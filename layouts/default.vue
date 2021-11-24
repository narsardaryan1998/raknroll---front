<template>
  <v-app dark>
    <transition name="fade">
      <Loading1 v-show="loading"></Loading1>
    </transition>
    <Header></Header>
    <MobileHeader></MobileHeader>
    <v-main>
      <nuxt/>
    </v-main>
    <CartModal></CartModal>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import MobileHeader from '~/components/MobileHeader'
import Footer from '~/components/Footer'
import CartModal from '~/components/CartModal'
import Loading1 from '~/components/Loading1'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
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
      setTimeout(() => this.loading = false, 500)
    })
  },
  components: {
    Header,
    MobileHeader,
    Footer,
    CartModal,
    Loading1,
  }
}
</script>
