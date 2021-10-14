<template>
  <div id="product-show" v-if="this.$store.getters['product/data'].product">
    <div class="row product-show_product container container-padding">
      <div class="col-md-5 col-sm-12">
        <client-only>
          <zoom-on-hover :scale="1.1" class="cursor-zoom-in product-show_product_image"
                         :img-normal="'http://raknroll.ua/' + this.$store.getters['product/data'].product.image">
          </zoom-on-hover>
        </client-only>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="col-md-12">
            <span class="product-show_product_name">{{ this.$store.getters['product/data'].product.name }}</span>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-center">
              <div>
                <v-rating
                  color="red darken-4"
                  hover
                  :value="parseFloat(this.$store.getters['product/data'].product.rating)"
                  dense
                  half-increments
                  size="25">
                </v-rating>
              </div>
              <div class="ml-3">
                <span>{{ this.$store.getters['product/data'].product.rating }}| <span
                  class="white-opacity-07">({{ this.$store.getters['product/data'].product.reviews_count }} {{
                    $t('reviews')
                  }})</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_price">
            <span>{{ $t('price') }}: {{ this.$store.getters['product/data'].product.final_price }} ₴ / <span
              class="white-opacity-07">(1 {{ $t('pc') }})</span></span>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_description">
            <span>{{ $t('description') }}:</span>
            <p class="white-opacity-07">{{ this.$store.getters['product/data'].product.description }}</p>
            <hr>
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-md-12">
            <div class="d-flex">
              <div class="product-show_product_add-to-cart">
                <a href="#" class="cta">
                  <span>{{ $t('addToCart') }}</span>
                  <v-icon
                    dark
                    right>
                    mdi-cart-plus
                  </v-icon>
                </a>
              </div>
              <div class="product-show_product_link-to-brand" v-if="this.$store.getters['product/data'].product.brand">
                <NuxtLink :to='localePath("/products/all-catalog/" + this.$store.getters["product/data"].product.brand.slug) + "/page-1"' class="cta">
                  <span>{{ $t('linkToBrand', {brandName: this.$store.getters["product/data"].product.brand.name}) }}</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
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
        <div class="row">
          <div class="col-md-12">
            <div v-swiper="swiperOption"
                 data-aos="fade-up"
                 data-aos-duration="1000"
                 data-aos-once="true">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sush9421-swiper.png')"
                             :src="require('~/assets/images/products/sush9421-swiper.png')"
                             alt="Snail">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badidsfgdfglico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sushi3224-swiper.png')"
                             :src="require('~/assets/images/products/sushi3224-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sushi7628-swiper.png')"
                             :src="require('~/assets/images/products/sushi7628-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :src="require('~/assets/images/products/sushi7855-swiper.png')"
                             :lazy-src="require('~/assets/images/products/sushi7855-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sush9421-swiper.png')"
                             :src="require('~/assets/images/products/sush9421-swiper.png')"
                             alt="Snail">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sushi3224-swiper.png')"
                             :src="require('~/assets/images/products/sushi3224-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class="swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :lazy-src="require('~/assets/images/products/sushi7628-swiper.png')"
                             :src="require('~/assets/images/products/sushi7628-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilasdasico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class="swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
                <div class="swiper-slide">
                  <v-card
                    elevation="0"
                    dark
                    class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
                    max-width="374">
                    <v-hover
                      v-slot="{ hover }">
                      <v-img class="swiper-slider_product_image cursor-pointer"
                             :class="{ 'opacity-is-50': hover }"
                             :src="require('~/assets/images/products/sushi7855-swiper.png')"
                             :lazy-src="require('~/assets/images/products/sushi7855-swiper.png')">
                      </v-img>
                    </v-hover>
                    <v-card-title>Cafe Badilico</v-card-title>
                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="red darken-4"
                          dense
                          half-increments
                          readonly
                          size="14">
                        </v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413) | 360 $
                        </div>
                      </v-row>
                      <div class="my-4 subtitle-1">
                      </div>
                      <div>Small plates, sdsfgdfgs dfgdsf dsgds egs gdsg dsfg segdfs gser gfdsg serg dsgalads &
                        sandwiches - an
                        intimate setting with 12 indoor seats plus patio
                        seating.
                      </div>
                    </v-card-text>
                    <v-card-actions class="px-0">
                      <v-bottom-navigation
                        class=" swiper-slider_product"
                        grow>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.cart') }}</span>
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn class="px-0 mw-100">
                          <span>{{ $t('userButtons.favorites') }}</span>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-bottom-navigation>
                    </v-card-actions>
                  </v-card>
                </div>
              </div>
              <div class="swiper-button-next red--text text--darken-4"><span class="icon-play"></span></div>
              <div class="swiper-button-prev red--text text--darken-4"><span class="icon-play-flip"></span></div>
              <div class="swiper-pagination" v-for="(item,index) in  [1,2,3,4,5,6,7,8]" :key="index" slot="pagination">
              </div>
            </div>
          </div>
        </div>
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
  async fetch() {
    this.slug = this.$route.params.slug;
    await this.$store.dispatch('product/getData', {
      slug: this.slug,
      language: this.language,
    });
  },
  data() {
    return {
      rating: 4.8,
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
}
</script>

<style>
#product-show {
  font-family: 'Caveat', cursive !important;
  margin-top: 9vw;
}

.product-show_product_image {
  width: 100% !important;
}

.product-show_product_name {
  font-size: 2.2vw;
}

.product-show_product_price {
  font-size: 1.5vw;
}

hr {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
}

.product-show_product_price .white-opacity-07 {
  font-size: 1.1vw;;
}

.product-show_product_description {
  font-size: 1.6vw;
}

.product-show_product_description .white-opacity-07 {
  font-size: 1.1vw;
}

.product-show_tastier-together {
  margin-top: 4vw !important;
}

.product-show_tastier-together_header {
  font-size: 2.7vw;
}

.product-show_tastier-together hr:first-child {
  width: 65%;
}

.swiper-slider_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}
</style>
