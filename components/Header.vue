<template>
  <header id="header" class="d-flex animate__animated animate__fadeInDown animate__fast">
    <div class="container pl-0 mx-0 pr-5">
      <div class="header_row">
        <div class="header_logo">
          <NuxtLink :to='localePath("/")' class="header_logo_link">
            <v-hover v-slot="{ hover }">
              <v-img
                position="left"
                src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                lazy-src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                alt="RAK'N'ROLL logo"
                contain>
              </v-img>
            </v-hover>
          </NuxtLink>
        </div>
        <div class="header_nav">
          <div class="header_nav_delivery_and_user_part d-flex align-center">
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
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-4">
            <div class="header_nav_navigation">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/")'>{{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link"
                              :to='localePath("/products/all-catalog/all-brands/page-1")'>{{ $t('menuLinks.products') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/about_us")'>
                      {{ $t('menuLinks.about_us') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/bonuses")'>
                      {{ $t('menuLinks.bonuses') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/delivery")'>
                      {{ $t('menuLinks.delivery') }}
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/contact_us")'>
                      {{ $t('menuLinks.contact_us') }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_user_section">
              <div class="header_nav_user_part d-flex justify-end">
                <v-btn
                  class="ma-2 header_nav_user_part_button"
                  outlined
                  small
                  @click="openFavorites"
                  fab
                  color="white">
                  <v-badge
                    bordered
                    class="font-brigada"
                    color="red darken-4"
                    :content="this.$store.getters['favorites/count'].count ? this.$store.getters['favorites/count'].count : '0'"
                    overlap>
                    <img src="~/assets/icons/icons8-heart-health-64.png" :alt="$t('userButtons.favorites')"/>
                  </v-badge>
                </v-btn>
                <div class="favorites-modal modal">
                  <vue-modaltor :close-scroll="false" :visible="openFavoritesModal" @hide="openFavoritesModal=false">
                    <template #header>
                      <div class="d-flex justify-end">
                        <v-btn
                          @click="closeFavorites"
                          class="float-right"
                          icon
                          color="white">
                          <v-icon
                            color="black">mdi-close
                          </v-icon>
                        </v-btn>
                      </div>
                    </template>
                    <template #body>
                      <div class="modaltor__content p-5"
                           v-if="$store.getters['favorites/data'].favoriteProducts && $store.getters['favorites/data'].favoriteProducts.favorite_products.length">
                        <div
                          v-for="(favoriteProduct, index) in $store.getters['favorites/data'].favoriteProducts.favorite_products"
                          :key="index">
                          <div class="row favorite_products align-center" v-if="favoriteProduct.product">
                            <div class="col-md-2">
                              <v-img class="favorite_product_image cursor-pointer"
                                     contain
                                     :src="'http://raknroll.ua/' + favoriteProduct.product.image"
                                     :lazy-src="'http://raknroll.ua/' + favoriteProduct.product.image">
                              </v-img>
                            </div>
                            <div class="col-md-6 favorite_product_texts">
                              <span class="favorite_product_texts_header">{{ favoriteProduct.product.name }}</span>
                              <br>
                              <span class="favorite_product_texts_description">{{
                                  favoriteProduct.product.short_description
                                }}</span>
                            </div>
                            <div class="col-md-2 favorite_product_price">
                              <span class="favorite_product_texts_description_price">{{
                                  $t('price')
                                }}: {{ favoriteProduct.product.final_price }} ₴</span>
                              <br>
                              <v-rating
                                :value="parseFloat(favoriteProduct.product.rating)"
                                color="red darken-4"
                                dense
                                half-increments
                                readonly
                                size="14">
                              </v-rating>
                            </div>
                            <div class="col-md-2 favorite_product_actions">
                              <v-btn v-if="!favoriteProduct.cart_product"
                                     @click="addToCart(favoriteProduct.product.id, index)"
                                     icon>
                                <v-icon
                                  color="grey darken-3">mdi-cart
                                </v-icon>
                              </v-btn>
                              <v-btn v-else
                                     @click="deleteFromCart(favoriteProduct.cart_product.id, index, favoriteProduct.product.id)"
                                     icon>
                                <v-icon
                                  color="grey darken-3">mdi-cart-off
                                </v-icon>
                              </v-btn>
                              <v-btn
                                @click="deleteFromFavorites(favoriteProduct.id, index, favoriteProduct.product.id)"
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
                <NuxtLink class="header_nav_navigation_menu_link" :to='localePath("/cart")'>
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
                      :content="this.$store.getters['cart/count'].count ? this.$store.getters['cart/count'].count : '0'"
                      overlap>
                      <img src="~/assets/icons/icons8-paid-64.png" :alt="$t('userButtons.cart')"/>
                    </v-badge>
                  </v-btn>
                </NuxtLink>
                <NuxtLink
                  v-if="$auth.loggedIn && $auth.user"
                  class="header_nav_navigation_menu_link"
                  :to='localePath("/user/" + $auth.user.slug)'>
                  <v-btn
                    class="ma-2 header_nav_user_part_button"
                    outlined
                    small
                    fab
                    color="white">
                    <img src="~/assets/icons/icons8-account-64.png" :alt="$t('userButtons.account')"/>
                  </v-btn>
                </NuxtLink>
                <div class="login-register-modal modal">
                  <vue-modaltor :close-scroll="false" :visible="openLoginModal" @hide="closeLogin">
                    <template #header>
                      <div class="d-flex justify-end">
                        <v-btn
                          @click="closeLogin"
                          class="float-right"
                          icon
                          color="white">
                          <v-icon
                            color="black">mdi-close
                          </v-icon>
                        </v-btn>
                      </div>
                    </template>
                    <template #body>
                      <div class="row justify-center">
                        <div class="col-md-5 pt-0">
                          <v-img
                            position="center"
                            src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                            lazy-src="https://raknroll.com.ua/index.php?option=com_gridbox&task=gridbox.compressImagelaptop&image=%2Fimages%2Fheaders%2Fimg_7802.png"
                            alt="RAK'N'ROLL logo"
                            contain>
                          </v-img>
                        </div>
                      </div>
                      <v-stepper light v-model="e1">
                        <v-stepper-items>
                          <v-stepper-content
                            class="pt-0"
                            :key="`1-content`"
                            :step="1">
                            <div class="row pt-3">
                              <div class="col-md-12">
                                <v-form
                                  ref="loginForm"
                                  v-model="loginForm.valid"
                                  lazy-validation>
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          light
                                          filled
                                          rounded
                                          color="black"
                                          v-model="loginForm.username"
                                          :rules="usernameRules"
                                          :counter="50"
                                          label="Username"
                                          required>
                                        </v-text-field>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          filled
                                          light
                                          rounded
                                          color="black"
                                          v-model="loginForm.password"
                                          :append-icon="loginForm.passwordShowInLogin ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="passwordRules"
                                          :type="loginForm.passwordShowInLogin ? 'text' : 'password'"
                                          name="password"
                                          :counter="50"
                                          label="Password"
                                          required
                                          @click:append="loginForm.passwordShowInLogin = !loginForm.passwordShowInLogin">
                                        </v-text-field>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-btn
                                          large
                                          rounded
                                          class="width-100"
                                          dark
                                          @click="customLogin">
                                          Submit
                                        </v-btn>
                                      </div>
                                    </div>
                                    <div class="row mt-5">
                                      <div class="col-md-12 text-center">
                                        <span>- OR -</span>
                                      </div>
                                    </div>
                                    <div class="row mt-1">
                                      <div class="col-md-12 text-center">
                                        <span>Sign in with:</span>
                                      </div>
                                    </div>
                                    <div class="d-flex justify-center mt-5 align-center">
                                      <div class="mr-5">
                                        <v-btn
                                          @click="socialLogin('facebook')"
                                          color="light-blue darken-4"
                                          fab
                                          small
                                          light>
                                          <img src="~/assets/fb-logo.png" alt="Facebook login"/>
                                        </v-btn>
                                      </div>
                                      <div>
                                        <div class="ml-5">
                                          <v-btn
                                            @click="socialLogin('google')"
                                            fab
                                            light
                                            small>
                                            <img src="~/assets/google-logo.png" alt="Google login"/>
                                          </v-btn>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row mt-5">
                                    <div class="col-md-12 text-center mt-5 login-register-modal_go-to-register">
                                      <span>Don't have an account? </span><span
                                      class="login-register-modal_go-to-register_button cursor-pointer" @click="e1 = 2">Register</span>
                                    </div>
                                  </div>
                                </v-form>
                              </div>
                            </div>
                          </v-stepper-content>
                          <v-stepper-content
                            :key="`2-content`"
                            :step="2">
                            <div class="row">
                              <h1>Register</h1>
                            </div>
                            <v-btn
                              color="primary"
                              @click="e1 = 1">
                              Back
                            </v-btn>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>
                    </template>
                  </vue-modaltor>
                </div>
                <v-btn
                  v-if="!$auth.loggedIn && !$auth.user"
                  class="ma-2 header_nav_user_part_button"
                  @click="openLogin"
                  outlined
                  small
                  fab
                  color="white">
                  <img src="~/assets/icons/icons8-account-64.png" :alt="$t('userButtons.account')"/>
                </v-btn>
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
      e1: 1,
      steps: 2,
      openFavoritesModal: false,
      openLoginModal: false,
      language: this.$i18n.locale,
      loginForm: {
        valid: false,
        username: '',
        password: '',
        passwordShowInLogin: false,
      },
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length > 7) || 'Username must be more than 8 characters',
        v => (v && v.length <= 50) || 'Username must be less than 50 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 50) || 'Max 50 characters',
        v => (v && v.length > 7) || 'Min 8 characters',
      ],
    }
  },
  created() {
    this.$store.dispatch('cart/getCount');
    this.$store.dispatch('favorites/getCount');
    this.$store.dispatch('favorites/getData', {
      language: this.language,
    });
  },
  methods: {
    changeLanguage() {
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
    openLogin() {
      document.getElementsByClassName('v-main')[0].classList.add("main-blured");
      this.openLoginModal = true;
    },
    closeLogin() {
      document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
      this.openLoginModal = false;
    },
    deleteFromFavorites(favoriteProductId, index, productId) {
      this.$store.commit('favorites/deleteFavoriteProduct', index);
      this.$store.commit('products/deleteFavoriteProduct', productId);
      this.$store.commit('home/deleteFavoriteProduct', productId);
      this.$store.commit('favorites/changeCount', -1);
      this.$store.dispatch('favorites/delete', {
        favoriteProductId
      });
    },
    addToCart(productId, index) {
      this.$store.dispatch('cart/store', {
        productId
      }).then(response => {
        if (response.data.success) {
          this.$store.commit('favorites/addProductToCart', {
            cart_product: {
              id: response.data.success.id
            },
            index
          });
          this.$store.commit('products/addProductToCart', {
            cart_product: {
              id: response.data.success.id
            },
            productId
          });
          this.$store.commit('home/addProductToCart', {
            cart_product: {
              id: response.data.success.id
            },
            productId
          });
          this.$store.commit('cart/changeCount', 1);
        }
      });
    },
    deleteFromCart(cartProductId, index, productId) {
      this.$store.commit('products/deleteCartProduct', productId);
      this.$store.commit('home/deleteCartProduct', productId);
      this.$store.commit('favorites/deleteCartProduct', index);
      this.$store.commit('cart/changeCount', -1);
      this.$store.dispatch('cart/delete', {
        cartProductId
      })
    },
    customLogin() {
      if (this.$refs.loginForm.validate()) {
        this.closeLogin();
      }
    },
    socialLogin(service) {
      window.location.href = 'https://raknroll.ua/api/auth/login/' + service;
    },
  },
}
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 999999999999;
  transition: 1s !important;
}

.header_row {
  display: flex;
}

.header_logo {
  min-width: 15%;
}

.header_logo_link {
  width: 65%;
  position: relative;
  display: block;
  align-self: flex-end;
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
  width: 1.3vw;
}

.header_nav_navigation_menu_link {

  font-size: 1vw;
  line-height: 1;
  color: #feffff;
  text-transform: uppercase;
  transition: .5s;
  text-decoration: none;
}

.header_nav_navigation_menu_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.header_nav_user_part_button {
  border: none;
  width: 1.950vw;
  height: 1.950vw;
}

.nuxt-link-exact-active {
  color: #B71C1C !important;
}

.favorite_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

.favorite_product_texts_header {
  font-size: 1.7vw;
}

.favorite_products {
  position: relative;
}

.favorite_products_hr {
  margin: 0 8% 0 10%;
  border: 0.04vw solid rgba(86, 86, 86, 0.7);
  background-color: rgba(86, 86, 86, 0.7);
}

.favorite_product_texts_description {
  color: #565656;
}

.favorite_product_texts_description_price {
  color: #565656;
  font-size: 1.1vw;
}
</style>
