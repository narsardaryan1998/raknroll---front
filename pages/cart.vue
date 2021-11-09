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
      <div class="col-md-9 col-12 cart_order-section_products">
        <div v-if="$store.getters['cart/data'] && $store.getters['cart/data'].length">
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
                    }}: {{ cart.final_price }} ₴ x {{ cart.qty }}</span>
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
      <div class="col-md-3 col-12 cart_order-section_register-order">
        <div class="row">
          <div class="col-12 cart_order-section_register-order_your-order-header">
            <span>Информация</span>
          </div>
        </div>
        <v-form
          ref="orderForm"
          v-model="orderFormValid"
          lazy-validation>
          <div class="row">
            <div class="col-12 pb-0">
              <v-text-field
                type="tel"
                name="phone"
                color="white"
                :rules="phoneRules"
                v-mask="'(###) ### - ## - ##'"
                hint="For example - 0965990909"
                :label="$t('phone') + ' *'"
                v-model="orderForm.phone"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-0">
              <v-text-field
                name="address"
                color="white"
                hint="For example - 0965990909"
                v-model="orderForm.address"
                :rules="addressRules"
                :label="$t('address') + ' *'"
                required>
              </v-text-field>
            </div>
          </div>
          <div class="row">
            <div class="col-12 py-0">
              <v-textarea
                v-model="orderForm.additional_information"
                name="additional_information"
                color="white"
                :label="'Additional information'">
              </v-textarea>
            </div>
          </div>
          <div class="row margin-top-from-header">
            <div class="col-12 cart_order-section_register-order_your-order-header">
              <span>Ваш заказ</span>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
              <div>
                Кэшбэк
              </div>
              <div>
                263 ₴
              </div>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row">
            <div
              class="col-12 d-flex justify-space-between cart_order-section_register-order_your-order-costs white-opacity-07">
              <div>
                Покупки
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
                Перевозки
              </div>
              <div>
                <v-radio-group
                  v-model="orderForm.isDelivery"
                  column>
                  <v-radio
                    color="white"
                    label="Заберу сам + 0 ₴"
                    :value="false">
                  </v-radio>
                  <v-radio
                    color="white"
                    label="Доставка + 500 ₴"
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
                Общий
              </div>
              <div>
                {{
                  orderForm.isDelivery ? $store.getters['cart/cartCurrentTotalPrice'] + 500 : $store.getters['cart/cartCurrentTotalPrice']
                }} ₴
              </div>
            </div>
            <v-divider class="cart_order-section_register-order_your-order_hr" inset></v-divider>
          </div>
          <div class="row margin-top-from-header">
            <div class="col-12">
              <v-btn
                large
                rounded
                @click="finishOrder"
                class="width-100 font-weight-bold"
                light>
                Завершить заказ
              </v-btn>
            </div>
          </div>
        </v-form>
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
      orderFormValid: false,
      orderForm: {
        phone: '',
        address: '',
        additional_information: '',
        isDelivery: true,
      },
      phoneRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('phone')}),
      ],
      addressRules: [
        v => !!v || this.$t('validationText.fieldRequired', {fieldName: this.$t('address')}),
      ],
    }
  },
  methods: {
    updateQuantity(params) {
      this.$store.commit('cart/updateQuantity', params);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    finishOrder() {
      if (this.$refs.orderForm.validate()) {

      }
    }
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

.cart_order-section_register-order_your-order_hr {
  margin: 0 10% 0 10% !important;
}

.cart_order-section_register-order_your-order-header {
  font-size: 38px;
}

.cart_order-section_register-order_your-order-costs {
  font-size: 20px;
}
</style>
