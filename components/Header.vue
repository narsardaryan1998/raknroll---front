<template>
  <header id="header" class="d-flex custom-animation-fade-to-down">
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
                              :to='localePath("/contact_us")'>
                      {{ $t('menuLinks.contact_us') }}
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
            <div class="header_nav_navigation">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li v-for="category in $store.getters['categories/data']">
                    <NuxtLink class="header_nav_navigation_menu_link transition-05 white--text"
                              :to='localePath("/products/"+ category.slug +"/all-brands/page-1")'>{{ category.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_user_section">
              <div class="header_nav_user_part d-flex justify-end align-center">
                <NuxtLink :to='localePath("/cart")' class="header_logo_link">
                  <v-btn
                    class="ma-2 header_nav_user_part_button"
                    outlined
                    small
                    fab
                    color="white">
                    <v-badge
                      bordered
                      class="font-brigada"
                      color="red darken-4"
                      :content="this.$store.getters['cart/count'] ? this.$store.getters['cart/count'] : '0'"
                      overlap>
                      <img src="~/assets/icons/icons8-paid-64.png"/>
                    </v-badge>
                  </v-btn>
                </NuxtLink>
<!--                <v-btn-->
<!--                  class="ma-2 header_nav_user_part_button"-->
<!--                  outlined-->
<!--                  small-->
<!--                  @click="openFavorites"-->
<!--                  fab-->
<!--                  color="white">-->
<!--                  <v-badge-->
<!--                    bordered-->
<!--                    class="font-brigada"-->
<!--                    color="red darken-4"-->
<!--                    :content="this.$store.getters['favorites/count'] ? this.$store.getters['favorites/count'] : '0'"-->
<!--                    overlap>-->
<!--                    <img src="~/assets/icons/icons8-heart-health-64.png" :alt="$t('favorites')"/>-->
<!--                  </v-badge>-->
<!--                </v-btn>-->
<!--                <div class="favorites-modal modal">-->
<!--                  <vue-modaltor :close-scroll="false"-->
<!--                                :animation-panel="'fade'"-->
<!--                                :visible="openFavoritesModal"-->
<!--                                @hide="openFavoritesModal=false">-->
<!--                    <template #header>-->
<!--                      <div class="d-flex justify-end">-->
<!--                        <a href="javascript:void(0)"-->
<!--                           class="close-button float-right"-->
<!--                           @click="closeFavorites">-->
<!--                          <div class="in">-->
<!--                            <div class="close-button-block"></div>-->
<!--                            <div class="close-button-block"></div>-->
<!--                          </div>-->
<!--                          <div class="out">-->
<!--                            <div class="close-button-block"></div>-->
<!--                            <div class="close-button-block"></div>-->
<!--                          </div>-->
<!--                        </a>-->
<!--                      </div>-->
<!--                    </template>-->
<!--                    <template #body>-->
<!--                      <div class="modaltor__content pa-lg-5 pa-1"-->
<!--                           v-if="$store.getters['favorites/storageData'] && $store.getters['favorites/count']">-->
<!--                        <div-->
<!--                          v-for="(favorite, index) in $store.getters['favorites/storageData']"-->
<!--                          :key="index">-->
<!--                          <div class="row position-relative align-center" v-if="favorite.id">-->
<!--                            <div class="col-md-2">-->
<!--                              <v-img class="favorite_product_image cursor-pointer transition-05 width-100"-->
<!--                                     contain-->
<!--                                     :src="baseUrl + favorite.image"-->
<!--                                     :lazy-src="baseUrl + favorite.image">-->
<!--                              </v-img>-->
<!--                            </div>-->
<!--                            <div class="col-md-6 favorite_product_texts">-->
<!--                              <span class="favorite_product_texts_header">{{ favorite.name }}</span>-->
<!--                              <br>-->
<!--                              <span class="favorite_product_texts_description">{{-->
<!--                                  favorite.short_description-->
<!--                                }}</span>-->
<!--                            </div>-->
<!--                            <div class="col-md-2 favorite_product_price">-->
<!--                              <span class="favorite_product_texts_description_price">{{-->
<!--                                  $t('price')-->
<!--                                }}: {{ favorite.final_price }} грн</span>-->
<!--                              <br>-->
<!--                            </div>-->
<!--                            <div class="col-md-2 favorite_product_actions">-->
<!--                              <v-btn-->
<!--                                v-if="!$store.getters['cart/data'].find(cart => favorite.id === cart.id)"-->
<!--                                @click="addToCart(favorite)"-->
<!--                                icon>-->
<!--                                <v-icon-->
<!--                                  color="grey darken-3">mdi-cart-->
<!--                                </v-icon>-->
<!--                              </v-btn>-->
<!--                              <v-btn v-else-->
<!--                                     @click="deleteFromCart(favorite.id)"-->
<!--                                     icon>-->
<!--                                <v-icon-->
<!--                                  color="grey darken-3">mdi-cart-off-->
<!--                                </v-icon>-->
<!--                              </v-btn>-->
<!--                              <v-btn-->
<!--                                @click="deleteFromFavorites(favorite.id)"-->
<!--                                icon>-->
<!--                                <v-icon color="grey darken-3">mdi-heart-off-->
<!--                                </v-icon>-->
<!--                              </v-btn>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                          <v-divider class="favorite_products_hr" inset></v-divider>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </template>-->
<!--                  </vue-modaltor>-->
<!--                </div>-->
              </div>
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
      openFavoritesModal: false,
      language: this.$i18n.locale,
      baseUrl: process.env.BASE_URL
    }
  },
  mounted() {
    this.$store.dispatch('categories/getData', {
      language: this.language
    });
    this.getCartDataByLanguage();
    // this.$store.commit('favorites/values');
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
      } else if (routePath.includes("/en/")) {
        pushTo = routePath.replace("en/", this.$i18n.locale === "uk" ? "" : this.$i18n.locale + "/")
      } else if (routePath.includes("/en")) {
        pushTo = routePath.replace("/en", this.$i18n.locale === "uk" ? "/" : "/" + this.$i18n.locale)
      } else {
        pushTo = this.$i18n.locale !== "uk" ? "/" + this.$i18n.locale + routePath : routePath;
      }
      this.$router.push({path: pushTo});
    },
    // openFavorites() {
    //   document.getElementsByClassName('v-main')[0].classList.add("main-blured");
    //   this.openFavoritesModal = true;
    // },
    // closeFavorites() {
    //   document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
    //   this.openFavoritesModal = false;
    // },
    // deleteFromFavorites(productId) {
    //   this.$store.commit('favorites/delete', productId);
    // },
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
  width: 35%;
  display: block;
  height: auto;
}

.header_nav {
  min-width: 85%;
}

.header_nav_delivery_part {
  width: 25%;
}

.header_nav_navigation {
  min-width: 70%;
}

.header_nav_user_part {
  min-width: 45%;
}

.header_nav_user_part img {
  width: 26px;
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

.header_nav_user_part_button {
  border: none;
  width: 38px;
  height: 38px;
}

.favorite_product_image {
  height: 190px;
}

.favorite_product_texts_header {
  font-size: 30px;
}

.favorite_products_hr {
  margin: 0 8% 0 10%;
  border: 0.08vh solid rgba(86, 86, 86, 0.7);
  background-color: rgba(86, 86, 86, 0.7);
}

.favorite_product_texts_description {
  color: #565656;
}

.favorite_product_texts_description_price {
  color: #565656;
  font-size: 21px;
}

.nuxt-link-exact-active {
  color: #B71C1C !important;
}
</style>
