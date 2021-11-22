<template>
  <div id="cart">
    <div
      class="cart_top_section page-header width-100 margin-bottom-10vh">
      <v-img
        position="center"
        class="width-100 height-100"
        :src="require('~/assets/photo-1583623025817-d180a2221d0a.jpg')"
        :lazy-src="require('~/assets/photo-1583623025817-d180a2221d0a.jpg')"
        cover>
        <p class="width-100 text-center">{{ $t('cart') }}</p>
      </v-img>
    </div>
    <div class="row cart_order-section container-padding"
         v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length">
      <div class="col-md-9 col-12 cart_order-section_products">
        <div>
          <div v-for="(cart, index) in $store.getters['cart/data']" :key="index">
            <div class="row cart_order-section_single position-relative align-center">
              <div class="col-12 col-sm-2">
                <v-hover
                  v-slot="{ hover }">
                  <v-img class="cart_product_image width-100 transition-05 cursor-pointer"
                         contain
                         :class="{ 'opacity-05': hover }"
                         :src="baseUrl + cart.image"
                         :lazy-src="baseUrl + cart.image">
                  </v-img>
                </v-hover>
              </div>
              <div class="col-12 col-sm-5 cart_product_texts">
                <span class="cart_product_texts_header">{{ cart.name }}</span>
                <br>
                <span class="cart_product_texts_description white-opacity-07">{{ cart.short_description }}</span>
              </div>
              <div class="col-sm-2 col-6 cart_product_counter">
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
              <div class="col-sm-2 col-6 cart_product_price">
                  <span class="cart_product_texts_description white-opacity-07" v-if="cart.qty > 1">{{
                      $t('price')
                    }}: {{ cart.final_price }} ₴ x {{ cart.qty }}</span>
                <span class="cart_product_texts_description white-opacity-07" v-else>{{
                    $t('price')
                  }}: {{ cart.final_price }} ₴</span>
              </div>
              <div class="col-1 cart_product_remove">
                <a href="javascript:void(0)"
                   class="close-button"
                   @click="deleteFromCart(cart.id)">
                  <div class="in">
                    <div class="close-button-block"></div>
                    <div class="close-button-block"></div>
                  </div>
                  <div class="out">
                    <div class="close-button-block"></div>
                    <div class="close-button-block"></div>
                  </div>
                </a>
              </div>
            </div>
            <v-divider class="cart_products_hr" inset></v-divider>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-12 cart_order-section_register-order">
        <div class="row mt-3">
          <div class="col-12  cart_order-section_register-order_your-order-header">
            <span>{{ $t('information') }}</span>
          </div>
        </div>
        <v-tabs
          class="mt-3"
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow>
          <v-tab
            v-for="item in orderMethods"
            :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-form
              ref="orderFormDelivery"
              v-model="orderFormDeliveryValid"
              lazy-validation>
              <div class="row mt-3">
                <div
                  class="col-12  pb-0 cart_order-section_register-order_your-order-subheader red--text text--darken-4">
                  {{ $t('requiredFields') }}:
                  <v-icon color="red darken-4">mdi-arrow-down-box</v-icon>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12  py-0">
                  <v-text-field
                    filled
                    type="tel"
                    name="phone"
                    color="white"
                    :rules="phoneRules"
                    v-mask="'(###) ### - ## - ##'"
                    :hint="$t('forExample') + ' (096) 599 - 09 - 09'"
                    :label="$t('phone') + ' *'"
                    v-model="orderFormDelivery.phone"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0">
                  <v-text-field
                    filled
                    name="address"
                    color="white"
                    :hint="$t('addressExample')"
                    v-model="orderFormDelivery.address"
                    :rules="addressRules"
                    :label="$t('address') + ' * (' + $t('addressExample') + ')'"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12  pb-0 cart_order-section_register-order_your-order-subheader">
                  {{ $t('optionalFields') }}:
                  <v-icon>mdi-arrow-down-box</v-icon>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12  py-0">
                  <v-text-field
                    filled
                    name="email"
                    color="white"
                    :label="$t('emailAddress')"
                    v-model="orderFormDelivery.email"
                    :rules="emailRules">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6  py-0">
                  <v-text-field
                    filled
                    name="entrance"
                    color="white"
                    :label="$t('entrance')"
                    v-model="orderFormDelivery.entrance"
                    required>
                  </v-text-field>
                </div>
                <div class="col-6  py-0">
                  <v-text-field
                    filled
                    name="intercom"
                    color="white"
                    :label="$t('intercom')"
                    v-model="orderFormDelivery.intercom"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6  py-0">
                  <v-text-field
                    filled
                    name="floor"
                    color="white"
                    :label="$t('floor')"
                    v-model="orderFormDelivery.floor"
                    required>
                  </v-text-field>
                </div>
                <div class="col-6  py-0">
                  <v-text-field
                    filled
                    name="home"
                    color="white"
                    :label="$t('homeApartmentOffice')"
                    v-model="orderFormDelivery.home"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0">
                  <v-textarea
                    filled
                    v-model="orderFormDelivery.additional_information"
                    name="additional_information"
                    color="white"
                    :label="$t('additionalInformationAboutOrder')">
                  </v-textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0 d-flex justify-end">
                  <v-checkbox
                    v-model="rememberInformation"
                    :label="$t('rememberMyInformation')"
                    color="white"
                    hide-details>
                  </v-checkbox>
                </div>
              </div>
              <div class="row margin-top-6vh">
                <div class="col-12  cart_order-section_register-order_your-order-header">
                  <span>{{ $t('yourOrder') }}</span>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
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
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
                  <div>
                    {{ $t('shipping') }}:
                  </div>
                  <div>
                    <div>
                      + 500 ₴
                    </div>
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row">
                <div
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
                  <div>
                    {{ $t('totalAmount') }}:
                  </div>
                  <div class="white--text font-weight-bold">
                    {{
                      orderFormDelivery.isDelivery ? $store.getters['cart/cartCurrentTotalPrice'] + 500 : $store.getters['cart/cartCurrentTotalPrice']
                    }} ₴
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row mt-5">
                <div class="col-12  cart_order-section_register-order_your-order_payment-methods white-opacity-07">
                  <v-radio-group v-model="orderFormDelivery.paymentMethod" class="justify-center">
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
                <div class="col-12 ">
                  <v-btn
                    color="green accent-4"
                    large
                    rounded
                    @click="checkoutDelivery"
                    class="width-100 font-weight-bold white--text"
                    light>
                    {{ $t('checkout') }}
                  </v-btn>
                </div>
              </div>
            </v-form>
          </v-tab-item>
          <v-tab-item>
            <v-form
              ref="orderFormNotDelivery"
              v-model="orderFormNotDeliveryValid"
              lazy-validation>
              <div class="row mt-3">
                <div
                  class="col-12  pb-0 cart_order-section_register-order_your-order-subheader red--text text--darken-4">
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
                    v-model="orderFormNotDelivery.phone"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 py-0">
                  <v-text-field
                    filled
                    type="text"
                    name="name"
                    color="white"
                    :rules="nameRules"
                    :label="$t('name') + ' *'"
                    v-model="orderFormNotDelivery.name"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12  pb-0 cart_order-section_register-order_your-order-subheader">
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
                    v-model="orderFormNotDelivery.email"
                    :rules="emailRules">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 py-0">
                  <v-textarea
                    filled
                    v-model="orderFormNotDelivery.additional_information"
                    name="additional_information"
                    color="white"
                    :label="$t('additionalInformationAboutOrder')">
                  </v-textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0 d-flex justify-end">
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
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
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
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
                  <div>
                    {{ $t('shipping') }}:
                  </div>
                  <div>
                    <div>
                      -
                    </div>
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row">
                <div
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
                  <div>
                    {{ $t('totalAmount') }}:
                  </div>
                  <div class="white--text font-weight-bold">
                    {{
                      orderFormNotDelivery.isDelivery ? $store.getters['cart/cartCurrentTotalPrice'] + 500 : $store.getters['cart/cartCurrentTotalPrice']
                    }} ₴
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row mt-5">
                <div class="col-12  cart_order-section_register-order_your-order_payment-methods white-opacity-07">
                  <v-radio-group v-model="orderFormNotDelivery.paymentMethod" class="justify-center">
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
                <div class="col-12 ">
                  <v-btn
                    color="green accent-4"
                    large
                    rounded
                    @click="checkoutNotDelivery"
                    class="width-100 font-weight-bold white--text"
                    light>
                    {{ $t('checkout') }}
                  </v-btn>
                </div>
              </div>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
    <div v-else-if="$store.getters['cart/data'] && !$store.getters['cart/data'].length">
      <div class="row your-cart-is-empty">
        <div class="col-12 text-center">
          <span class="white--text">{{ $t('yourCartIsEmpty') }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3 offset-md-4">
          <v-img
            class="width-100"
            :src="require('~/assets/empty-cart.png')"
            :lazy-src="require('~/assets/empty-cart.png')"
            contain>
          </v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import {mapGetters} from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      tab: null,
      baseUrl: process.env.BASE_URL,
      orderMethods: [
        this.$t('delivery'), this.$t('takeItMyself'),
      ],
      orderFormDeliveryValid: false,
      orderFormNotDeliveryValid: false,
      rememberInformation: true,
      orderResponse: '',
      orderFormDelivery: {
        phone: null,
        email: null,
        address: null,
        home: null,
        floor: null,
        intercom: null,
        entrance: null,
        additional_information: null,
        isDelivery: true,
        paymentMethod: 'cashlessPaymentTerminal',
      },
      orderFormNotDelivery: {
        phone: null,
        email: null,
        name: null,
        additional_information: null,
        isDelivery: false,
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
      nameRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('name')}),
        v => (v && v.length > 3) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('more'),
          qty: '4',
        }),
        v => (v && v.length <= 50) || this.$t('validationText.moreOrLessThenCharacters', {
          fieldName: this.$t('name'),
          moreOrLess: this.$t('less'),
          qty: '50',
        }),
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
    async checkoutDelivery() {
      let productsLength = this.$store.getters['cart/data'].length;
      if (this.$refs.orderFormDelivery.validate() && productsLength) {
        let products = [];
        for (let i = 0; i < productsLength; i++) {
          products.push({
            id: this.$store.getters['cart/data'][i].id,
            qty: this.$store.getters['cart/data'][i].qty,
          })
        }
        await this.$store.dispatch('order/store', {
          products,
          orderForm: this.orderFormDelivery,
        }).then(response => {
          if (response.data.success) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.$router.push({path: this.localePath("/products/all-catalog/all-brands/page-1")})
            this.$store.commit('cart/clear')
          }
        })
        if (this.rememberInformation) {
          localStorage.setItem('customerOrderInformation', JSON.stringify(this.orderFormDelivery))
        }
      }
    },
    async checkoutNotDelivery() {
      let productsLength = this.$store.getters['cart/data'].length;
      if (this.$refs.orderFormNotDelivery.validate() && productsLength) {
        let products = [];
        for (let i = 0; i < productsLength; i++) {
          products.push({
            id: this.$store.getters['cart/data'][i].id,
            qty: this.$store.getters['cart/data'][i].qty,
          })
        }
        await this.$store.dispatch('order/store', {
          products,
          orderForm: this.orderFormNotDelivery,
        }).then(response => {
          if (response.data.success) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            });
            this.$router.push({path: this.localePath("/products/all-catalog/all-brands/page-1")})
            this.$store.commit('cart/clear');
          }
        })
        if (this.rememberInformation) {
          localStorage.setItem('customerOrderInformation', JSON.stringify(this.orderFormNotDelivery))
        }
      }
    },
  },
  watch: {
    customerOrderInformation(val) {
      if (val) {
        if (val.isDelivery) {
          this.orderFormDelivery = Object.assign({}, this.orderFormDelivery, val)
        } else {
          this.orderFormNotDelivery = Object.assign({}, this.orderFormNotDelivery, val)
        }
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

.your-cart-is-empty {
  font-size: 60px;
}
</style>
