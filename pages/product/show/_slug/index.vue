<template>
  <div id="product-show">
    <div class="row product-show_product container container-padding">
      <div class="col-md-5 col-sm-12">
        <client-only>
          <zoom-on-hover :scale="1.1" class="cursor-zoom-in product-show_product_image"
                         :img-normal="'http://raknroll.ua/' + $store.getters['product/data'].product.image">
          </zoom-on-hover>
        </client-only>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="col-md-12">
            <span class="product-show_product_name">{{ $store.getters['product/data'].product.name }}</span>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_price">
            <span>{{ $t('price') }}:
              <span class="white-opacity-07">{{ $store.getters['product/data'].product.final_price }} ₴ / (1 {{
                  $t('pc')
                }})</span></span>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_description">
            <span>{{ $t('description') }}:</span>
            <p class="white-opacity-07 mt-3">{{ $store.getters['product/data'].product.description }}</p>
            <hr>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-12">
            <div class="d-flex">
              <div>
                <v-btn
                  v-if="!$store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id)"
                  large
                  rounded
                  color="red darken-4"
                  class="width-100"
                  @click="addToCart($store.getters['product/data'].product)"
                  dark>
                  {{ $t('addToCart') }}
                  <v-icon
                    dark
                    right>
                    mdi-cart-plus
                  </v-icon>
                </v-btn>
                <v-btn
                  v-else
                  large
                  color="red darken-4"
                  rounded
                  class="width-100"
                  @click="deleteFromCart($store.getters['product/data'].product.id)"
                  dark>
                  {{ $t('removeFromCart') }}
                  <v-icon
                    dark
                    right>
                    mdi-cart-minus
                  </v-icon>
                </v-btn>
              </div>
              <div class="ml-4">
                <NuxtLink
                  :to='localePath("/products/all-catalog/" + $store.getters["product/data"].product.brand.slug) + "/page-1"'
                  v-if="$store.getters['product/data'].product.brand">
                  <v-btn
                    large
                    color="yellow darken-4"
                    rounded
                    class="width-100"
                    dark>
                    {{ $t('linkToBrand', {brandName: $store.getters["product/data"].product.brand.name}) }}
                  </v-btn>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row product-show_tastier-together">
      <div class="col-md-12">
        <div class="row product-show_tastier-together_header">
          <div class="col-md-12 text-center">
            <div class="d-flex justify-center">
              <hr>
            </div>
            <div class="py-5">
              <span>{{ $t('tastierTogether') }}</span>
            </div>
          </div>
        </div>
<!--        <div class="row">-->
<!--          <div class="col-md-12">-->
<!--            <div v-swiper="swiperOption"-->
<!--                 data-aos="fade-up"-->
<!--                 data-aos-duration="1000"-->
<!--                 data-aos-once="true">-->
<!--              <div class="swiper-wrapper">-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image width-100 transition-05 cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sush9421-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sush9421-swiper.png')"-->
<!--                             alt="Snail">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badidsfgdfglico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 ₴-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi3224-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sushi3224-swiper.png')">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi7628-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sushi7628-swiper.png')">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :src="require('~/assets/images/products/sushi7855-swiper.png')"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi7855-swiper.png')"-->
<!--                             contain>-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sush9421-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sush9421-swiper.png')"-->
<!--                             alt="Snail">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi3224-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sushi3224-swiper.png')">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class="swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi7628-swiper.png')"-->
<!--                             :src="require('~/assets/images/products/sushi7628-swiper.png')">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilasdasico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class="swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <v-card-->
<!--                    elevation="0"-->
<!--                    dark-->
<!--                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"-->
<!--                    max-width="374">-->
<!--                    <v-hover-->
<!--                      v-slot="{ hover }">-->
<!--                      <v-img class="swiper-slider_product_image cursor-pointer"-->
<!--                             :class="{ 'opacity-05': hover }"-->
<!--                             :src="require('~/assets/images/products/sushi7855-swiper.png')"-->
<!--                             :lazy-src="require('~/assets/images/products/sushi7855-swiper.png')">-->
<!--                      </v-img>-->
<!--                    </v-hover>-->
<!--                    <v-card-title>Cafe Badilico</v-card-title>-->
<!--                    <v-card-text>-->
<!--                      <v-row-->
<!--                        align="center"-->
<!--                        class="mx-0">-->
<!--                        <div class="grey&#45;&#45;text ml-4">-->
<!--                          4.5 (413) | 360 $-->
<!--                        </div>-->
<!--                      </v-row>-->
<!--                      <div class="my-4 subtitle-1">-->
<!--                      </div>-->
<!--                      <div>Small plates, sdsfgdfgs dfgdsf dsgds egs gdsg dsfg segdfs gser gfdsg serg dsgalads &-->
<!--                        sandwiches - an-->
<!--                        intimate setting with 12 indoor seats plus patio-->
<!--                        seating.-->
<!--                      </div>-->
<!--                    </v-card-text>-->
<!--                    <v-card-actions class="px-0">-->
<!--                      <v-bottom-navigation-->
<!--                        class=" swiper-slider_product"-->
<!--                        grow>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('cart') }}</span>-->
<!--                          <v-icon>mdi-cart</v-icon>-->
<!--                        </v-btn>-->
<!--                        <v-btn class="px-0 mw-100">-->
<!--                          <span>{{ $t('favorites') }}</span>-->
<!--                          <v-icon>mdi-heart</v-icon>-->
<!--                        </v-btn>-->
<!--                      </v-bottom-navigation>-->
<!--                    </v-card-actions>-->
<!--                  </v-card>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="swiper-button-next red&#45;&#45;text text&#45;&#45;darken-4"><span class="icon-play"></span></div>-->
<!--              <div class="swiper-button-prev red&#45;&#45;text text&#45;&#45;darken-4"><span class="icon-play-flip"></span></div>-->
<!--              <div class="swiper-pagination" v-for="(item,index) in  [1,2,3,4,5,6,7,8]" :key="index" slot="pagination">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import {directive} from "vue-awesome-swiper";

export default {
  name: "ProductDetail",
  directives: {
    swiper: directive
  },
  async asyncData({store, i18n, params}) {
    await store.dispatch('product/getData', {
      slug: params.slug,
      language: i18n.locale,
    });
  },
  data() {
    return {
      slug: this.$route.params.slug,
      language: this.$i18n.locale,
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
  }
}
</script>

<style>
#product-show {
  margin-top: 18vh;
}

.product-show_product_image {
  width: 100% !important;
}

.product-show_product_name {
  font-size: 44px;
}

.product-show_product_price {
  font-size: 24px;
}

hr {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
}

.product-show_product_price .white-opacity-07 {
  font-size: 20px;
}

.product-show_product_description {
  font-size: 31px;
}

.product-show_product_description .white-opacity-07 {
  font-size: 20px;
}

.product-show_tastier-together {
  margin-top: 8vw !important;
}

.product-show_tastier-together_header {
  font-size: 53px;
}

.product-show_tastier-together hr:first-child {
  width: 65%;
}
</style>
