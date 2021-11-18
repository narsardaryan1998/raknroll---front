<template>
  <header id="mobileHeader"
          class="custom-animation-fade-to-down">
    <div class="mobileHeader_nav d-flex justify-space-between align-start container container-padding">
      <div class="mobileHeader_logo">
        <NuxtLink :to='localePath("/")' class="mobileHeader_logo_link">
          <v-img
            width="70px"
            class="mobileHeader_logo_link_img"
            :src="require('~/assets/raknroll-logo.png')"
            :lazy-src="require('~/assets/raknroll-logo.png')"
            alt="RAK'N'ROLL logo"
            contain>
          </v-img>
        </NuxtLink>
      </div>
      <div class="mobileHeader_phone-and-language d-flex justify-space-around">
        <div class="mobileHeader-language">
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
        <div class="mobileHeader_phone">
          <v-select
            :items="['099969998', '093091885', '041030006']"
            menu-props="auto"
            color="red darken-4"
            value="099969998"
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
          <v-btn
            class="ma-2 mobileHeader_actions-favorites"
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
                  @click="openMenuModal"
                  onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                  aria-label="Main Menu">
            <svg width="40" height="40" viewBox="0 0 100 100">
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
        <ul class="list-style-none header_nav_navigation_menu pl-0">
          <li v-for="category in $store.getters['categories/data']">
            <NuxtLink class="header_nav_navigation_menu_link transition-05 white--text"
                      :to='localePath("/products/"+ category.slug +"/all-brands/page-1")'>{{ category.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
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
      document.getElementsByClassName('v-main')[0].classList.add("main-blured");
      this.openFavoritesModal = true;
    },
    closeFavorites() {
      document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
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
        document.getElementsByClassName('mobileHeader_modal')[0].classList.add('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.add("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.add("main-blured");
      } else {
        this.menuModalIsOpened = false;
        document.getElementsByClassName('mobileHeader_modal')[0].classList.remove('mobileHeader_modal_open');
        document.getElementsByTagName('html')[0].classList.remove("overflow-y-hidden");
        document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
      }
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
  width: 30px;
  height: 30px;
}

.mobileHeader_phone-and-language {
  width: 40%;
}

.mobileHeader_actions, .mobileHeader_logo {
  width: 30%;
}

.mobileHeader_phone {
  width: 60%;
}

.mobileHeader-language {
  width: 40%;
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
  animation: ease 0.5s;
}
</style>
