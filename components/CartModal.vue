<template>
  <div id="cartModal" class="cart-modal-closed">
    <div class="cartModal_button justify-center">
      <v-btn
        @click="openCartModal"
        class="ma-2 shoppingCartFromRightButtonBody_button mr-0"
        outlined
        fab
        small>
        <v-badge
          bordered
          class="font-brigada"
          color="red darken-4"
          small
          :content="this.$store.getters['cart/count'] ? this.$store.getters['cart/count'] : '0'"
          overlap>
          <v-icon
            large
            class="shoppingCartFromRightButtonBody_button_icon"
            color="black">mdi-cart-variant
          </v-icon>
        </v-badge>
      </v-btn>
    </div>
    <div class="cartModal_products white-pattern-background inset-shadow-10">
      <div class="row">
        <div class="col-12 cartModal_products_header d-flex justify-space-between">
          <div>
            <span class="black--text font-weight-bold">{{ $t('cart') }}</span>
          </div>
          <div>
            <v-btn
              @click="openCartModal"
              class="float-right"
              icon
              color="grey darken-3">
              <v-icon color="grey darken-3">mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="row mr-5">
        <div class="col-12 cartModal_products_totals grey--text text--darken-3 text-right">
          <span>Итоговая цена: {{ $store.getters['cart/cartCurrentTotalPrice'] }} ₴</span>
          <br>
          <span>Кэшбэк: 263 ₴</span>
          <hr class="cartModal_products_hr">
        </div>
      </div>
      <div class="row">
        <div class="col-12"
             v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length">
          <div v-for="(cart, index) in $store.getters['cart/data']" :key="index">
            <div class="row cartModal_products_section align-center">
              <div class="col-md-2">
                <v-hover
                  v-slot="{ hover }">
                  <v-img class="cartModal_products_image cursor-pointer"
                         contain
                         :class="{ 'opacity-is-50': hover }"
                         :src="'http://raknroll.ua/' + cart.image"
                         :lazy-src="'http://raknroll.ua/' + cart.image">
                  </v-img>
                </v-hover>
              </div>
              <div class="col-md-5 cartModal_products_texts">
                <span class="cartModal_products_texts_header black--text font-weight-bold">{{ cart.name }}</span>
                <br>
                <span class="cartModal_products_texts_description grey--text text--darken-3 font-weight-bold">{{
                    cart.short_description
                  }}</span>
              </div>
              <div class="col-md-2 cartModal_products_counter">
                <div class="row cartModal_products_counter_row">
                  <div class="col-md-3 cartModal_products_counter_row_minus d-flex justify-start">
                    <v-btn
                      @click="updateQuantity({productId: cart.id, value: -1})"
                      icon
                      color="grey--text text--darken-3">
                      <v-icon color="grey darken-3">mdi-minus</v-icon>
                    </v-btn>
                  </div>
                  <div class="col-md-6 cartModal_products_counter_row_quantity text-center font-brigada pt-4">
                    <p class="show_counter_quantity grey--text text--darken-3 font-weight-bold mb-0">{{ cart.qty }}</p>
                  </div>
                  <div class="col-md-3 cartModal_products_counter_row_plus d-flex justify-end">
                    <v-btn
                      @click="updateQuantity({productId: cart.id, value: 1})"
                      icon
                      color="grey--text text--darken-3">
                      <v-icon color="grey darken-3">mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="col-md-2 cartModal_products_price">
                  <span class="cartModal_products_texts_description grey--text text--darken-3 font-weight-bold"
                        v-if="cart.qty > 1">{{
                      $t('price')
                    }}: {{ cart.final_price }} ₴ x {{ cart.qty }}</span>
                <span class="cartModal_products_texts_description grey--text text--darken-3 font-weight-bold" v-else>{{
                    $t('price')
                  }}: {{ cart.final_price }} ₴</span>
              </div>
              <div class="col-md-1 cartModal_products_remove">
                <v-btn
                  @click="deleteFromCart(cart.id)"
                  class="float-right"
                  icon
                  color="grey darken-3">
                  <v-icon color="grey darken-3">mdi-close</v-icon>
                </v-btn>
              </div>
            </div>
            <hr class="cartModal_products_hr">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <v-btn
            large
            rounded
            @click="checkout"
            class="width-100"
            dark>
            Оформить заказ
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartModal",
  data() {
    return {
      cartModalIsOpen: false
    }
  },
  methods: {
    openCartModal() {
      if (!this.cartModalIsOpen) {
        document.getElementById('cartModal').classList.add("open-cart-modal")
        document.getElementsByTagName('header')[0].classList.add("main-blured");
        document.getElementsByClassName('v-main')[0].classList.add("main-blured");
        document.getElementsByTagName('footer')[0].classList.add("main-blured");
        this.cartModalIsOpen = true;
      } else {
        document.getElementById('cartModal').classList.remove("open-cart-modal")
        document.getElementsByTagName('header')[0].classList.remove("main-blured");
        document.getElementsByClassName('v-main')[0].classList.remove("main-blured");
        document.getElementsByTagName('footer')[0].classList.remove("main-blured");
        this.cartModalIsOpen = false;
      }
    },
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    checkout() {
      this.openCartModal();
      this.$router.push(this.localePath('/cart'))
    }
  },
}
</script>

<style scoped>
.cartModal_products_header {
  font-size: 60px;
  padding-left: 1.5vw;
  margin-top: 0.5vw;
  font-family: 'Caveat', cursive !important;
}

.cartModal_products_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

.cartModal_products_texts_header {
  font-size: 25px;
}

.cartModal_products_totals {
  font-size: 20px;
}

.cartModal_products_remove {
  position: absolute;
  top: 5px;
  right: 0;
}

.cartModal_products_section {
  position: relative;
  padding-left: 0.3vw;
}

.cartModal_products_hr {
  width: 85%;
  margin: 0 8% 0 8%;
  height: 1px;
  background-color: #424242;
  border: none;
}
</style>
