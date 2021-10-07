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

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart"
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

</style>
