<template>
  <div id="cart" class="container container-padding">
    <div class="cart_top_section d-flex justify-space-between align-center">
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
      <div class="col-md-6 col-sm-12">
        <div v-for="item in items">
          <div class="row cart_products align-center">
            <div class="col-md-2">
              <v-hover
                v-slot="{ hover }">
                <v-img class="cart_product_image cursor-pointer"
                       contain
                       :class="{ 'opacity-is-50': hover }"
                       :src="require('~/assets/images/products/sush9421-swiper.png')"
                       :lazy-src="require('~/assets/images/products/sush9421-swiper.png')">
                </v-img>
              </v-hover>
            </div>
            <div class="col-md-6 cart_product_texts">
              <span class="cart_product_texts_header">Каліфорнія з вугром</span>
              <br>
              <span class="cart_product_texts_description white-opacity-07">Lorem ipsum dolor sit amet, consectetur adipisicing elit  tetur adipisicing elit.</span>
            </div>
            <div class="col-md-3 cart_product_counter">
              <div class="row cart_product_counter_row">
                <div class="col-md-3 cart_product_counter_row_minus pr-0">
                  <v-btn
                    icon
                    color="white">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </div>
                <div class="col-md-6 cart_product_counter_row_quantity">
                  <v-text-field
                    name="Quantity"
                    value="1"
                    color="red darken-4"
                    :counter="50"
                    hide-details
                    required>
                  </v-text-field>
                </div>
                <div class="col-md-3 pl-0 cart_product_counter_row_plus">
                  <v-btn
                    icon
                    color="white">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="col-md-1 cart_product_remove">
              <v-btn
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
    data(){
      return {
        items: [1,2,3,4,5]
      }
    }
  }
</script>

<style scoped>
  #cart {
    font-family: 'Caveat', cursive !important;
    margin-top: 9vw;
  }

  .cart_top_section_header_hr {
    width: 8vw;
    border: 0.075vw solid #ffffff;
    background-color: #ffffff;
  }

  .cart_contacts_data_subheader hr {
    width: 4vw;
    border: 0.04vw solid rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.7);
  }

  .cart_top_section_header {
    font-size: 3.5vw;
    width: 40%;
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

  .cart_products_hr{
    margin: 0 8% 0 10%;
  }
</style>
