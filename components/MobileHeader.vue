<template>
  <header id="mobileHeader"
          class="custom-animation-fade-to-down">
    <div class="mobileHeader_nav d-flex justify-space-between align-sm-start align-center container container-padding products_show_products_black_background">
      <div class="mobileHeader_logo">
        <NuxtLink :to='localePath("/")' class="mobileHeader_logo_link">
          <v-img
            width="70px"
            class="mobileHeader_logo_link_img"
            :src="require('~/assets/images/raknroll-logo.png')"
            :lazy-src="require('~/assets/images/raknroll-logo.png')"
            alt="RAK'N'ROLL logo"
            contain>
          </v-img>
        </NuxtLink>
      </div>
      <div class="mobileHeader_phone-and-language d-flex justify-space-around">
        <div class="mobileHeader-language">
          <v-select
            v-show="!menuModalIsOpened"
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
        <div class="mobileHeader_phone">
          <v-select
            v-show="!menuModalIsOpened"
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
      <div class="mobileHeader_actions d-flex justify-end align-center">
        <div>
          <div class="favorites-modal modal">
            <vue-modaltor :close-scroll="false"
                          :animation-panel="'fade'"
                          :visible="openFavoritesModal"
                          @hide="openFavoritesModal=false">
              <template #header>
                <div class="d-flex justify-end">
                  <a href="javascript:void(0)"
                     class="close-button float-right"
                     @click="closeFavorites">
                    <div class="in">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                    <div class="out">
                      <div class="close-button-block"></div>
                      <div class="close-button-block"></div>
                    </div>
                  </a>
                </div>
              </template>
              <template #body>
                <div class="modaltor__content pa-lg-5 pa-1"
                     v-if="$store.getters['favorites/storageData'] && $store.getters['favorites/count']">
                  <div
                    v-for="(favorite, index) in $store.getters['favorites/storageData']"
                    :key="index">
                    <div class="row position-relative align-center" v-if="favorite.id">
                      <div class="col-12">
                        <v-img class="favorite_product_image cursor-pointer transition-05 width-100"
                               contain
                               :src="baseUrl + favorite.image"
                               :lazy-src="baseUrl + favorite.image">
                        </v-img>
                      </div>
                      <div class="col-12 favorite_product_texts">
                        <span class="favorite_product_texts_header">{{ favorite.name }}</span>
                        <br>
                        <span class="favorite_product_texts_description">{{
                            favorite.short_description
                          }}</span>
                      </div>
                      <div class="col-6 favorite_product_price">
                              <span class="favorite_product_texts_description_price">{{
                                  $t('price')
                                }}: {{ favorite.final_price }} ₴</span>
                        <br>
                      </div>
                      <div class="col-6 favorite_product_actions d-flex justify-end">
                        <v-btn
                          v-if="!$store.getters['cart/data'].find(cart => favorite.id === cart.id)"
                          @click="addToCart(favorite)"
                          icon>
                          <v-icon
                            color="grey darken-3">mdi-cart
                          </v-icon>
                        </v-btn>
                        <v-btn v-else
                               @click="deleteFromCart(favorite.id)"
                               icon>
                          <v-icon
                            color="grey darken-3">mdi-cart-off
                          </v-icon>
                        </v-btn>
                        <v-btn
                          @click="deleteFromFavorites(favorite.id)"
                          icon>
                          <v-icon color="grey darken-3">mdi-heart-off
                          </v-icon>
                        </v-btn>
                      </div>
                    </div>
                    <v-divider class="favorite_products_hr" inset></v-divider>
                  </div>
                </div>
              </template>
            </vue-modaltor>
          </div>
          <v-btn
            v-show="!menuModalIsOpened"
            class="mr-0 mr-sm-2 ma-2 mobileHeader_actions-favorites"
            outlined
            small
            @click="openFavorites"
            fab
            color="white">
            <v-badge
              bordered
              class="font-brigada"
              color="red darken-4"
              :content="this.$store.getters['favorites/count'] ? this.$store.getters['favorites/count'] : '0'"
              overlap>
              <img src="~/assets/icons/icons8-heart-health-64.png" :alt="$t('favorites')"/>
            </v-badge>
          </v-btn>
        </div>
        <div>
          <button class="menu"
                  ref="menuHamburgerButton"
                  @click="openMenuModal"
                  onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                  aria-label="Main Menu">
            <svg width="35" height="35" viewBox="0 0 100 100">
              <path class="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
              <path class="line line2" d="M 20,50 H 80"/>
              <path class="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="mobileHeader_modal text-center">
      <nav class="d-block">
        <ul class="list-style-none mobileHeader_modal_nav_navigation_menu pl-0">
          <li v-for="(category, index) in $store.getters['categories/data']" class="pt-5">
            <a href="javascript:void(0)"
               @click="goToPath(localePath('/products/'+ category.slug +'/all-brands/page-1'))"
               class="mobileHeader_modal_nav_navigation_menu_link transition-05 white--text">{{ category.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="row mobileHeader_modal_nav_navigation_pages mt-8">
        <div class="col-12">
          <nav class="d-block">
            <ul class="list-style-none pl-0 d-flex justify-center">
              <li>
                <a href="javascript:void(0)"
                   @click="goToPath(localePath('/'))"
                   class="list-style-none mobileHeader_modal_nav_navigation_page pl-0">
                  {{ $t('menuLinks.home') }}</a>
              </li>
              <li>
                <a href="javascript:void(0)"
                   @click="goToPath(localePath('/reviews'))"
                   class="list-style-none mobileHeader_modal_nav_navigation_page pl-4">
                  {{ $t('menuLinks.reviews') }}</a>
              </li>
              <li>
                <a href="javascript:void(0)"
                   @click="goToPath(localePath('/contact_us'))"
                   class="list-style-none mobileHeader_modal_nav_navigation_page pl-4">
                  {{ $t('menuLinks.contact_us') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row footer_socialite mt-5 mx-0">
        <div class="col-12 d-flex justify-center px-0">
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              max-width="30"
              :src="require('~/assets/images/fb-logo-red.png')"
              :lazy-src="require('~/assets/images/fb-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
              class="ml-3"
              max-width="30"
              :src="require('~/assets/images/instaram-logo-red.png')"
              :lazy-src="require('~/assets/images/instaram-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              class="ml-3"
              max-width="30"
              :src="require('~/assets/images/yt-logo-red.png')"
              :lazy-src="require('~/assets/images/yt-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
              class="ml-3"
              max-width="30"
              :src="require('~/assets/images/whatsapp-logo-red.png')"
              :lazy-src="require('~/assets/images/whatsapp-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
              class="ml-3"
              max-width="30"
              :src="require('~/assets/images/viber-logo-red.png')"
              :lazy-src="require('~/assets/images/viber-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
          <v-hover
            v-slot="{ hover }">
            <v-img
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-duration="1000"
              class="ml-3"
              max-width="30"
              :src="require('~/assets/images/telegram-logo-red.png')"
              :lazy-src="require('~/assets/images/telegram-logo-red.png')"
              contain>
            </v-img>
          </v-hover>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ModalHeader",
  data() {
    return {
      openFavoritesModal: false,
      menuModalIsOpened: false,
      language: this.$i18n.locale,
      baseUrl: process.env.BASE_URL
    }
  },
  mounted() {
    this.$store.dispatch('categories/getData', {
      language: this.language
    });
    this.getCartDataByLanguage();
    this.$store.commit('favorites/values');
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
    openFavorites() {
      document.getElementById('cartModal').classList.add("z-index-minus");
      document.getElementsByClassName('v-main')[0].classList.add("main-blured");
      document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden");
      this.openFavoritesModal = true;
    },
    closeFavorites() {
      document.getElementById('cartModal').classList.remove("z-index-minus");
      document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
      document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden");
      this.openFavoritesModal = false;
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
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
    openMenuModal() {
      if (!this.menuModalIsOpened) {
        this.menuModalIsOpened = true;
        document.getElementById('cartModal').classList.add("z-index-minus");
        document.getElementsByClassName('mobileHeader_modal')[0].classList.add('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.add("main-blured");
        document.getElementsByTagName('footer')[0].classList.add("main-blured");
      } else {
        this.menuModalIsOpened = false;
        document.getElementById('cartModal').classList.remove("z-index-minus");
        document.getElementsByClassName('mobileHeader_modal')[0].classList.remove('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
        document.getElementsByTagName('footer')[0].classList.remove("main-blured");
      }
    },
    goToPath(path) {
      this.$router.push(path);
      this.$refs.menuHamburgerButton.click();
    }
  },
}
</script>

<style scoped>
#mobileHeader {
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.mobileHeader_actions-favorites {
  border: none;
}

.mobileHeader_actions-favorites img {
  width: 27px;
  height: 27px;
}

.mobileHeader_phone-and-language {
  width: 50%;
}

.mobileHeader_actions, .mobileHeader_logo {
  width: 25%;
}

.mobileHeader_phone {
  width: 70%;
}

.mobileHeader-language {
  width: 30%;
}

.mobileHeader_nav {
  z-index: 1000000;
  position: fixed;
  top: 0;
}

.mobileHeader_modal {
  padding-top: 10vh;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 24%);
  position: fixed;
  top: 0;
  z-index: 10000;
  transform: translateX(100%);
  transition: .5s;
}

.mobileHeader_modal_open {
  transform: translateX(0%);
  transition: .5s;
}

.mobileHeader_modal_nav_navigation_menu li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.mobileHeader_modal_nav_navigation_menu_link {
  font-size: 20px;
}

.mobileHeader_modal_nav_navigation_page {
  color: white;
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
