<template>
  <header id="header">
    <div class="container-padding container pl-0 mx-0">
      <div class="d-flex">
        <div class="header_logo">
          <NuxtLink :to='localePath("/")' class="header_logo_link">
            <v-img
              position="left"
              :src="require('~/assets/images/raknroll-logo.png')"
              :lazy-src="require('~/assets/images/raknroll-logo.png')"
              alt="RAK'N'ROLL logo"
              contain>
            </v-img>
          </NuxtLink>
        </div>
        <div class="header_nav">
          <div class="header_nav_delivery_and_user_part d-flex align-center justify-space-between">
            <div class="header_nav_pages-menu">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_pages_link white--text transition-05"
                              :to='localePath("/")'>
                      {{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link white--text transition-05"
                              :to='localePath("/reviews")'>
                      {{ $t('menuLinks.reviews') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link white--text transition-05"
                              :to='localePath("/delivery-and-payment")'>
                      {{ $t('menuLinks.delivery-and-payment') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link white--text transition-05"
                              :to='localePath("/contact-us")'>
                      {{ $t('menuLinks.contact-us') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_delivery_part d-flex align-center justify-space-between">
              <div class="header_nav_delivery_part_language">
                <v-select
                  @change="changeLanguage"
                  :items="$i18n.locales"
                  item-value="code"
                  item-text="name"
                  menu-props="auto"
                  v-model="$i18n.locale"
                  color="red darken-4"
                  class="pt-0 mt-0 without-border-select"
                  hide-details
                  item-color="red darken-4"
                  prepend-icon="mdi-flag"
                  single-line>
                </v-select>
              </div>
              <div class="header_nav_delivery_part_call">
                <v-select
                  :items="['+38 (096) 599 - 09 - 09', '+38 (09) 599 - 09 - 09']"
                  menu-props="auto"
                  color="red darken-4"
                  value="+38 (096) 599 - 09 - 09"
                  item-color="red darken-4"
                  class="pt-0 mt-0 without-border-select"
                  hide-details
                  prepend-icon="mdi-phone"
                  single-line>
                </v-select>
              </div>
            </div>
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-lg-4 pt-md-2">
            <div class="header_nav_navigation pt-5">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li v-for="category in $store.getters['categories/data']">
                    <NuxtLink class="header_nav_navigation_menu_link transition-05 white--text"
                              :to='localePath("/products/"+ category.slug +"/all-brands/page-1")'>{{ category.name }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link transition-05 white--text"
                              :to='localePath(`/products/all-catalog/all-brands/%7B"display_quantity":8,"discounted":true%7D/page-1`)'>
                      {{ $t('sales') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      language: this.$i18n.locale,
    }
  },
  mounted() {
    this.$store.dispatch('categories/getData', {
      language: this.language
    });
    this.getCartDataByLanguage();
  },
  methods: {
    changeLanguage() {
      this.$store.dispatch('categories/getData', {
        language: this.$i18n.locale
      });
      this.getCartDataByLanguage();
      let routePath = $nuxt.$route.path;
      let pushTo = '';
      if (routePath.includes("/ru/")) {
        pushTo = routePath.replace("ru/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else if (routePath.includes("/ru")) {
        pushTo = routePath.replace("/ru", this.$i18n.locale === "uk" ? "/" : "/" + this.$i18n.locale)
      } else {
        pushTo = this.$i18n.locale !== "uk" ? "/" + this.$i18n.locale + routePath : routePath;
      }
      this.$router.push({path: pushTo});
    },
    addToCart(productId) {
      this.$store.commit('cart/add', productId);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    getCartDataByLanguage() {
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if (cartArray && cartArray.length) {
        let productIds = [];
        for (let i = 0; i < cartArray.length; i++) {
          productIds.push(cartArray[i].id)
        }
        this.$store.dispatch('cart/getData', {
          language: this.$i18n.locale,
          productIds
        });
      }
    }
  },
}
</script>

<style scoped>
#header {
  position: absolute;
  width: 100%;
  z-index: 100;
}

.header_logo {
  min-width: 15%;
}

.header_logo_link {
  margin-left: 1vw;
  width: 40%;
  display: block;
  height: auto;
}

.header_nav {
  min-width: 85%;
}

.header_nav_delivery_part {
  width: 25%;
}

.header_nav_delivery_part_language {
  width: 40%;
}

.header_nav_navigation {
  min-width: 80%;
}

.header_nav_navigation_menu_link {
  font-size: 22px;
  line-height: 1;
}

.header_nav_navigation_menu_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.header_nav_navigation_menu_pages_link {
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
}

.header_nav_navigation_menu_pages_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}
</style>
