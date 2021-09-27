<template>
  <div class="recommended-section mt-5 pt-5">
<!--    <div class="recommended-section_header">-->
<!--      <span class="recommended-section_header-text red&#45;&#45;text text&#45;&#45;darken-4">Хит Товары</span>-->
<!--    </div>-->
    <div v-swiper="swiperOption"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-once="true">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy-src="https://api.shashlikyan.ua/uploads/46/231433-d4f21b22-d344-4e7c-a48c-39a16c549c30.png"
                     src="https://api.shashlikyan.ua/uploads/46/231433-d4f21b22-d344-4e7c-a48c-39a16c549c30.png"
                     alt="Snail">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badidsfgdfglico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy-src="https://api.shashlikyan.ua/uploads/46/231273-bcb7d3de-ec35-4b24-bb20-741b8c7d2480.png"
                     src="https://api.shashlikyan.ua/uploads/46/231273-bcb7d3de-ec35-4b24-bb20-741b8c7d2480.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy="https://api.shashlikyan.ua/uploads/46/231439-9a51fe01-d50e-422d-8e96-a89c3c722cb5.png"
                     src="https://api.shashlikyan.ua/uploads/46/231439-9a51fe01-d50e-422d-8e96-a89c3c722cb5.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     src="https://api.shashlikyan.ua/uploads/46/231591-f7985552-0b4b-49e4-a7fe-c6f50d8f3480.png"
                     lazy="https://api.shashlikyan.ua/uploads/46/231591-f7985552-0b4b-49e4-a7fe-c6f50d8f3480.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy-src="https://api.shashlikyan.ua/uploads/46/231433-d4f21b22-d344-4e7c-a48c-39a16c549c30.png"
                     src="https://api.shashlikyan.ua/uploads/46/231433-d4f21b22-d344-4e7c-a48c-39a16c549c30.png"
                     alt="Snail">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy-src="https://api.shashlikyan.ua/uploads/46/231273-bcb7d3de-ec35-4b24-bb20-741b8c7d2480.png"
                     src="https://api.shashlikyan.ua/uploads/46/231273-bcb7d3de-ec35-4b24-bb20-741b8c7d2480.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     lazy="https://api.shashlikyan.ua/uploads/46/231439-9a51fe01-d50e-422d-8e96-a89c3c722cb5.png"
                     src="https://api.shashlikyan.ua/uploads/46/231439-9a51fe01-d50e-422d-8e96-a89c3c722cb5.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilasdasico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class="swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
        <div class="swiper-slide">
          <v-card
            elevation="0"
            dark
            class="mx-auto my-12 mt-0 swiper-slider_product cursor-grab"
            max-width="374">
            <v-hover
              v-slot="{ hover }">
              <v-img class="swiper-slider_product_image cursor-pointer"
                     :class="{ 'opacity-is-50': hover }"
                     src="https://api.shashlikyan.ua/uploads/46/231591-f7985552-0b4b-49e4-a7fe-c6f50d8f3480.png"
                     lazy="https://api.shashlikyan.ua/uploads/46/231591-f7985552-0b4b-49e4-a7fe-c6f50d8f3480.png">
              </v-img>
            </v-hover>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0">
                <v-rating
                  :value="4.5"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="14">
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413) | 360 $
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
              </div>
              <div>Small plates, sdsfgdfgs dfgdsf dsgds egs gdsg dsfg segdfs gser gfdsg serg dsgalads & sandwiches - an
                intimate setting with 12 indoor seats plus patio
                seating.
              </div>
            </v-card-text>
            <v-card-actions class="px-0">
              <v-bottom-navigation
                class=" swiper-slider_product"
                grow>
                <v-btn class="px-0 mw-100">
                  <span>Recents</span>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn class="px-0 mw-100">
                  <span>Favorites</span>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="swiper-button-next red--text text--darken-4"><span class="icon-play"></span></div>
      <div class="swiper-button-prev red--text text--darken-4"><span class="icon-play-flip"></span></div>
      <div class="swiper-pagination" v-for="(item,index) in  [1,2,3,4,5,6,7,8]" :key="index" slot="pagination">
      </div>
    </div>
  </div>
</template>

<script>
import {directive} from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Recommended",
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
      }
    }
  },
  mounted() {
    AOS.init({})
  },
}
</script>

<style scoped>
.swiper-slider_product_image cursor-pointer {
  width: 100%;
  height: 190px;
  transition: .5s;
}

.recommended-section_header {
  font-family: 'Caveat', cursive;
  letter-spacing: -0.01em;
  font-size: 4vw;
  margin-left: 15vw;
  margin-top: 8vw;
}
</style>
