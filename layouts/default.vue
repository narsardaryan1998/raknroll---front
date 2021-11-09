<template>
  <v-app dark>
    <Header v-if="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && header"></Header>
    <v-main>
      <nuxt/>
    </v-main>
    <!--    <transition name="slide-fade">-->
    <!--      <div-->
    <!--        class="text-center"-->
    <!--        v-if="scrollToTopButton"-->
    <!--        id="scrollToTopButton">-->
    <!--        <v-btn fab-->
    <!--               :elevation="20"-->
    <!--               dark-->
    <!--               transition="slide-x-transition"-->
    <!--               @click="scrollToTop"-->
    <!--               color="white"-->
    <!--               large-->
    <!--               light>-->
    <!--          <v-img :src="require('~/assets/scroll-to-top-icon.png')"-->
    <!--                 :lazy-src="require('~/assets/scroll-to-top-icon.png')">-->
    <!--          </v-img>-->
    <!--        </v-btn>-->
    <!--        <br>-->
    <!--        <span class="cursor-pointer"-->
    <!--              @click="scrollToTop">{{ $t('scrollToTop') }}</span>-->
    <!--      </div>-->
    <!--    </transition>-->
    <transition name="slide-fade">
      <CartModal v-show="showCartModal"></CartModal>
    </transition>
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
      isMounted: false,
      scrollToTopButton: false,
      showCartModal: false
    }
  },
  components: {
    Header,
    Footer,
    CartModal,
  },
  mounted() {
    if (window) {
      window.addEventListener('scroll', this.onScroll)
    }
    this.showCartModal = true; // might need this.$nextTick

  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 0) {
        this.scrollToTopButton = true;
      } else {
        this.scrollToTopButton = false;
      }
    },
    scrollToTop() {
      let intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    }
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
