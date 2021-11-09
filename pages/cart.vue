<template>
  <div id="cart" class="container container-padding">
    <div class="cart_top_section d-flex justify-space-between align-center margin-bottom-from-header">
      <div class="cart_top_section_header d-flex align-center">
        <div>
          <hr class="cart_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span>Cart</span>
        </div>
      </div>
    </div>
    <div class="row cart_order-section">
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <v-text-field
              name="name"
              color="red darken-4"
              :counter="50"
              :label="$t('name') + '*'"
              hide-details
              required>
            </v-text-field>
          </div>
          <div class="col-md-6 col-sm-12">
            <v-text-field
              name="phone"
              color="red darken-4"
              :counter="50"
              :label="$t('phone') + '*'"
              hide-details
              required>
            </v-text-field>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <v-text-field
              name="city"
              color="red darken-4"
              :counter="50"
              :label="'city' + '*'"
              hide-details
              required>
            </v-text-field>
          </div>
          <div class="col-md-8 col-sm-12">
            <v-text-field
              name="address"
              color="red darken-4"
              :counter="50"
              :label="'address' + '*'"
              hide-details
              required>
            </v-text-field>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <v-text-field
              name="home"
              color="red darken-4"
              :counter="50"
              :label="'home' + '*'"
              hide-details
              required>
            </v-text-field>
          </div>
          <div class="col-md-4 col-sm-12">
            <v-text-field
              name="floor"
              color="red darken-4"
              :counter="50"
              :label="'floor'"
              hide-details
              required>
            </v-text-field>
          </div>
          <div class="col-md-4 col-sm-12">
            <v-text-field
              name="intercom"
              color="red darken-4"
              :counter="50"
              :label="'intercom'"
              hide-details
              required>
            </v-text-field>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <v-textarea
              name="additionalInformation"
              color="red darken-4"
              :label="'additional information'"
              hide-details>
            </v-textarea>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12"
           v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length">
        <div v-for="(cart, index) in $store.getters['cart/data']" :key="index">
          <div class="row cart_products align-center">
            <div class="col-md-2">
              <v-hover
                v-slot="{ hover }">
                <v-img class="cart_product_image cursor-pointer"
                       contain
                       :class="{ 'opacity-is-50': hover }"
                       :src="'http://raknroll.ua/' + cart.image"
                       :lazy-src="'http://raknroll.ua/' + cart.image">
                </v-img>
              </v-hover>
            </div>
            <div class="col-md-5 cart_product_texts">
              <span class="cart_product_texts_header">{{ cart.name }}</span>
              <br>
              <span class="cart_product_texts_description white-opacity-07">{{ cart.short_description }}</span>
            </div>
            <div class="col-md-2 cart_product_counter">
              <div class="row cart_product_counter_row">
                <div class="col-md-3 cart_product_counter_row_minus d-flex justify-start">
                  <v-btn
                    @click="updateQuantity({productId: cart.id, value: -1})"
                    icon
                    color="white">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="col-md-6 cart_product_counter_row_quantity text-center font-brigada pt-4">
                  <p class="show_counter_quantity mb-0">{{ cart.qty }}</p>
                </div>
                <div class="col-md-3 cart_product_counter_row_plus d-flex justify-end">
                  <v-btn
                    @click="updateQuantity({productId: cart.id, value: 1})"
                    icon
                    color="white">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="col-md-2 cart_product_price">
                  <span class="cart_product_texts_description white-opacity-07" v-if="cart.qty > 1">{{
                      $t('price')
                    }}: {{ cart.final_price }} x {{ cart.qty }} ₴</span>
              <span class="cart_product_texts_description white-opacity-07" v-else>{{
                  $t('price')
                }}: {{ cart.final_price }} ₴</span>
            </div>
            <div class="col-md-1 cart_product_remove">
              <v-btn
                @click="deleteFromCart(cart.id)"
                class="float-right"
                icon
                color="white">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
          <v-divider class="cart_products_hr" inset></v-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      language: this.$i18n.locale,
    }
  },
  async mounted() {
    // let productIds = [];
    // if (this.$store.getters['cart/data'].length) {
    //   productIds.push(this.$store.getters['cart/data'].find(cart => 0 < cart.id).id);
    // }
    // await this.$store.dispatch('cart/getData', {
    //   language: this.language,
    //   productIds
    // });
  },
  methods: {
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
  }
}
</script>

<style scoped>
#cart {
  margin-top: 9vw;
}

.cart_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.cart_top_section_header {
  font-size: 3.5vw;
  width: 100%;
}

.cart_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

.cart_product_texts_header {
  font-size: 1.7vw;
}

.cart_product_remove {
  position: absolute;
  top: 5px;
  right: 0;
}

.cart_products {
  position: relative;
}

.cart_products_hr {
  margin: 0 8% 0 10%;
}
</style>
