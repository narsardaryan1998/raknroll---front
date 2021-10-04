<template>
  <div id="product-show">
    <div class="row product-show_product container container-padding">
      <div class="col-md-5 col-sm-12">
        <zoom-on-hover :scale="1.1" class="cursor-zoom-in product-show_product_image"
                       :img-normal="require('~/assets/images/products/LUK_7002-2+.png')"></zoom-on-hover>
      </div>
      <div class="col-md-7 col-sm-12">
        <div class="row">
          <div class="col-md-12">
            <span class="product-show_product_name">Каліфорнія з вугром <hr></span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-center">
              <div>
                <v-rating
                  color="red darken-4"
                  hover
                  v-model="rating"
                  dense
                  half-increments
                  size="25">
                </v-rating>
              </div>
              <div class="ml-3">
                <span>4.5 | <span class="white-opacity-07">(62 Reviews)</span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 product-show_product_price">
            <span>{{ $t('price') }}: 360 ₴ / <span class="white-opacity-07">(1 штука)</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductDetail",
    data() {
      return {
        rating: 4.8
      }
    }
  }
</script>

<style>
  #product-show {
    font-family: 'Caveat', cursive !important;
    margin-top: 9vw;
  }

  .product-show_product_image {
    width: 100% !important;
  }

  .product-show_product_name {
    font-size: 2.2vw;
  }

  .product-show_product_price {
    font-size: 1.5vw;
  }

  .product-show_product_name hr {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  .product-show_product_price .white-opacity-07{
    font-size: 1.1vw;;
  }
</style>
