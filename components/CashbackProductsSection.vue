<template>
  <section id="cashbackProductsSection" class="inset-shadow-10 white-pattern-background">
    <div class="container container-padding">
      <div class="cashbackProductsSection_top_section d-flex justify-space-between align-center">
        <div class="component-top-header d-flex align-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div>
            <hr class="component-top-header-hr">
          </div>
          <div class="ml-4">
            <span>{{ $t('discounted') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cashbackProductsSection_products margin-top-from-header"
         ref="cashbackProductsSectionProducts"
         data-aos="fade-up"
         data-aos-delay="700"
         data-aos-duration="1000">
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
                         :class="{ 'opacity-is-8': hover }"
                         :src="'http://raknroll.ua/' + product.image"
                         :lazy-src="'http://raknroll.ua/' + product.image">
                  </v-img>
                </NuxtLink>
              </v-hover>
              <v-card-title class="black--text font-weight-bold">{{ product.name }}</v-card-title>
              <v-card-text class="p-0 grey--text text--darken-3 font-weight-bold">
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
                  <div class="ml-2 font-brigada">| {{ product.final_price }} ₴
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
                         v-if="!$store.getters['cart/data'].find(cart => product.id === cart.id)"
                         @click="addToCart(product)">
                    <span class="grey--text text--darken-3 font-weight-bold">{{ $t('cart') }}</span>
                    <v-icon color="grey darken-3">mdi-cart</v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-else
                         @click="deleteFromCart(product.id)">
                    <span class="grey--text text--darken-3 font-weight-bold">{{ $t('cart') }}</span>
                    <v-icon
                      color="red darken-4">mdi-cart-off
                    </v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                         @click="addToFavorites(product)">
                    <span class="grey--text text--darken-3 font-weight-bold">{{ $t('favorites') }}</span>
                    <v-icon color="grey darken-3">mdi-heart</v-icon>
                  </v-btn>
                  <v-btn class="p-0 mw-100"
                         v-else
                         @click="deleteFromFavorites(product.id)">
                    <span class="grey--text text--darken-3 font-weight-bold">{{ $t('favorites') }}</span>
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
  </section>
</template>

<script>
import {directive} from 'vue-awesome-swiper'

export default {
  name: "CashbackProductsSection",
  directives: {
    swiper: directive
  },
  data() {
    return {
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
      },
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('cart/add', product);
      document.getElementsByClassName('shoppingCartFromRightButtonBody_button_icon')[0].classList.add('cart-icon-rotate');
      document.getElementById('cartModal').classList.add('cart-modal-bounce');
      setTimeout(function () {
        document.getElementsByClassName('shoppingCartFromRightButtonBody_button_icon')[0].classList.remove('cart-icon-rotate');
      }, 601);
      setTimeout(function () {
        document.getElementById('cartModal').classList.remove('cart-modal-bounce');
      }, 1001);

    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    addToFavorites(product) {
      this.$store.commit('favorites/add', product);
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
    },
  }
}
</script>

<style scoped>
#cashbackProductsSection {
  margin-top: 4vw;
}

.products_show_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}
</style>
