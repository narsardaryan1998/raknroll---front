<template>
  <div id="product-show">
    <div class="row product-show_product container-padding">
      <div class="col-lg-5 col-md-6 col-12 offset-md-0">
        <v-img :lazy-src="baseUrl + $store.getters['product/data'].product.image"
               :src="baseUrl + $store.getters['product/data'].product.image"
               cover>
        </v-img>
      </div>
      <div class="col-md-6 col-12 product-show_product_section">
        <div class="row">
          <div class="col-md-12">
            <span class="product-show_product_name">{{ $store.getters['product/data'].product.name }}</span>
            <hr class="mt-3">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_price">
            <span>{{ $t('price') }}:
              <span class="white-opacity-07">{{ $store.getters['product/data'].product.final_price }} грн / (<span
                class="font-brigada">1</span> {{
                  $t('pc')
                }})</span></span>
            <hr class="mt-3">
          </div>
        </div>
        <div v-if="$store.getters['product/data'].product.weight" class="row">
          <div class="col-md-12 product-show_product_price">
            <span>{{ $t('weight') }}:
              <span class="white-opacity-07">{{
                  $store.getters['product/data'].product.weight + ' ' + $t($store.getters['product/data'].product.unit)
                }}</span></span>
            <hr class="mt-3">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_description">
            <span>{{ $t('description') }}:</span>
            <p class="white-opacity-07 mt-3">{{ $store.getters['product/data'].product.description }}</p>
            <hr>
          </div>
        </div>
        <div v-if="$store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id)"
             class="row">
          <div class="col-12 col-md-6 d-flex justify-md-start justify-center width-100">
            <div class="d-flex justify-start">
              <v-btn
                color="grey lighten-2"
                icon
                @click="updateQuantity({productId: $store.getters['product/data'].product.id, value: -1})">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
            <div class="cart_product_counter_row_quantity text-center font-brigada px-5 width-50">
              <p class="show_counter_quantity mb-0">
                {{
                  $store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id).qty
                }}</p>
            </div>
            <div class="d-flex justify-end">
              <v-btn
                color="grey lighten-2"
                icon
                @click="updateQuantity({productId: $store.getters['product/data'].product.id, value: 1})">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <v-btn
              v-if="!$store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id)"
              color="red darken-4 red-pattern-background"
              dark
              large
              @click="addToCart($store.getters['product/data'].product)">
              {{ $t('addToCart') }}
              <v-icon
                dark
                right>
                mdi-cart-plus
              </v-icon>
            </v-btn>
            <v-btn
              v-else
              color="red darken-4 red-pattern-background"
              dark
              large
              @click="deleteFromCart($store.getters['product/data'].product.id)">
              {{ $t('removeFromCart') }}
              <v-icon
                dark
                right>
                mdi-cart-minus
              </v-icon>
            </v-btn>
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
  async asyncData({store, i18n, params, error}) {
    await store.dispatch('product/getData', {
      slug: params.slug,
      language: i18n.locale,
    });
    if (!store.getters['product/data'].product) {
      error({statusCode: 404, message: 'Post not found'})
    }
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      slug: this.$route.params.slug,
      language: this.$i18n.locale,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true})
    return {
      title: this.$store.getters['product/data'].product.meta_title ? this.$store.getters['product/data'].product.meta_title : this.$store.getters['product/data'].product.name,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$store.getters['product/data'].product.meta_keys ? this.$store.getters['product/data'].product.meta_keys : this.$store.getters['product/data'].product.name
        },
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: this.$store.getters['product/data'].product.meta_description ? this.$store.getters['product/data'].product.meta_description : this.$store.getters['product/data'].product.description
        // },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.baseUrl + this.$store.getters['product/data'].product.image
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$store.getters['product/data'].product.name
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.baseUrl.substring(0, this.baseUrl.length - 1) + this.$nuxt.$route.path
        },
        ...i18nHead.meta
      ],
      link: [
        {
          rel: 'canonical',
          href: this.baseUrl.slice(0, -1) + this.$nuxt.$route.path
        }
      ]
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

<style>
#product-show{margin-top:18vh}.product-show_product_name{font-size:44px}.product-show_product_price{font-size:24px}hr{height:1px;background-color:rgba(255,255,255,.5);border:none}.product-show_product_price .white-opacity-07{font-size:20px}.product-show_product_description{font-size:31px}.product-show_product_description .white-opacity-07{font-size:20px}.product-show_tastier-together hr:first-child{width:65%}
</style>
