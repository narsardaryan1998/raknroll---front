<template>
  <section id="cashbackProductsSection" class="inset-shadow-10 red-pattern-background padding-top-6vh">
    <div class="container container-padding black--text">
      <div
        class="cashbackProductsSection_top_section d-flex justify-space-between align-center component_and_page_header_section">
        <div class="component-top-header font-caveat d-flex align-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div class="ml-4 black-text-shadow black--text white-brush-background">
            <p class="py-8 px-16"
               data-aos="fade-up"
               data-aos-duration="1000"
               style="line-height: normal">{{ $t('discounted') }}</p>
          </div>
        </div>
        <div class="page_description margin-left-10vw white--text white-text-shadow"
             data-aos="fade-up"
             data-aos-delay="800"
             data-aos-duration="1000">
          {{ $t('discountedComponentDescription') }}
        </div>
      </div>
    </div>
    <div class="cashbackProductsSection_products">
      <div ref="cashbackProductsSectionProducts"
           class="margin-top-6vh"
           data-aos="fade-up"
           data-aos-duration="1000">
        <div v-swiper="swiperOption" class="d-flex">
          <div v-for="(product, index) in $store.getters['home/data'].discountedProducts"
               :key="product.slug" class="swiper-wrapper">
            <div class="swiper-slide">
              <v-card
                class="mx-auto my-12 mt-0 products_show_product products_show_products_black_background rounded-lg position-relative"
                dark
                elevation="12"
                max-width="374">
                <div class="sale-icon-div width-100">
                  <v-img
                    :lazy-src="require('~/assets/images/sale-icon.png')"
                    :src="require('~/assets/images/sale-icon.png')"
                    class="sale-icon-div-image position-relative float-right"
                    contain>
                    <span
                      class="sale-icon-div-text black--text black-text-shadow font-weight-bold">- {{
                        product.discount
                      }}%</span>
                  </v-img>
                </div>
                <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                  <v-card-title class="font-weight-bold px-2 pb-0 pt-1 white--text">{{ product.name }}</v-card-title>
                  <v-hover
                    v-slot="{ hover }">
                    <v-img :class="{ 'scale-1-2': hover }"
                           :lazy-src="baseUrl + product.image"
                           :src="baseUrl + product.image"
                           class="card_product_image width-100 transition-05"
                           contain>
                    </v-img>
                  </v-hover>
                </NuxtLink>
                <v-card-text class="grey--text text--lighten-4 font-weight-bold text-center font-brigada">
                  <div v-if="product.weight && product.min_quantity" class="pl-5 pt-4 text-left">
                    {{ $t('minimum') + ': ' + product.min_quantity }}
                  </div>
                  <div
                    :class="product.min_quantity || product.weight ? 'pl-2 pt-4 d-flex justify-space-between' : 'pl-2 pt-4 d-flex justify-end'">
                    <div v-if="product.weight" class="pl-3">
                      {{ $t('weight') + ': ' + product.weight + $t(product.unit + 'Short') }}
                    </div>
                    <div v-else-if="product.min_quantity" class="pl-3">
                      {{ $t('minimum') + ': ' + product.min_quantity }}
                    </div>
                    <div class="pr-3">
                      <div class="d-flex flex-column">
                        <div class="grey--text text--lighten-1">
                          {{ $t('oldPrice') + ': ' + product.initial_price }} грн
                        </div>
                        <div>
                          {{ $t('priceWithDiscount') + ': ' + product.final_price }} грн
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 grey--text text--lighten-1">{{ product.short_description }}
                  </div>
                </v-card-text>
                <div v-if="!$store.getters['cart/data'].find(cart => product.id === cart.id)">
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="products_show_product width-100"
                      horizontal>
                      <v-btn class="p-0 width-100"
                             max-width="100%"
                             @click="addToCart(product)">
                        <span class="font-weight-bold">{{ $t('cart') }}</span>
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="products_show_product width-100"
                      horizontal>
                      <v-btn class="p-0 width-100"
                             max-width="100%"
                             @click="$router.push(localePath('/product/show/' + product.slug))">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('details') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-text-box-search-outline
                        </v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                </div>
                <div v-else>
                  <v-card-actions class="py-0">
                    <div class="d-flex justify-center width-100">
                      <div class="d-flex justify-start">
                        <v-btn
                          color="white"
                          icon
                          @click="updateQuantity({productId: product.id, value: -1})">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                      </div>
                      <div class="cart_product_counter_row_quantity text-center font-brigada px-5 width-25">
                        <p class="show_counter_quantity mb-0">
                          {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}</p>
                      </div>
                      <div class="d-flex justify-end">
                        <v-btn
                          color="white"
                          icon
                          @click="updateQuantity({productId: product.id, value: 1})">
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-card-actions>
                  <v-card-actions class="py-0">
                    <v-bottom-navigation
                      class="products_show_product"
                      grow>
                      <v-btn class="p-0 mw-100"
                             @click="deleteFromCart(product.id)">
                        <span class="font-weight-bold">{{ $t('cart') }}</span>
                        <v-icon
                          color="red darken-4">mdi-cart-off
                        </v-icon>
                      </v-btn>
                      <v-btn class="p-0 width-100"
                             max-width="100%"
                             @click="$router.push(localePath('/product/show/' + product.slug))">
                        <span class="font-weight-bold grey--text text--lighten-2">{{ $t('details') }}</span>
                        <v-icon
                          color="grey lighten-2">mdi-text-box-search-outline
                        </v-icon>
                      </v-btn>
                    </v-bottom-navigation>
                  </v-card-actions>
                </div>
              </v-card>
            </div>
          </div>
          <div class="swiper-button-next"><span class="icon-play"></span></div>
          <div class="swiper-button-prev"><span class="icon-play-flip"></span></div>
          <div v-for="(item,index) in $store.getters['home/data'].discountedProducts" :key="index"
               slot="pagination" class="swiper-pagination">
          </div>
        </div>
      </div>
    </div>
    <div class="cashbackProductsSection_all-button d-flex justify-center"
         data-aos="fade-up"
         data-aos-duration="1000">
      <div class="my-5">
        <v-btn
          class="width-100 white-pattern-background black--text font-weight-bold"
          dark
          x-large
          @click='$router.push(localePath(`/products/all-catalog/all-brands/%7B"display_quantity":8,"discounted":true%7D/page-1`))'>
          {{ $t('allDiscounts') }}
          <v-icon class="ml-3 black--text font-weight-bold">
            mdi-check
          </v-icon>
        </v-btn>
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
      baseUrl: process.env.BASE_URL,
      swiperOption: {
        loop: false,
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
        },
        breakpoints: {
          1440: {
            slidesPerView: this.$store.getters['home/data'].discountedProducts.length >= 5 ? 5 : this.$store.getters['home/data'].discountedProducts.length,
            spaceBetween: 50
          },
          1264: {
            slidesPerView: this.$store.getters['home/data'].discountedProducts.length >= 4 ? 4 : this.$store.getters['home/data'].discountedProducts.length,
            spaceBetween: 40
          },
          960: {
            slidesPerView: this.$store.getters['home/data'].discountedProducts.length >= 3 ? 3 : this.$store.getters['home/data'].discountedProducts.length,
            spaceBetween: 30
          },
          600: {
            slidesPerView: this.$store.getters['home/data'].discountedProducts.length >= 2 ? 2 : this.$store.getters['home/data'].discountedProducts.length,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
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
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
  }
}
</script>
