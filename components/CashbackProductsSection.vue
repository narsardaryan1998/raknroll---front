<template>
  <section id="cashbackProductsSection" class="inset-shadow-10 red-pattern-background padding-top-6vh">
    <div class="container container-padding black--text">
      <div class="cashbackProductsSection_top_section d-flex justify-space-between align-center component_and_page_header_section">
        <div class="component-top-header font-caveat d-flex align-center"
             data-aos="fade-up"
             data-aos-duration="1000">
          <div class="ml-4 black-text-shadow black--text white-brush-background">
            <p class="py-8 px-16"
               style="line-height: normal"
               data-aos="fade-up"
               data-aos-duration="1000">{{ $t('discounted') }}</p>
          </div>
        </div>
        <div class="page_description margin-left-10vw white--text white-text-shadow"
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-delay="800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis praesentium quibusdam tempore! Atque eum
          explicabo, fuga magni totam unde vero! A blanditiis consequuntur cumque cupiditate doloremque fugit
          perferendis repellat voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi eum ex
          mollitia placeat porro, quaerat! Ad, commodi dolore fugit, minima nemo nisi nostrum quam quod sit veniam vitae
          voluptatum.
        </div>
      </div>
    </div>
    <div class="cashbackProductsSection_products">
      <div class="margin-top-6vh"
           data-aos="fade-up"
           data-aos-duration="1000"
           ref="cashbackProductsSectionProducts">
        <div class="d-flex" v-swiper="swiperOption">
          <div class="swiper-wrapper"
               v-for="(product, index) in $store.getters['home/data'].discountedProducts" :key="product.slug">
            <div class="swiper-slide">
              <v-card
                elevation="12"
                dark
                class="mx-auto my-12 mt-0 products_show_product products_show_products_black_background rounded-lg"
                max-width="374">
                <v-card-title class="font-weight-bold px-2 pb-0 pt-1">{{ product.name }}</v-card-title>
                <v-hover
                  v-slot="{ hover }">
                  <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                    <v-img class="card_product_image width-100 transition-05"
                           :class="{ 'scale-1-2': hover }"
                           :src="baseUrl + product.image"
                           :lazy-src="baseUrl + product.image"
                           contain>
                    </v-img>
                  </NuxtLink>
                </v-hover>
                <v-card-text class="grey--text text--lighten-4 font-weight-bold text-center font-brigada">
                  <div class="pl-5 pt-4 text-left" v-if="product.weight && product.min_quantity">
                    {{ $t('minimum') + ': ' + product.min_quantity }}
                  </div>
                  <div
                    :class="product.min_quantity || product.weight ? 'pl-2 pt-4 d-flex justify-space-between' : 'pl-2 pt-4 d-flex justify-end'">
                    <div class="pl-3" v-if="product.weight">
                      {{ '1 ' + $t('portion') + ' / ' + product.weight + $t('shortGram') }}
                    </div>
                    <div class="pl-3" v-else-if="product.min_quantity">
                      {{ $t('minimum') + ': ' + product.min_quantity }}
                    </div>
                    <div class="pr-3"
                         v-if="$store.getters['cart/data'].find(cart => product.id === cart.id) && $store.getters['cart/data'].find(cart => product.id === cart.id).qty > 1">
                      {{ $t('price') + ': ' + product.final_price }} ₴ x
                      {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}
                    </div>
                    <div v-else class="pr-3">
                      {{ $t('price') + ': ' + product.final_price }} ₴
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
                             v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                             @click="addToFavorites(product)">
                        <span class="font-weight-bold">{{ $t('favorites') }}</span>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn class="p-0 width-100"
                             v-else
                             max-width="100%"
                             @click="deleteFromFavorites(product.id)">
                        <span class="font-weight-bold">{{ $t('favorites') }}</span>
                        <v-icon
                          color="red darken-4">mdi-heart-off
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
                          @click="updateQuantity({productId: product.id, value: -1})"
                          icon
                          color="white">
                          <v-icon>mdi-minus</v-icon>
                        </v-btn>
                      </div>
                      <div class="cart_product_counter_row_quantity text-center font-brigada px-5 width-25">
                        <p class="show_counter_quantity mb-0">
                          {{ $store.getters['cart/data'].find(cart => product.id === cart.id).qty }}</p>
                      </div>
                      <div class="d-flex justify-end">
                        <v-btn
                          @click="updateQuantity({productId: product.id, value: 1})"
                          icon
                          color="white">
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
                      <v-btn class="p-0 mw-100"
                             v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                             @click="addToFavorites(product)">
                        <span class="font-weight-bold">{{ $t('favorites') }}</span>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn class="p-0 mw-100"
                             v-else
                             @click="deleteFromFavorites(product.id)">
                        <span class="font-weight-bold">{{ $t('favorites') }}</span>
                        <v-icon
                          color="red darken-4">mdi-heart-off
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
          <div class="swiper-pagination" v-for="(item,index) in $store.getters['home/data'].discountedProducts"
               :key="index" slot="pagination">
          </div>
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
            slidesPerView: 5,
            spaceBetween: 50
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          600: {
            slidesPerView: 2,
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
    addToFavorites(product) {
      this.$store.commit('favorites/add', product);
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
    },
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
  }
}
</script>
