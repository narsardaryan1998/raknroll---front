<template>
  <div id="cart">
    <div
      class="cart_top_section page-header width-100 margin-bottom-10vh">
      <v-img
        position="bottom"
        class="width-100 height-100"
        :src="require('~/assets/parralax-section-header-background.jpg')"
        :lazy-src="require('~/assets/parralax-section-header-background.jpg')"
        cover>
        <p class="width-100 text-center">{{ $t('cart') }}</p>
      </v-img>
    </div>
    <div class="row cart_order-section container container-padding">
      <div class="col-md-9 col-12 cart_order-section_products">
        <div v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length">
          <div v-for="(cart, index) in $store.getters['cart/data']" :key="index">
            <div class="row position-relative align-center">
              <div class="col-2">
                <v-hover
                  v-slot="{ hover }">
                  <v-img class="cart_product_image width-100 transition-05 cursor-pointer"
                         contain
                         :class="{ 'opacity-05': hover }"
                         :src="'http://raknroll.ua/' + cart.image"
                         :lazy-src="'http://raknroll.ua/' + cart.image">
                  </v-img>
                </v-hover>
              </div>
              <div class="col-5 cart_product_texts">
                <span class="cart_product_texts_header">{{ cart.name }}</span>
                <br>
                <span class="cart_product_texts_description white-opacity-07">{{ cart.short_description }}</span>
              </div>
              <div class="col-2 cart_product_counter">
                <div class="row cart_product_counter_row">
                  <div class="col-3 cart_product_counter_row_minus d-flex justify-start">
                    <v-btn
                      @click="updateQuantity({productId: cart.id, value: -1})"
                      icon
                      color="white">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                  <div class="col-6 cart_product_counter_row_quantity text-center font-brigada pt-4">
                    <p class="show_counter_quantity mb-0">{{ cart.qty }}</p>
                  </div>
                  <div class="col-3 cart_product_counter_row_plus d-flex justify-end">
                    <v-btn
                      @click="updateQuantity({productId: cart.id, value: 1})"
                      icon
                      color="white">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="col-2 cart_product_price">
                  <span class="cart_product_texts_description white-opacity-07" v-if="cart.qty > 1">{{
                      $t('price')
                    }}: {{ cart.final_price }} ₴ x {{ cart.qty }}</span>
                <span class="cart_product_texts_description white-opacity-07" v-else>{{
                    $t('price')
                  }}: {{ cart.final_price }} ₴</span>
              </div>
              <div class="col-1 cart_product_remove">
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
      <div class="col-md-3 col-12 cart_order-section_register-order">
        <div class="row">
          <div class="col-12 cart_order-section_register-order_your-order-header">
            <span>{{ $t('information') }}</span>
          </div>
        </div>
        <v-form
          ref="orderForm"
          v-model="orderFormValid"
          lazy-validation>
          <div class="row mt-3">
            <div class="col-12 pb-0 cart_order-section_register-order_your-order-subheader red--text text--darken-4">
              {{ $t('requiredFields') }}:
              <v-icon color="red darken-4">mdi-arrow-down-box</v-icon>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-12 py-0">
              <v-text-field
                filled
                type="tel"
                name="phone"
                color="white"
                :rules="phoneRules"
                v-mask="'(###) ### - ## - ##'"
                :hint="$t('forExample') + ' (096) 599 - 09 - 09'"
                :label="$t('phone') + ' *'"
                v-model="orderForm.phone"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-0">
              <v-text-field
                filled
                name="address"
                color="white"
                :hint="$t('addressExample')"
                v-model="orderForm.address"
                :rules="addressRules"
                :label="$t('address') + ' * (' + $t('addressExample') + ')'"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 pb-0 cart_order-section_register-order_your-order-subheader">
              {{ $t('optionalFields') }}:
              <v-icon>mdi-arrow-down-box</v-icon>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-12 py-0">
              <v-text-field
                filled
                name="email"
                color="white"
                :label="$t('emailAddress')"
                v-model="orderForm.email"
                :rules="emailRules">
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-6 py-0">
              <v-text-field
                filled
                name="entrance"
                color="white"
                :label="$t('entrance')"
                v-model="orderForm.entrance"
                required>
              </v-text-field>
            </div>
            <div class="col-6 py-0">
              <v-text-field
                filled
                name="intercom"
                color="white"
                :label="$t('intercom')"
                v-model="orderForm.intercom"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-6 py-0">
              <v-text-field
                filled
                name="floor"
                color="white"
                :label="$t('floor')"
                v-model="orderForm.floor"
                required>
              </v-text-field>
            </div>
            <div class="col-6 py-0">
              <v-text-field
                filled
                name="home"
                color="white"
                :label="$t('homeApartmentOffice')"
                v-model="orderForm.home"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-0">
              <v-textarea
                filled
                v-model="orderForm.additional_information"
                name="additional_information"
                color="white"
                :label="$t('additionalInformationAboutOrder')">
              </v-textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-0 d-flex justify-end">
              <v-checkbox
                v-model="rememberInformation"
                :label="$t('rememberMyInformation')"
                color="white"
                hide-details>
              </v-checkbox>
            </div>
          </div>
          <div class="row margin-top-6vh">
            <div class="col-12 cart_order-section_register-order_your-order-header">
              <span>{{ $t('yourOrder') }}</span>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
              <div>
                {{ $t('purchases') }}:
              </div>
              <div>
                {{ $store.getters['cart/cartCurrentTotalPrice'] }} ₴
              </div>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row">
            <div
              class="col-12 d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
              <div>
                {{ $t('shipping') }}:
              </div>
              <div>
                <v-radio-group
                  v-model="orderForm.isDelivery"
                  column>
                  <v-radio
                    color="white"
                    :label="$t('takeItMyself') + ' + 0 ₴'"
                    :value="false">
                  </v-radio>
                  <v-radio
                    color="white"
                    :label="$t('delivery') + ' + 500 ₴'"
                    :value="true">
                  </v-radio>
                </v-radio-group>
              </div>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row">
            <div
              class="col-12 d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
              <div>
                {{ $t('totalAmount') }}:
              </div>
              <div class="white--text font-weight-bold">
                {{
                  orderForm.isDelivery ? $store.getters['cart/cartCurrentTotalPrice'] + 500 : $store.getters['cart/cartCurrentTotalPrice']
                }} ₴
              </div>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row mt-5">
            <div class="col-12 cart_order-section_register-order_your-order_payment-methods white-opacity-07">
              <v-radio-group v-model="orderForm.paymentMethod" class="justify-center">
                <template v-slot:label>
                  <div class="cart_order-section_register-order_your-order-subheader">
                    {{ $t('paymentMethod') }}:
                  </div>
                </template>
                <div class="d-flex justify-end">
                  <div></div>
                  <div>
                    <v-radio color="white" value="cashlessPaymentTerminal" class="mt-5">
                      <template v-slot:label>
                        <div class="d-flex align-center">
                          <div>
                            {{ $t('cashlessPaymentTerminal') }}
                          </div>
                          <v-img
                            class="ml-1"
                            max-width="30"
                            src="https://icon-library.com/images/pos-terminal-icon/pos-terminal-icon-10.jpg"
                            lazy-src="https://icon-library.com/images/pos-terminal-icon/pos-terminal-icon-10.jpg"
                            contain>
                          </v-img>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio color="white" value="creditCard">
                      <template v-slot:label>
                        <div class="d-flex align-center">
                          <div>
                            {{ $t('withCreditCard') }}
                          </div>
                          <v-img
                            class="ml-5"
                            max-width="55"
                            src="https://mybalitrips.com/static/images/visa-mastercard.png"
                            lazy-src="https://mybalitrips.com/static/images/visa-mastercard.png"
                            contain>
                          </v-img>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio color="white" value="cash">
                      <template v-slot:label>
                        <div class="d-flex align-center">
                          <div>
                            {{ $t('cash') }}
                          </div>
                          <v-img
                            class="ml-5"
                            max-width="33"
                            src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
                            lazy-src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png"
                            contain>
                          </v-img>
                        </div>
                      </template>
                    </v-radio>
                  </div>
                </div>
              </v-radio-group>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row mt-5 pt-1">
            <div class="col-12">
              <v-btn
                color="green accent-4"
                large
                rounded
                @click="checkout"
                class="width-100 font-weight-bold white--text"
                light>
                {{ $t('checkout') }}
              </v-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import {mapGetters} from "vuex";
