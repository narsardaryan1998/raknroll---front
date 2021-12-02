<template>
  <div id="product-show">
    <div class="row product-show_product container container-padding">
      <div class="col-lg-5 col-md-6 col-8 offset-2 offset-md-0">
        <v-img :src="baseUrl + $store.getters['product/data'].product.image"
               :lazy-src="baseUrl + $store.getters['product/data'].product.image"
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
              <span class="white-opacity-07">{{ $store.getters['product/data'].product.final_price }} грн / (1 {{
                  $t('pc')
                }})</span></span>
            <hr class="mt-3">
          </div>
        </div>
        <div class="row" v-if="$store.getters['product/data'].product.weight">
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
        <div class="row"
             v-if="$store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id)">
          <div class="col-12 col-md-6 d-flex justify-md-start justify-center width-100">
            <div class="d-flex justify-start">
              <v-btn
                @click="updateQuantity({productId: $store.getters['product/data'].product.id, value: -1})"
                icon
                color="grey lighten-2">
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
                @click="updateQuantity({productId: $store.getters['product/data'].product.id, value: 1})"
                icon
                color="grey lighten-2">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <v-btn
              v-if="!$store.getters['cart/data'].find(cart => $store.getters['product/data'].product.id === cart.id)"
              large
              rounded
              color="red darken-4 red-pattern-background"
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
              color="red darken-4 red-pattern-background"
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
  async asyncData({store, i18n, params}) {
    await store.dispatch('product/getData', {
      slug: params.slug,
      language: i18n.locale,
    });
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      slug: this.$route.params.slug,
      language: this.$i18n.locale,
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$store.getters['product/data'].product.meta_title ? this.$store.getters['product/data'].product.meta_title : this.$store.getters['product/data'].product.name,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$store.getters['product/data'].product.meta_keys ? this.$store.getters['product/data'].product.meta_keys : this.$store.getters['product/data'].product.name
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$store.getters['product/data'].product.meta_description ? this.$store.getters['product/data'].product.meta_description : this.$store.getters['product/data'].product.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.baseUrl + this.$store.getters['product/data'].product.image
        },
        ...i18nHead.meta
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
