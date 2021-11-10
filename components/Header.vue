<template>
  <header id="header" class="d-flex animate__animated animate__fadeInDown animate__fast">
    <div class="container pl-0 mx-0 padding-for-offset-cart-modal">
      <div class="header_row">
        <div class="header_logo">
          <NuxtLink :to='localePath("/")' class="header_logo_link">
            <v-hover v-slot="{ hover }">
              <v-img
                position="left"
                :src="require('~/assets/raknroll-logo.png')"
                :lazy-src="require('~/assets/raknroll-logo.png')"
                alt="RAK'N'ROLL logo"
                contain>
              </v-img>
            </v-hover>
          </NuxtLink>
        </div>
        <div class="header_nav">
          <div class="header_nav_delivery_and_user_part d-flex align-center justify-space-between">
            <div class="header_nav_pages-menu">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li>
                    <NuxtLink class="header_nav_navigation_menu_pages_link" :to='localePath("/")'>
                      {{ $t('menuLinks.home') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link"
                              :to='localePath("/products/all-catalog/all-brands/page-1")'>{{ $t('menuLinks.shop') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link" :to='localePath("/reviews")'>
                      {{ $t('menuLinks.reviews') }}
                    </NuxtLink>
                  </li>
                  <li class="pl-5">
                    <NuxtLink class="header_nav_navigation_menu_pages_link" :to='localePath("/contact_us")'>
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
            <div class="header_nav_user_part_balance" v-if="$auth.loggedIn && $auth.user">
              <span>{{ $t('balance') }}: {{ $auth.user.balance }} ₴</span>
              <v-btn
                class="ma-2 header_nav_user_part_button"
                outlined
                small
                fab
                color="white">
                <img src="~/assets/icons/wallet.png" alt="Top up wallet"/>
              </v-btn>
            </div>
          </div>
          <div class="header_nav_links d-flex align-center justify-space-between pt-4">
            <div class="header_nav_navigation">
              <nav class="d-block">
                <ul class="list-style-none header_nav_navigation_menu d-flex justify-space-between snip1143 pl-0">
                  <li v-for="category in $store.getters['categories/data']">
                    <NuxtLink class="header_nav_navigation_menu_link"
                              :to='localePath("/products/"+ category.slug +"/all-brands/page-1")'>{{ category.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header_nav_user_section">
              <div class="header_nav_user_part d-flex justify-end align-center">
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
                    :content="this.$store.getters['favorites/count'] ? this.$store.getters['favorites/count'] : '0'"
                    overlap>
                    <img src="~/assets/icons/icons8-heart-health-64.png" :alt="$t('favorites')"/>
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
                           v-if="$store.getters['favorites/storageData'] && $store.getters['favorites/count']">
                        <div
                          v-for="(favorite, index) in $store.getters['favorites/storageData']"
                          :key="index">
                          <div class="row favorite_products align-center" v-if="favorite.id">
                            <div class="col-md-2">
                              <v-img class="favorite_product_image cursor-pointer"
                                     contain
                                     :src="'http://raknroll.ua/' + favorite.image"
                                     :lazy-src="'http://raknroll.ua/' + favorite.image">
                              </v-img>
                            </div>
                            <div class="col-md-6 favorite_product_texts">
                              <span class="favorite_product_texts_header">{{ favorite.name }}</span>
                              <br>
                              <span class="favorite_product_texts_description">{{
                                  favorite.short_description
                                }}</span>
                            </div>
                            <div class="col-md-2 favorite_product_price">
                              <span class="favorite_product_texts_description_price">{{
                                  $t('price')
                                }}: {{ favorite.final_price }} ₴</span>
                              <br>
                              <v-rating
                                :value="parseFloat(favorite.rating)"
                                color="red darken-4"
                                dense
                                half-increments
                                readonly
                                size="14">
                              </v-rating>
                            </div>
                            <div class="col-md-2 favorite_product_actions">
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
                <v-menu
                  v-if="$auth.loggedIn && $auth.user"
                  bottom
                  origin="center center"
                  transition="scale-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-2 header_nav_user_part_button"
                      outlined
                      small
                      fab
                      v-bind="attrs"
                      v-on="on"
                      color="white">
                      <img src="~/assets/icons/icons8-account-64.png" :alt="$t('account')"/>
                    </v-btn>
                  </template>
                  <v-list>
                    <NuxtLink
                      class="header_nav_user_part_actions"
                      :to='localePath("/user/" + $auth.user.slug)'>
                      <v-list-item>
                        <v-list-item-title>{{ $t('profile') }}</v-list-item-title>
                      </v-list-item>
                    </NuxtLink>
                    <a @click="logout" href="javascript:void(0)" class="header_nav_user_part_actions">
                      <v-list-item>
                        <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
                      </v-list-item>
                    </a>
                  </v-list>
                </v-menu>
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
                            :src="require('~/assets/raknroll-logo.png')"
                            :lazy-src="require('~/assets/raknroll-logo.png')"
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
                            <div class="row">
                              <div class="col-md-12">
                                <v-alert
                                  v-if="loginErrors.exists"
                                  color="red darken-4"
                                  dismissible
                                  type="error"
                                  border="left"
                                  elevation="2"
                                  light
                                  colored-border
                                  class="red--text text--darken-4"
                                  icon="mdi-alert-octagon-outline">
                                    <span v-for="error in loginErrors.data">
                                      - {{ error[0] }}
                                    </span>
                                </v-alert>
                              </div>
                            </div>
                            <div class="row pt-3">
                              <div class="col-md-12">
                                <v-form
                                  ref="loginForm"
                                  v-model="loginFormValid"
                                  lazy-validation>
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          light
                                          filled
                                          rounded
                                          color="black"
                                          name="email"
                                          v-model="loginForm.email"
                                          :rules="emailRules"
                                          :counter="50"
                                          :label="$t('emailAddress') +  ' *'"
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
                                          :append-icon="loginFormPasswordShowIn ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="passwordRules"
                                          :type="loginFormPasswordShowIn ? 'text' : 'password'"
                                          name="password"
                                          :counter="50"
                                          :label="$t('password') +  ' *'"
                                          required
                                          @click:append="loginFormPasswordShowIn = !loginFormPasswordShowIn">
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
                                          {{ $t('login') }}
                                        </v-btn>
                                      </div>
                                    </div>
                                    <div class="row mt-5">
                                      <div class="col-md-12 text-center">
                                        <span>- {{ $t('or') }} -</span>
                                      </div>
                                    </div>
                                    <div class="row mt-1">
                                      <div class="col-md-12 text-center">
                                        <span>{{ $t('signInWith') }}:</span>
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
                                      <span>{{ $t('doNotHaveAccount') }}? </span><span
                                      class="login-register-modal_go-to-register_button cursor-pointer red--text text--darken-4"
                                      @click="e1 = 2">{{ $t('register') }}</span>
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
                              <div class="col-md-12">
                                <v-alert
                                  v-if="registerErrors.exists"
                                  color="red darken-4"
                                  dismissible
                                  type="error"
                                  border="left"
                                  elevation="2"
                                  light
                                  colored-border
                                  class="red--text text--darken-4"
                                  icon="mdi-alert-octagon-outline">
                                    <span v-for="error in registerErrors.data">
                                      - {{ error[0] }}
                                    </span>
                                </v-alert>
                              </div>
                            </div>
                            <div class="row pt-3">
                              <div class="col-md-12">
                                <v-form
                                  ref="registerForm"
                                  v-model="registerFormValid"
                                  lazy-validation>
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          light
                                          filled
                                          rounded
                                          color="black"
                                          name="name"
                                          v-model="registerForm.name"
                                          :rules="nameRules"
                                          :counter="50"
                                          :label="$t('name') + ' *'"
                                          required>
                                        </v-text-field>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          light
                                          filled
                                          type="email"
                                          rounded
                                          name="email"
                                          color="black"
                                          v-model="registerForm.email"
                                          :rules="emailRules"
                                          :counter="50"
                                          :label="$t('emailAddress') + ' *'"
                                          required>
                                        </v-text-field>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12 py-0">
                                        <v-text-field
                                          light
                                          filled
                                          v-mask="'(###) ### - ## - ##'"
                                          type="tel"
                                          hint="For example - 0965990909"
                                          rounded
                                          name="phone"
                                          color="black"
                                          v-model="registerForm.phone"
                                          :label="$t('phone') + ' *'"
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
                                          v-model="registerForm.password"
                                          :append-icon="registerFormPasswordShowIn ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="passwordRules"
                                          :type="registerFormPasswordShowIn ? 'text' : 'password'"
                                          name="password"
                                          :counter="50"
                                          :label="$t('password') + ' *'"
                                          required
                                          @click:append="registerFormPasswordShowIn = !registerFormPasswordShowIn">
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
                                          v-model="registerForm.confirm_password"
                                          :append-icon="registerFormPasswordConfirmedShow ? 'mdi-eye' : 'mdi-eye-off'"
                                          :rules="passwordConfirmedRules"
                                          :type="registerFormPasswordConfirmedShow ? 'text' : 'password'"
                                          name="confirm_password"
                                          :counter="50"
                                          :label="$t('confirmPassword') + ' *'"
                                          required
                                          @click:append="registerFormPasswordConfirmedShow = !registerFormPasswordConfirmedShow">
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
                                          @click="customRegister">
                                          {{ $t('register') }}
                                        </v-btn>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row mt-5">
                                    <div class="col-md-12 text-center mt-5 login-register-modal_go-to-register">
                                      <span>{{ $t('doYouHaveAccount') }}? </span><span
                                      class="login-register-modal_go-to-register_button cursor-pointer red--text text--darken-4"
                                      @click="e1 = 1">{{ $t('login') }}</span>
                                    </div>
                                  </div>
                                </v-form>
                              </div>
                            </div>
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
                  <img src="~/assets/icons/icons8-account-64.png" :alt="$t('account')"/>
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
      openFavoritesModal: false,
      openLoginModal: false,
      registerFormValid: false,
      loginFormValid: false,
      loginFormPasswordShowIn: false,
      registerFormPasswordShowIn: false,
      registerFormPasswordConfirmedShow: false,
      language: this.$i18n.locale,
      loginErrors: {
        exists: false,
        data: []
      },
      registerErrors: {
        exists: false,
        data: []
      },
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        email: '',
        password: '',
        phone: '',
        confirm_password: '',
      },
      nameRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('name')}),
        v => (v && v.length > 3) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('more'),
          qty: '4',
        }),
        v => (v && v.length <= 50) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('less'),
          qty: '50',
        }),
      ],
      emailRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('emailAddress')}),
        v => /.+@.+/.test(v) || this.$t('validationText.mustBeValid', {fieldName: this.$t('emailAddress')}),
      ],
      passwordRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('password')}),
        v => (v && v.length <= 50) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('password'),
          moreOrLess: this.$t('less'),
          qty: '50',
        }),
        v => (v && v.length > 5) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('password'),
          moreOrLess: this.$t('more'),
          qty: '6',
        }),
      ],
      passwordConfirmedRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('confirmPassword')}),
        v => (v && v === this.registerForm.password) || this.$t('validationText.dontMuch', {fieldName: this.$t('password')}),
      ],
    }
  },
  created() {
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
    openLogin() {
      document.getElementsByClassName('v-main')[0].classList.add("main-blured");
      this.openLoginModal = true;
    },
    closeLogin() {
      document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
      this.openLoginModal = false;
      this.$refs.loginForm.reset();
      this.$refs.registerForm.reset();
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
    customLogin() {
      if ((this.$refs.loginForm.validate()) && !this.$auth.loggedIn) {
        this.$auth.loginWith('laravelJWT', {
          data: this.loginForm
        }).then(response => {
          if (response.data.success) {
            this.closeLogin();
            this.$toast.success("Successfully logged in " + response.data.user_name, {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: false,
              closeButton: "button",
              icon: true,
              rtl: false
            });
            this.loginErrors = Object.assign({}, this.loginErrors, {
              data: [],
              exists: false
            })
            this.$refs.loginForm.reset();
          }
        }).catch((error) => {
          if (error.response.data.errors) {
            this.loginErrors = Object.assign({}, this.loginErrors, {data: error.response.data.errors, exists: true})
          }
        })
      }
    },
    async customRegister() {
      if (this.$refs.registerForm.validate() && !this.$auth.loggedIn) {
        await this.$axios.post('/api/auth/register', this.registerForm).then(response => {
          if (response.data.success) {
            this.registerErrors = Object.assign({}, this.registerErrors, {
              data: [],
              exists: false
            });
            this.loginForm = Object.assign({}, this.loginForm, {
              email: this.registerForm.email,
              password: this.registerForm.password
            });
            this.e1 = 1;
            this.$toast.success("Successfully registered in", {
              position: "top-right",
              timeout: 5000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: true,
              hideProgressBar: false,
              closeButton: "button",
              icon: true,
              rtl: false
            });
            this.$refs.registerForm.reset();
          }
        }).catch((error) => {
          if (error.response.data.errors) {
            this.registerErrors = Object.assign({}, this.registerErrors, {
              data: error.response.data.errors,
              exists: true
            });
          }
        })
      }
    },
    socialLogin(service) {
      window.location.href = 'https://raknroll.ua/api/auth/login/' + service;
    },
    async logout() {
      await this.$auth.logout()
      this.$toast.error("Successfully logged out", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
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
  z-index: 999999999999;
}

.header_row {
  display: flex;
}

.header_logo {
  min-width: 15%;
}

.header_logo_link {
  margin-left: 1vw;
  width: 35%;
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

.header_nav_user_part_balance {
  font-size: 0.875vw;
}

.header_nav_user_part img, .header_nav_user_part_balance img {
  width: 1.3vw;
}

.header_nav_navigation_menu_link {
  font-size: 22px;
  line-height: 1;
  color: #feffff;
  transition: .5s;
  text-decoration: none;
}

.header_nav_navigation_menu_pages_link {
  font-size: 14px;
  line-height: 1;
  color: #feffff;
  text-transform: uppercase;
  transition: .5s;
  text-decoration: none;
}

.header_nav_navigation_menu_pages_link:hover {
  color: #B71C1C !important;
  transition: .5s;
}

.header_nav_user_part_actions {
  font-size: 1vw;
  color: #feffff;
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