import {directive} from 'vue-awesome-swiper'

export default {
  name: "Cart",
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
      language: this.$i18n.locale,
      orderFormValid: false,
      rememberInformation: true,
      orderResponse: '',
      orderForm: {
        phone: '',
        email: '',
        address: '',
        home: '',
        floor: '',
        intercom: '',
        entrance: '',
        additional_information: '',
        isDelivery: true,
        paymentMethod: 'cashlessPaymentTerminal',
      },
      phoneRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('phone')}),
      ],
      addressRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('address')}),
      ],
      emailRules: [
        v => (!v || /.+@.+/.test(v)) || this.$t('validationText.mustBeValid', {fieldName: this.$t('emailAddress')}),
      ],
    }
  },

  mounted() {
    this.$store.commit('order/setCustomerOrderInformation');
  },

  computed: {
    ...mapGetters({
      customerOrderInformation: 'order/customerOrderInformation'
    })
  },

  methods: {
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
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
    addToFavorites(product) {
      this.$store.commit('favorites/add', product);
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
    },
    async checkout() {
      let productsLength = this.$store.getters['cart/data'].length;
      if (this.$refs.orderForm.validate() && productsLength) {
        let products = [];
        for (let i = 0; i < productsLength; i++) {
          products.push({
            id: this.$store.getters['cart/data'][i].id,
            qty: this.$store.getters['cart/data'][i].qty,
          })
        }
        await this.$store.dispatch('order/store', {
          products,
          orderForm: this.orderForm,
        }).then(response => {
          if (response.data.success) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.$store.commit('cart/clear')
          }
        })
        if (this.rememberInformation) {
          localStorage.setItem('customerOrderInformation', JSON.stringify(this.orderForm))
        }
      }
    },
  },
  watch: {
    customerOrderInformation(val) {
      if (val) {
        this.orderForm = Object.assign({}, this.orderForm, val)
      }
    }
  }
}
</script>

<style scoped>
#cart {
  margin-top: 18vh;
}

.cart_product_image {
  height: 190px;
}

.cart_product_texts_header {
  font-size: 33px;
}

.cart_product_remove {
  position: absolute;
  top: 5px;
  right: 0;
}

.cart_products_hr {
  margin: 0 8% 0 10%;
}

.cart_order-section_register-order_your-order_hr {
  margin: 0 10% 0 10% !important;
}

.cart_order-section_register-order_your-order-header {
  font-size: 38px;
}

.cart_order-section_register-order_your-order-costs {
  font-size: 20px;
}

.cart_order-section_register-order_your-order-subheader {
  color: white;
  font-size: 22px;
}

.cart_order-section_register-order_your-order_payment-methods {
  font-size: 18px;
}
</style>
