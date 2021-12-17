<template>
  <div id="cart">
    <client-only>
      <div class="pages_top_with_animation d-flex align-center justify-center pt-10">
        <div class="mr-3"
             data-aos="fade-right"
             data-aos-duration="1000">
          <hr>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000">
          <div class="component-top-header"
               data-aos="fade-up"
               data-aos-duration="1000">
            <div class="ml-4 black-text-shadow black--text white-brush-background font-caveat">
              <p class="py-8 px-sm-16 px-8"
                 data-aos="fade-up"
                 data-aos-delay="300"
                 data-aos-duration="1000"> {{ $t('cart') }}</p>
              <div id="formForLiq" class="d-none">
              </div>
            </div>
          </div>
        </div>
        <div class="ml-3"
             data-aos="fade-left"
             data-aos-duration="1000">
          <hr>
        </div>
      </div>
    </client-only>
    <div v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length"
         class="row cart_order-section container-padding">
      <div class="col-md-9 col-12 cart_order-section_products d-md-flex d-none">
        <div class="width-100">
          <div v-for="(cart, index) in $store.getters['cart/data']" :key="index">
            <div class="row cart_order-section_single position-relative align-center">
              <div class="col-12 col-sm-2">
                <v-hover
                  v-slot="{ hover }">
                  <v-img :class="{ 'opacity-05': hover }"
                         :lazy-src="baseUrl + cart.image"
                         :src="baseUrl + cart.image"
                         class="cart_product_image width-100 transition-05 cursor-pointer"
                         contain>
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
                      color="white"
                      icon
                      @click="updateQuantity({productId: cart.id, value: -1})">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                  <div class="col-6 cart_product_counter_row_quantity text-center font-brigada pt-4">
                    <p class="show_counter_quantity mb-0">{{ cart.qty }}</p>
                  </div>
                  <div class="col-3 cart_product_counter_row_plus d-flex justify-end">
                    <v-btn
                      color="white"
                      icon
                      @click="updateQuantity({productId: cart.id, value: 1})">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 col-6 cart_product_price">
                  <span class="cart_product_texts_description white--text">{{
                      $t('price')
                    }}: {{ cart.final_price }}</span>
              </div>
              <div class="col-1 cart_product_remove">
                <a class="close-button"
                   href="javascript:void(0)"
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
      <div id="cartOrderFormSection" class="col-md-3 col-12 cart_order-section_register-order">
        <div class="row mt-3">
          <div class="col-12  cart_order-section_register-order_your-order-header">
            <span>{{ $t('information') }}</span>
          </div>
        </div>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          class="mt-3"
          color="basil"
          grow>
          <v-tab>
            <v-icon class="pr-3">
              mdi-moped
            </v-icon>
            {{ $t('delivery') }}
          </v-tab>
          <v-tab>
            <v-icon class="pr-3">
              mdi-store
            </v-icon>
            {{ $t('takeItMyself') }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-form
              ref="orderFormDelivery"
              v-model="orderFormDeliveryValid"
              lazy-validation>
              <div class="row pt-3">
                <div class="col-12  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.phone"
                    v-mask="'(###) ### - ## - ##'"
                    :hint="$t('forExample') + ' (096) 599 - 09 - 09'"
                    :label="$t('phone') + ' *'"
                    :rules="phoneRules"
                    color="white"
                    filled
                    name="phone"
                    required
                    type="tel">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.address"
                    :hint="$t('addressExample')"
                    :label="$t('address') + ' * (' + $t('addressExample') + ')'"
                    :rules="addressRules"
                    color="white"
                    filled
                    name="address"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.email"
                    :label="$t('emailAddress')"
                    :rules="emailRules"
                    color="white"
                    filled
                    name="email">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.entrance"
                    :label="$t('entrance')"
                    color="white"
                    filled
                    name="entrance"
                    required>
                  </v-text-field>
                </div>
                <div class="col-6  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.intercom"
                    :label="$t('intercom')"
                    color="white"
                    filled
                    name="intercom"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-6  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.floor"
                    :label="$t('floor')"
                    color="white"
                    filled
                    name="floor"
                    required>
                  </v-text-field>
                </div>
                <div class="col-6  py-0">
                  <v-text-field
                    v-model="orderFormDelivery.home"
                    :label="$t('homeApartmentOffice')"
                    color="white"
                    filled
                    name="home"
                    required>
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12  py-0">
                  <v-textarea
                    v-model="orderFormDelivery.additional_information"
                    :label="$t('additionalInformationAboutOrder')"
                    color="white"
                    filled
                    name="additional_information">
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
                    <span class="font-brigada">{{ $store.getters['cart/cartCurrentTotalPrice'] }}</span> грн
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row" v-if="$store.getters['cart/cartCurrentTotalPrice'] >= 200">
                <div
                  class="col-12  d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
                  <div>
                    {{ $t('delivery') }}:
                  </div>
                  <div>
                    <div>
                      <span class="font-brigada" v-if="$store.getters['cart/cartCurrentTotalPrice'] >= 500">{{ $t('free') }}</span>
                      <span class="font-brigada" v-else>100 грн</span>
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
                    <span class="font-brigada" v-if="$store.getters['cart/cartCurrentTotalPrice'] < 200">{{ $store.getters['cart/cartCurrentTotalPrice'] }} грн</span>
                    <span class="font-brigada" v-else-if="$store.getters['cart/cartCurrentTotalPrice'] >= 200 && $store.getters['cart/cartCurrentTotalPrice'] < 500">{{ $store.getters['cart/cartCurrentTotalPrice'] + 100 }} грн</span>
                    <span class="font-brigada" v-else>{{ $store.getters['cart/cartCurrentTotalPrice'] }} грн</span>
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div v-if="$store.getters['cart/cartCurrentTotalPrice'] < 200" class="row">
                <div
                  class="col-12 d-flex font-weight-bold justify-space-between cart_order-section_register-order_your-order-costs red--text text--darken-4">
                  <div>
                    {{ $t('minOrder') }}:
                  </div>
                  <div>
                    <span class="font-brigada">200</span> грн
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div class="row">
                <div class="col-12">
                  <span v-html="$t('deliveryAndPaymentPageContent.div1')"></span>
                </div>
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
                        <v-radio class="mt-5" color="white" value="cashlessPaymentTerminal">
                          <template v-slot:label>
                            <div class="d-flex align-center">
                              <div>
                                {{ $t('cashlessPaymentTerminal') }}
                              </div>
                              <v-img
                                :lazy-src="require('~/assets/images/terminal.png')"
                                :src="require('~/assets/images/terminal.png')"
                                class="ml-1"
                                contain
                                max-width="30">
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
                                :lazy-src="require('~/assets/images/visa-mastercard.png')"
                                :src="require('~/assets/images/visa-mastercard.png')"
                                class="ml-3"
                                contain
                                max-width="55">
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
                                :lazy-src="require('~/assets/images/cash.png')"
                                :src="require('~/assets/images/cash.png')"
                                class="ml-3"
                                contain
                                max-width="33">
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
              <div class="row">
                <div class="col-12">
                  <v-dialog
                    v-model="publicContractDialog"
                    light
                    width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <span>
                        {{ $t('iAcceptContract.part1') }}
                      </span>
                      <span>
                        {{ $t('iAcceptContract.part3') }}
                      </span>
                      <span
                        class="red--text text--darken-4 font-weight-bold"
                        v-bind="attrs"
                        v-on="on">
                        {{ $t('iAcceptContract.part2') }}
                      </span>
                    </template>
                    <v-card>
                      <v-card-title class="d-flex justify-center px-4">
                        <p class="text-h5">{{ $t('publicDocumentPageContent.header') }}</p>
                      </v-card-title>
                      <v-card-text class="px-4 black--text">
                        <div class="font-weight-black publicContract_subheaders">
                          <span v-html="$t('publicDocumentPageContent.div1')"></span>
                        </div>
                        <div class="margin-top-4vh">
                          <span v-html="$t('publicDocumentPageContent.div2')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div3')"></span>
                          <span v-html="$t('publicDocumentPageContent.div4')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div5')"></span>
                          <span v-html="$t('publicDocumentPageContent.div6')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div7')"></span>
                          <span v-html="$t('publicDocumentPageContent.div8')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div9')"></span>
                          <span v-html="$t('publicDocumentPageContent.div10')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div11')"></span>
                          <span v-html="$t('publicDocumentPageContent.div12')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div13')"></span>
                          <span v-html="$t('publicDocumentPageContent.div14')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div15')"></span>
                          <span v-html="$t('publicDocumentPageContent.div16')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div17')"></span>
                          <span v-html="$t('publicDocumentPageContent.div18')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div19')"></span>
                          <span v-html="$t('publicDocumentPageContent.div20')"></span>
                        </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-center">
                        <v-btn
                          color="red darken-4"
                          text
                          @click="publicContractDialog = false">
                          {{ $t('iAccept') }}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </div>
              <div class="row mt-5 pt-1">
                <div class="col-12 ">
                  <v-btn
                    v-if="$moment(new Date).format('H:mm:ss') > '23:20:00' || $moment(new Date).format('H:mm:ss') < '10:00:00'"
                    class="width-100 font-weight-bold white--text red-pattern-background"
                    color="red darken-4"
                    large
                    light
                    rounded>
                    {{ $t('orderTime.part1') }} <br class="make-2-line"> {{ $t('orderTime.part2') }}
                  </v-btn>
                  <v-btn
                    v-else-if="$store.getters['cart/cartCurrentTotalPrice'] < 200"
                    class="width-100 font-weight-bold white--text red-pattern-background"
                    color="red darken-4"
                    large
                    light
                    rounded>
                    {{ $t('minOrder') }}: 200 грн
                  </v-btn>
                  <v-btn
                    v-else
                    :loading="checkoutDeliveryButtonLoading"
                    class="width-100 font-weight-bold white--text"
                    color="green accent-4"
                    large
                    light
                    rounded
                    @click="checkout('orderFormDelivery')">
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
              <div class="row pt-3">
                <div class="col-12 py-0">
                  <v-text-field
                    v-model="orderFormNotDelivery.phone"
                    v-mask="'(###) ### - ## - ##'"
                    :hint="$t('forExample') + ' (096) 599 - 09 - 09'"
                    :label="$t('phone') + ' *'"
                    :rules="phoneRules"
                    color="white"
                    filled
                    name="phone"
                    required
                    type="tel">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 py-0">
                  <v-text-field
                    v-model="orderFormNotDelivery.name"
                    :label="$t('name') + ' *'"
                    :rules="nameRules"
                    color="white"
                    filled
                    name="name"
                    required
                    type="text">
                  </v-text-field>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12 py-0">
                  <v-text-field
                    v-model="orderFormNotDelivery.email"
                    :label="$t('emailAddress')"
                    :rules="emailRules"
                    color="white"
                    filled
                    name="email">
                  </v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col-12 py-0">
                  <v-textarea
                    v-model="orderFormNotDelivery.additional_information"
                    :label="$t('additionalInformationAboutOrder')"
                    color="white"
                    filled
                    name="additional_information">
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
                    <span class="font-brigada">
                      {{ $store.getters['cart/cartCurrentTotalPrice'] }}
                    </span> грн
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
                    <span class="font-brigada">{{ $store.getters['cart/cartCurrentTotalPrice'] }}</span> грн
                  </div>
                </div>
                <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
              </div>
              <div v-if="$store.getters['cart/cartCurrentTotalPrice'] < 200" class="row">
                <div
                  class="col-12 d-flex font-weight-bold justify-space-between cart_order-section_register-order_your-order-costs red--text text--darken-4">
                  <div>
                    {{ $t('minOrder') }}:
                  </div>
                  <div>
                    <span class="font-brigada">200</span> грн
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
                        <v-radio class="mt-5" color="white" value="cashlessPaymentTerminal">
                          <template v-slot:label>
                            <div class="d-flex align-center">
                              <div>
                                {{ $t('cashlessPaymentTerminal') }}
                              </div>
                              <v-img
                                :lazy-src="require('~/assets/images/terminal.png')"
                                :src="require('~/assets/images/terminal.png')"
                                class="ml-1"
                                contain
                                max-width="30">
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
                                :lazy-src="require('~/assets/images/visa-mastercard.png')"
                                :src="require('~/assets/images/visa-mastercard.png')"
                                class="ml-3"
                                contain
                                max-width="55">
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
                                :lazy-src="require('~/assets/images/cash.png')"
                                :src="require('~/assets/images/cash.png')"
                                class="ml-5"
                                contain
                                max-width="33">
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
              <div class="row">
                <div class="col-12">
                  <v-dialog
                    v-model="publicContractDialog"
                    light
                    width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <span>
                        {{ $t('iAcceptContract.part1') }}
                      </span>
                      <span>
                        {{ $t('iAcceptContract.part3') }}
                      </span>
                      <span
                        class="red--text text--darken-4 font-weight-bold"
                        v-bind="attrs"
                        v-on="on">
                        {{ $t('iAcceptContract.part2') }}
                      </span>
                    </template>
                    <v-card>
                      <v-card-title class="d-flex justify-center px-4">
                        <p class="text-h5">{{ $t('publicDocumentPageContent.header') }}</p>
                      </v-card-title>
                      <v-card-text class="px-4 black--text">
                        <div class="font-weight-black publicContract_subheaders">
                          <span v-html="$t('publicDocumentPageContent.div1')"></span>
                        </div>
                        <div class="margin-top-4vh">
                          <span v-html="$t('publicDocumentPageContent.div2')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div3')"></span>
                          <span v-html="$t('publicDocumentPageContent.div4')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div5')"></span>
                          <span v-html="$t('publicDocumentPageContent.div6')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div7')"></span>
                          <span v-html="$t('publicDocumentPageContent.div8')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div9')"></span>
                          <span v-html="$t('publicDocumentPageContent.div10')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div11')"></span>
                          <span v-html="$t('publicDocumentPageContent.div12')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div13')"></span>
                          <span v-html="$t('publicDocumentPageContent.div14')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div15')"></span>
                          <span v-html="$t('publicDocumentPageContent.div16')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div17')"></span>
                          <span v-html="$t('publicDocumentPageContent.div18')"></span>
                        </div>
                        <div class="margin-top-4vh">
                            <span class="font-weight-black publicContract_subheaders"
                                  v-html="$t('publicDocumentPageContent.div19')"></span>
                          <span v-html="$t('publicDocumentPageContent.div20')"></span>
                        </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-center">
                        <v-btn
                          color="red darken-4"
                          text
                          @click="publicContractDialog = false">
                          {{ $t('iAccept') }}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </div>
              <div class="row mt-5 pt-1">
                <div class="col-12 ">
                  <v-btn
                    v-if="$moment(new Date).format('H:mm:ss') > '23:20:00' || $moment(new Date).format('H:mm:ss') < '10:00:00'"
                    class="width-100 font-weight-bold white--text red-pattern-background"
                    color="red darken-4"
                    large
                    light
                    rounded>
                    {{ $t('orderTime.part1') }} <br class="make-2-line"> {{ $t('orderTime.part2') }}
                  </v-btn>
                  <v-btn
                    v-else-if="$store.getters['cart/cartCurrentTotalPrice'] < 200"
                    class="width-100 font-weight-bold white--text red-pattern-background"
                    color="red darken-4"
                    large
                    light
                    rounded>
                    {{ $t('minOrder') }}: 200 грн
                  </v-btn>
                  <v-btn
                    v-else
                    :loading="checkoutNotDeliveryButtonLoading"
                    class="width-100 font-weight-bold white--text"
                    color="green accent-4"
                    large
                    light
                    rounded
                    @click="checkout('orderFormNotDelivery')">
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
            :lazy-src="require('~/assets/images/empty-cart.png')"
            :src="require('~/assets/images/empty-cart.png')"
            class="width-100"
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
      checkoutNotDeliveryButtonLoading: false,
      checkoutDeliveryButtonLoading: false,
      orderFormNotDeliveryValid: false,
      publicContractDialog: false,
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
    async checkout(method) {
      let productsLength = this.$store.getters['cart/data'].length;
      if (this.$refs[method].validate() && productsLength) {
        if (method === 'orderFormDelivery') {
          this.checkoutDeliveryButtonLoading = true;
        } else {
          this.checkoutNotDeliveryButtonLoading = true;
        }
        let products = [];
        for (let i = 0; i < productsLength; i++) {
          products.push({
            id: this.$store.getters['cart/data'][i].id,
            qty: this.$store.getters['cart/data'][i].qty,
          })
        }
        await this.$store.dispatch('order/store', {
          language: this.$i18n.locale,
          products,
          orderForm: this[method],
        }).then(response => {
          if (response.data.formSuccess) {
            document.getElementById('formForLiq').innerHTML = response.data.form;
            let htmlForm = document.querySelector('form[action="https://www.liqpay.ua/api/3/checkout"]')
            htmlForm.submit();
            this.$store.commit('cart/clear')
          } else if (response.data.success) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Ваш заказ был успешно получен',
              confirmButtonText: this.$t('ok'),
              confirmButtonColor: '#060606',
              showConfirmButton: true
            });
            this.$router.push({path: this.localePath("/products/all-catalog/all-brands/page-1")})
            if (method === 'orderFormDelivery') {
              this.checkoutDeliveryButtonLoading = false;
            } else {
              this.checkoutNotDeliveryButtonLoading = false;
            }
            this.$store.commit('cart/clear')
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Error',
              confirmButtonText: this.$t('ok'),
              confirmButtonColor: '#060606',
              showConfirmButton: true
            });
          }
        })
        if (this.rememberInformation) {
          localStorage.setItem('customerOrderInformation', JSON.stringify(this[method]))
        }
      } else {
        document.getElementById('cartOrderFormSection').scrollIntoView();
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

.make-2-line {
  display: none;
}
</style>
