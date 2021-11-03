<template>
  <v-app dark>
    <Header v-if="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && header"></Header>
    <!--    <input v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" type="checkbox" id="active-toggle-menu">-->
    <!--    <label v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" for="active-toggle-menu"-->
    <!--           class="menu-btn"><span></span></label>-->
    <!--    <div data-aos="fade-down"-->
    <!--         data-aos-duration="1000"-->
    <!--         data-aos-delay="1000"-->
    <!--         data-aos-once="true" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" class="mobile-header">-->
    <!--      <div class="container row pt-5">-->
    <!--        <div class="col-md-2 col-sm-4 mobile-header_logo">-->
    <!--          <NuxtLink :to='localePath("/")' class="mobile-header_logo_link">-->
    <!--            <img-->
    <!--              :src="require('~/assets/raknroll-logo.png')"-->
    <!--              alt="RAK'N'ROLL logo">-->
    <!--          </NuxtLink>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" id="mobile-header-links">-->
    <!--      <div class="toggle-menu">-->
    <!--        <ul>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/")'-->
    <!--                      :data-hover="$t('menuLinks.home')">{{ $t('menuLinks.home') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/products")'-->
    <!--                      :data-hover="$t('menuLinks.products')">{{ $t('menuLinks.products') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/about_us")'-->
    <!--                      :data-hover="$t('menuLinks.about_us')">{{ $t('menuLinks.about_us') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/bonuses")'-->
    <!--                      :data-hover="$t('menuLinks.bonuses')">{{ $t('menuLinks.bonuses') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/delivery")'-->
    <!--                      :data-hover="$t('menuLinks.delivery')">{{ $t('menuLinks.delivery') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--          <li>-->
    <!--            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/contact_us")'-->
    <!--                      :data-hover="$t('menuLinks.contact_us')">{{ $t('menuLinks.contact_us') }}-->
    <!--            </NuxtLink>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->
    <v-main>
      <nuxt/>
    </v-main>
    <transition name="slide-fade">
      <div
        class="text-center"
        v-if="scrollToTopButton"
        id="scrollToTopButton">
        <v-btn fab
               :elevation="20"
               dark
               transition="slide-x-transition"
               @click="scrollToTop"
               color="white"
               large
               light>
          <v-img :src="require('~/assets/scroll-to-top-icon.png')"
                 :lazy-src="require('~/assets/scroll-to-top-icon.png')">
          </v-img>
        </v-btn>
        <br>
        <span class="cursor-pointer"
              @click="scrollToTop">{{ $t('scrollToTop') }}</span>
      </div>
    </transition>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  data() {
    return {
      header: true,
      isMounted: false,
      scrollToTopButton: false
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    if (window) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  computed: {
    mobileOrTablet: function () {
      return this.isMounted && ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
    }
  },
  methods: {
    onScroll() {
      if (document.getElementById('header')) {
        if (window.pageYOffset > 0) {
          this.scrollToTopButton = true;
          document.getElementById('header').classList.add("menu-background-after-scroll");
        } else {
          this.scrollToTopButton = false;
          document.getElementById('header').classList.remove("menu-background-after-scroll");
        }
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
