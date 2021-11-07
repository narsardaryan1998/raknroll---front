<template>
  <div>
    <Intro></Intro>
    <div id="discounted" class="inset-shadow-10 white-pattern-background">
      <div class="container container-padding">
        <div class="discounted_top_section d-flex justify-space-between align-center">
          <div class="component-top-header d-flex align-center"
               data-aos="fade-right"
               data-aos-duration="1500">
            <div>
              <hr class="component-top-header-hr">
            </div>
            <div class="ml-4">
              <span>{{ $t('discounted') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="discounted_products margin-top-from-header"
           ref="discountedProducts"
           data-aos="fade-right"
           data-aos-delay="700"
           data-aos-duration="1500">
        <div class="d-flex" v-swiper="swiperOption">
          <div class="swiper-wrapper"
               v-for="(product, index) in $store.getters['home/data'].discountedProducts" :key="product.slug">
            <div class="swiper-slide">
              <v-card
                elevation="0"
                dark
                class="mx-auto my-12 mt-0 products_show_product"
                max-width="374">
                <v-hover
                  v-slot="{ hover }">
                  <NuxtLink :to='localePath("/product/show/" + product.slug)'>
                    <v-img class="products_show_product_image"
                           :class="{ 'opacity-is-8': hover }"
                           :src="'http://raknroll.ua/' + product.image"
                           :lazy-src="'http://raknroll.ua/' + product.image">
                    </v-img>
                  </NuxtLink>
                </v-hover>
                <v-card-title class="black--text font-weight-bold">{{ product.name }}</v-card-title>
                <v-card-text class="p-0 grey--text text--darken-3 font-weight-bold">
                  <v-row
                    class="mx-0"
                    align="center">
                    <v-rating
                      :value="parseFloat(product.rating)"
                      color="red darken-4"
                      dense
                      half-increments
                      readonly
                      size="14">
                    </v-rating>
                    <div class="ml-2 font-brigada">| {{ product.final_price }} ₴
                    </div>
                  </v-row>
                  <div class="my-4 subtitle-1">
                  </div>
                  <div>{{ product.short_description }}
                  </div>
                </v-card-text>
                <v-card-actions class="p-0">
                  <v-bottom-navigation
                    class="products_show_product"
                    grow>
                    <v-btn class="p-0 mw-100"
                           v-if="!$store.getters['cart/storageData'].find(cart => product.id === cart.id)"
                           @click="addToCart(product)">
                      <span class="grey--text text--darken-3 font-weight-bold">{{ $t('userButtons.cart') }}</span>
                      <v-icon color="grey darken-3">mdi-cart</v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           v-else
                           @click="deleteFromCart(product.id)">
                      <span class="grey--text text--darken-3 font-weight-bold">{{ $t('userButtons.cart') }}</span>
                      <v-icon
                        color="red darken-4">mdi-cart-off
                      </v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           v-if="!$store.getters['favorites/storageData'].find(favorite => product.id === favorite.id)"
                           @click="addToFavorites(product)">
                      <span class="grey--text text--darken-3 font-weight-bold">{{ $t('userButtons.favorites') }}</span>
                      <v-icon color="grey darken-3">mdi-heart</v-icon>
                    </v-btn>
                    <v-btn class="p-0 mw-100"
                           v-else
                           @click="deleteFromFavorites(product.id)">
                      <span class="grey--text text--darken-3 font-weight-bold">{{ $t('userButtons.favorites') }}</span>
                      <v-icon
                        color="red darken-4">mdi-heart-off
                      </v-icon>
                    </v-btn>
                  </v-bottom-navigation>
                </v-card-actions>
              </v-card>
            </div>
          </div>
          <div class="swiper-button-next red--text text--darken-4"><span class="icon-play"></span></div>
          <div class="swiper-button-prev red--text text--darken-4"><span class="icon-play-flip"></span></div>
          <div class="swiper-pagination" v-for="(item,index) in $store.getters['home/data'].discountedProducts"
               :key="index" slot="pagination">
          </div>
        </div>
      </div>
    </div>
    <div id="main_about_us">
      <div class="container container-padding">
        <div class="main_about_us_top_section d-flex justify-space-between align-center">
          <div class="component-top-header d-flex align-center"
               data-aos="fade-right"
               data-aos-duration="1500">
            <div>
              <hr class="component-top-header-hr">
            </div>
            <div class="ml-4">
              <span>{{ $t('ourAdvantages') }}</span>
            </div>
          </div>
        </div>
        <div class="main_about_us-section"
             ref="mainAboutUsSection"
             data-aos="fade-right"
             data-aos-delay="1000"
             data-aos-duration="1500">
          <div class="col-md-8 col-12">
            <div class="row">
              <OurAdvantagesSingle :params="advantage" v-for="advantage in ourAdvantages"
                                   :key="advantage.name"></OurAdvantagesSingle>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 1500px;" class="vzgooo">
    </div>
  </div>
</template>
<script>
import Intro from '~/components/Intro'
import OurAdvantagesSingle from '~/components/OurAdvantagesSingle'
import {directive} from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'home',
  data() {
    return {
      language: this.$i18n.locale,
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
      ourAdvantages: [
        {
          image: require('~/assets/icons/icons8-good-quality-64.png'),
          header: 'Гарантия качества',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ex expedita facere fugiinima natus non perferendis sint temporibus totam! Consequuntur quos suscipit voluptatibus!',
        },
        {
          image: require('~/assets/icons/icons8-e-commerce-64.png'),
          header: 'Профессиональный сайт',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse ',
        },
        {
          image: require('~/assets/icons/icons8-deliver-food-64.png'),
          header: 'Быстрая доставка',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsmet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-sushi-64.png'),
          header: 'Незабываемый вкус',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-discount-64.png'),
          header: 'Бонусна програма',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esseLorem ipsum dolor sit amet, consectolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
        {
          image: require('~/assets/icons/icons8-restaurant-menu-64.png'),
          header: 'Обновленный ассортимент',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse Lorem ipsum dolor sit amet, consectetur adipisicin aperiam culpa ea eius esse',
        },
      ]
    }
  },
  mounted() {
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
  },
  async asyncData({store, i18n}) {
    await store.dispatch('home/getData', {
      language: i18n.locale
    });
  },
  directives: {
    swiper: directive
  },
  components: {
    Intro,
    OurAdvantagesSingle,
  },
  methods: {
    addToCart(product) {
      this.$store.commit('cart/add', product);
    },
    deleteFromCart(productId) {
      this.$store.commit('cart/delete', productId);
    },
    addToFavorites(product) {
      this.$store.commit('favorites/add', product);
    },
    deleteFromFavorites(productId) {
      this.$store.commit('favorites/delete', productId);
    },
  }
}
</script>
<style scoped>
#discounted {
  margin-top: 4vw;
}

.white-pattern-background .component-top-header-hr {
  width: 8vw;
  border: 0.075vw solid #000000;
  background-color: #000000;
}

.white-pattern-background .component-top-header {
  font-family: 'Caveat', cursive !important;
  font-size: 3.5vw;
  width: 100%;
  color: black;
  font-weight: bold;
}

.component-top-header-hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.component-top-header {
  font-family: 'Caveat', cursive !important;
  font-size: 3.5vw;
  width: 100%;
}

.products_show_product_image {
  width: 100%;
  height: 190px;
  transition: .5s;
}

#main_about_us {
  margin-top: 4vw;
  width: 100%;
}

.main_about_us-section {
  margin-top: 3vw;
  height: 850px;
  background-image: url("~/assets/intro2_background.png");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
