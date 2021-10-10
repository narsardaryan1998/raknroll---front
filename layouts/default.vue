<template>
  <v-app dark>
    <Header v-if="!($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && header"></Header>
    <input v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" type="checkbox" id="active-toggle-menu">
    <label v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" for="active-toggle-menu"
           class="menu-btn"><span></span></label>
    <div data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-delay="1000"
         data-aos-once="true" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" class="mobile-header">
      <div class="container row pt-5">
        <div class="col-md-2 col-sm-4 mobile-header_logo">
          <NuxtLink :to='localePath("/")' class="mobile-header_logo_link">
            <img
              src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
              alt="RAK'N'ROLL logo">
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" id="mobile-header-links">
      <div class="toggle-menu">
        <ul>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/")'
                      :data-hover="$t('menuLinks.home')">{{ $t('menuLinks.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/products")'
                      :data-hover="$t('menuLinks.products')">{{ $t('menuLinks.products') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/about_us")'
                      :data-hover="$t('menuLinks.about_us')">{{ $t('menuLinks.about_us') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/bonuses")'
                      :data-hover="$t('menuLinks.bonuses')">{{ $t('menuLinks.bonuses') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/delivery")'
                      :data-hover="$t('menuLinks.delivery')">{{ $t('menuLinks.delivery') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/contact_us")'
                      :data-hover="$t('menuLinks.contact_us')">{{ $t('menuLinks.contact_us') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import AOS from 'aos'

export default {
  data() {
    return {
      header: true,
    }
  },
  components: {
    Header,
  },
  mounted() {
    AOS.init({})
    if (window.pageYOffset > 0) {
      document.getElementById('header').classList.add("menu-background-after-scroll");
    }
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if(document.getElementById('header')){
        if (window.pageYOffset > 0) {
          document.getElementById('header').classList.add("menu-background-after-scroll");
        } else {
          document.getElementById('header').classList.remove("menu-background-after-scroll");
        }
      }
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
