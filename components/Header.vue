<template>
  <header id="header">
    <div class="container-padding container pl-0 mx-0">
      <div class="d-flex">
        <div class="header_logo">
          <NuxtLink :to='localePath("/")' class="header_logo_link">
            <v-img
              :lazy-src="require('~/assets/images/raknroll-logo.png')"
              :src="require('~/assets/images/raknroll-logo.png')"
              alt="RAK'N'ROLL logo"
              contain
              position="left">
            </v-img>
          </NuxtLink>
        </div>
        <div class="header_nav">
          <div class="header_nav_delivery_and_user_part d-flex align-center justify-space-between">
            <div class="header_nav_pages-menu">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li>
                    <NuxtLink :to='localePath("/")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink :to='localePath("/reviews")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.reviews') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink :to='localePath("/delivery-and-payment")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.delivery-and-payment') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink :to='localePath("/public-contract")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.publicContract') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink :to='localePath("/about-company")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.aboutCompany') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink :to='localePath("/contact-us")'
                              class="header_nav_navigation_menu_pages_link white--text transition-05">
                      {{ $t('menuLinks.contact-us') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_delivery_part d-flex align-center justify-space-between">
              <div class="header_nav_delivery_part_language d-flex align-center">
                <div>
                  <v-img
                    :lazy-src="require('~/assets/images/flags/' + $i18n.locale + '.png')"
                    :src="require('~/assets/images/flags/' + $i18n.locale + '.png')"
                    class="mt-2"
                    contain
                    position="center"
                    width="20">
                  </v-img>
                </div>
                <div class="pl-3">
                  <v-select
                    v-model="$i18n.locale"
                    :items="$i18n.locales"
                    class="pt-0 mt-0 without-border-select"
                    color="red darken-4"
                    hide-details
                    item-color="red darken-4"
                    item-text="name"
                    item-value="code"
                    menu-props="auto"
                    single-line
                    @change="changeLanguage">
                  </v-select>
                </div>
              </div>
              <div class="header_nav_delivery_part_call">
                <v-select
                  :items="[{number: '+38 (096) 599 - 09 - 09', key: 'phone1'}, {number: '+38 (093) 599 - 09 - 09', key: 'phone2'}]"
                  :placeholder="$t('callUs') + ' :)'"
                  class="pt-0 mt-0 without-border-select"
                  color="red darken-4"
                  hide-details
                  item-color="red darken-4"
                  item-text="number"
                  item-value="key"
                  menu-props="auto"
                  prepend-icon="mdi-phone"
                  single-line
                  @change="call($event)">
                </v-select>
                <a ref="phone1" href="tel:380965990909"></a>
                <a ref="phone2" href="tel:380935990909"></a>
              </div>
            </div>
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-lg-4 pt-md-2">
            <div class="header_nav_navigation pt-5">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li v-for="category in $store.getters['categories/data']" class="position-relative">
                    <NuxtLink :to='localePath("/products/"+ category.slug +"/all-subcategories/all-brands/page-1")'
                              v-if="!category.subcategories.length"
                              class="header_nav_navigation_menu_link transition-05 white--text">{{ category.name }}
                    </NuxtLink>
                    <a href='javascript:void(0)'
                       v-if="category.subcategories.length"
                       class="header_nav_navigation_menu_link transition-05 white--text">{{ category.name }}
                      <v-icon class="submenu-icon">mdi-menu-down</v-icon>
                    </a>
                    <ul
                      class="header_nav_navigation_menu_submenu pl-0 py-2 products_show_products_black_background list-style-none"
                      aria-label="submenu" v-if="category.subcategories.length">
                      <li><NuxtLink :to='localePath("/products/"+ category.slug +"/all-subcategories/all-brands/page-1")'>-{{ $t('all') }}</NuxtLink></li>
                      <li v-for="subcategory in category.subcategories"><NuxtLink :to='localePath("/products/"+ category.slug +"/" + subcategory.slug + "/all-brands/page-1")'>-{{ subcategory.name }}</NuxtLink></li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink
                      :to='localePath(`/products/all-catalog/all-subcategories/all-brands/%7B"display_quantity":8,"discounted":true%7D/page-1`)'
                      class="header_nav_navigation_menu_link transition-05 white--text">
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
    },
    call(e) {
      this.$refs[e].click();
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
  min-width: 12%;
}

.header_logo_link {
  margin-left: 1vw;
  width: 50%;
  display: block;
  height: auto;
}

.header_nav {
  min-width: 88%;
}

.header_nav_delivery_part {
  width: 25%;
}

.header_nav_delivery_part_language {
  width: 40%;
}

.header_nav_navigation {
  min-width: 90%;
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

.header_nav_navigation_menu_submenu {
  visibility: hidden;
  opacity: 0;
  min-width: 200px;
  position: absolute;
  margin-top: 2px;
  transition: .8s !important;
  left: 0;
  margin-left: 15px;
  display: none;
  text-align: left;
  box-shadow: 0 0 15px white;
}

.header_nav_navigation_menu li:hover > ul,
.header_nav_navigation_menu li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
  transition: .8s !important;
}

.header_nav_navigation_menu li:hover .submenu-icon {
  transform: rotate(180deg) !important;
  transition: .5s !important;
}

.header_nav_navigation_menu li ul li {
  padding: 6px 25px 6px 12px;
  font-size: 18px;
  width: 100%;
}

.header_nav_navigation_menu li ul li a {
  color: #dcdcdc;
  display: block;
  transition: .5s !important;
}

.header_nav_navigation_menu li ul li:hover a {
  color: #B71C1C;
  transition: .5s !important;
  margin-left: 4px;
}
</style>
