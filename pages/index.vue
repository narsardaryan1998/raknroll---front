<template>
  <div>
    <Intro></Intro>
    <div id="discounted">
      <div class="container container-padding">
        <div class="discounted_top_section d-flex justify-space-between align-center">
          <div class="component-top-header d-flex align-center"
               data-aos="fade-right"
               data-aos-duration="1500"
               data-aos-once="true">
            <div>
              <hr class="component-top-header-hr">
            </div>
            <div class="ml-4">
              <span>Discounted</span>
            </div>
          </div>
        </div>
      </div>
      <div class="discounted_products margin-top-from-header mx-4"
           ref="discountedProducts"
           data-aos="fade-right"
           data-aos-delay="700"
           data-aos-duration="1500">
        <div class="d-flex" v-swiper="swiperOption">
          <div class="swiper-wrapper"
               v-for="(product, index) in $store.getters['home/data'].discountedProducts" :key="product.slug">
            <div class="swiper-slide">
              <v-card
                elevation="0"
                dark
                class="mx-auto my-12 mt-0 products_show_product"
                max-width="374">
                <v-hover
                  v-slot="{ hover }">
                  <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                    <v-img class="products_show_product_image"
                           :class="{ 'opacity-is-50': hover }"
                           :src="'http://raknroll.ua/' + product.image"
                           :lazy-src="'http://raknroll.ua/' + product.image">
                    </v-img>
                  </NuxtLink>
                </v-hover>
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-text class="p-0">
                  <v-row
                    class="mx-0"
                    align="center">
                    <v-rating
                      :value="parseFloat(product.rating)"
                      color="red darken-4"
                      dense
                      half-increments
                      readonly
                      size="14">
                    </v-rating>
                    <div class="grey--text ml-2 font-brigada">| {{ product.final_price }} ₴
                    </div>
                  </v-row>
                  <div class="my-4 subtitle-1">
                  </div>
                  <div>{{ product.short_description }}
                  </div>
                </v-card-text>
                <v-card-actions class="p-0">
                  <v-bottom-navigation
                    class="products_show_product"
                    grow>
                    <v-btn class="p-0 mw-100"
                           :loading="cartLoading && index === cartLoadingIndex"
                           v-if="!product.cart_product"
                           @click="addToCart(product.id, index)">
                      <span>{{ $t('userButtons.cart') }}</span>
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           v-else
                           @click="deleteFromCart(product.cart_product.id, product.id)">
                      <span>{{ $t('userButtons.cart') }}</span>
                      <v-icon
                        color="red darken-4">mdi-cart-off
                      </v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           :loading="favoriteLoading && index === favoriteLoadingIndex"
                           v-if="!product.favorite_product"
                           @click="addToFavorites(product.id, index)">
                      <span>{{ $t('userButtons.favorites') }}</span>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           v-else
                           @click="deleteFromFavorites(product.favorite_product.id, index, product.id)">
                      <span>{{ $t('userButtons.cart') }}</span>
                      <v-icon
                        color="red darken-4">mdi-heart-off
                      </v-icon>
                    </v-btn>
                  </v-bottom-navigation>
                </v-card-actions>
              </v-card>
            </div>
          </div>
          <div class="swiper-button-next red--text text--darken-4"><span class="icon-play"></span></div>
          <div class="swiper-button-prev red--text text--darken-4"><span class="icon-play-flip"></span></div>
          <div class="swiper-pagination" v-for="(item,index) in $store.getters['home/data'].discountedProducts"
               :key="index" slot="pagination">
          </div>
        </div>
      </div>
    </div>
    <div id="main_about_us">
      <div class="container container-padding">
        <div class="main_about_us_top_section d-flex justify-space-between align-center">
          <div class="component-top-header d-flex align-center"
               data-aos="fade-right"
               data-aos-duration="1500"
               data-aos-once="true">
            <div>
              <hr class="component-top-header-hr">
            </div>
            <div class="ml-4">
              <span>Наши преимущества</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_about_us-section"
           ref="mainAboutUsSection"
           data-aos="fade-right"
           data-aos-delay="1000"
           data-aos-duration="1500">
      </div>
    </div>
    <div style="height: 1500px;" class="vzgooo">
    </div>
  </div>
</template>
<script>
import Intro from '~/components/Intro'
import {directive} from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'home',
  data() {
    return {
      language: this.$i18n.locale,
      cartLoadingIndex: -1,
      cartLoading: false,
      favoriteLoadingIndex: -1,
      favoriteLoading: false,
      swiperOption: {
        loop: false,
        slidesPerView: 7,
        spaceBetween: 30,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    }
  },
  mounted() {
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
  },
  async fetch() {
    await this.$store.dispatch('home/getData', {
      language: this.language
    });
  },
  directives: {
    swiper: directive
  },
  components: {
    Intro,
  },
  methods: {
    addToCart(productId, index) {
      this.cartLoading = true;
      this.cartLoadingIndex = index;
      this.$store.dispatch('cart/store', {
        productId
      }).then(response => {
        if (response.data.success) {
          this.$store.commit('home/addProductToCart', {
            cart_product: {
              id: response.data.success.id
            },
            productId
          });
          this.cartLoading = false;
          this.cartLoadingIndex = -1;
          this.$store.commit('cart/changeCount', 1);
          this.$store.dispatch('favorites/getData', {
            language: this.language,
          });
        }
      });
    },
    deleteFromCart(cartProductId, productId) {
      this.$store.commit('home/deleteCartProduct', productId);
      this.$store.commit('cart/changeCount', -1);
      this.$store.dispatch('cart/delete', {
        cartProductId
      }).then(response => {
        if (response.data.success) {
          this.$store.dispatch('favorites/getData', {
            language: this.language,
          });
        }
      });
    },
    addToFavorites(productId, index) {
      this.favoriteLoading = true;
      this.favoriteLoadingIndex = index;
      this.$store.dispatch('favorites/store', {
        productId
      }).then(response => {
        if (response.data.success) {
          this.$store.commit('home/addProductToFavorites', {
            favorite_product: {
              id: response.data.success.id
            },
            index
          });
          this.favoriteLoading = false;
          this.favoriteLoadingIndex = -1;
          this.$store.commit('favorites/changeCount', 1);
          this.$store.dispatch('favorites/getData', {
            language: this.language,
          });
        }
      });
    },
    deleteFromFavorites(favoriteProductId, index, productId) {
      this.$store.commit('home/deleteFavoriteProduct', productId);
      this.$store.commit('favorites/changeCount', -1);
      this.$store.dispatch('favorites/delete', {
        favoriteProductId
      }).then(response => {
        if (response.data.success) {
          this.$store.dispatch('favorites/getData', {
            language: this.language,
          });
        }
      });
    },
  }
}
</script>
<style scoped>
#discounted {
  margin-top: 4vw;
}

.component-top-header-hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.component-top-header {
  font-family: 'Caveat', cursive !important;
  font-size: 3.5vw;
  width: 100%;
}

.products_show_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

#main_about_us {
  margin-top: 4vw;
  width: 100%;
}

.main_about_us-section {
  margin-top: 2vw;
  margin-right: 5vw;
  height: 1000px;
  background-image: url("~/assets/intro2_background.png");
  background-position: right;
  background-repeat: no-repeat;
}
</style>
