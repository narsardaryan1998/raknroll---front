<template>
  <div class="intro1_background width-100">
    <v-carousel
      v-if="mounted"
      interval="6000"
      cycle
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover>
      <v-carousel-item>
        <v-sheet
          color="black"
          width="100%"
          height="100%">
          <div class="fill-height width-100 height-100 align-center justify-center">
            <div class="width-100 height-100 custom-slider-zoom position-relative">
              <img :src="require('~/assets/images/slider/desktop/crayfish.jpg')"
                   class="d-md-block d-none width-100 height-100"
                   style="object-fit: cover;">
              <img :src="require('~/assets/images/slider/mobile/crayfish.jpg')"
                   class="d-block d-md-none width-100 height-100"
                   style="object-fit: cover;">
              <div class="intro1_text_and_logo text-center width-100">
                <div class="intro1_logo d-flex justify-center">
                  <div data-aos="fade-up"
                       data-aos-delay="1000"
                       data-aos-duration="1000">
                    <v-img
                      width="200"
                      position="center"
                      :src="require('~/assets/images/raknroll-logo.png')"
                      :lazy-src="require('~/assets/images/raknroll-logo.png')"
                      alt="RAK'N'ROLL logo"
                      contain>
                    </v-img>
                  </div>
                </div>
                <div class="intro1_text_header"
                     data-aos="fade-up"
                     data-aos-delay="1500"
                     data-aos-duration="1000">
                  <span>Заголовок теста для слайдера 1</span>
                </div>
                <div class="intro1_text_first pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2000"
                     data-aos-duration="1000">
                  <span>Тестовой текст для слидер 1для слидер 1 слидер 1 текст для  текст для слидер 1</span>
                </div>
                <div class="intro1_text_second pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2500"
                     data-aos-duration="1000">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, explicabo fugiat laborum maiores modi provident quasi ratione recusandae, repellat, sint totam vel voluptatum. Aspernatur doloribus eaque expedita minus nemo sapiente?</span>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="black"
          width="100%"
          height="100%">
          <div class="fill-height width-100 height-100 align-center justify-center">
            <div class="width-100 height-100 custom-slider-zoom position-relative">
              <img :src="require('~/assets/images/slider/desktop/beer.jpg')"
                   class="d-md-block d-none width-100 height-100"
                   style="object-fit: cover;">
              <img :src="require('~/assets/images/slider/mobile/beer.jpg')"
                   class="d-block d-md-none width-100 height-100"
                   style="object-fit: cover;">
              <div class="intro1_text_and_logo text-center width-100">
                <div class="intro1_logo d-flex justify-center">
                  <div data-aos="fade-up"
                       data-aos-delay="1000"
                       data-aos-duration="1000">
                    <v-img
                      width="200"
                      position="center"
                      :src="require('~/assets/images/raknroll-logo.png')"
                      :lazy-src="require('~/assets/images/raknroll-logo.png')"
                      alt="RAK'N'ROLL logo"
                      contain>
                    </v-img>
                  </div>
                </div>
                <div class="intro1_text_header"
                     data-aos="fade-up"
                     data-aos-delay="1500"
                     data-aos-duration="1000">
                  <span>Test header for slide 1</span>
                </div>
                <div class="intro1_text_first pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2000"
                     data-aos-duration="1000">
                  <span>Lorem ipsum dolor sim mant totam vel voluptatum. Aspernatur doloribus eaque expedita minus nemo sapiente?</span>
                </div>
                <div class="intro1_text_second pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2500"
                     data-aos-duration="1000">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, explicabo fugiat laborum maiores modi provident quasi ratione recusandae, repellat, sint totam vel voluptatum. Aspernatur doloribus eaque expedita minus nemo sapiente?</span>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="black"
          width="100%"
          height="100%">
          <div class="fill-height width-100 height-100 align-center justify-center">
            <div class="width-100 height-100 custom-slider-zoom position-relative">
              <img :src="require('~/assets/images/slider/desktop/roll.jpg')"
                   class="d-md-block d-none width-100 height-100"
                   style="object-fit: cover;">
              <img :src="require('~/assets/images/slider/mobile/roll.jpg')"
                   class="d-block d-md-none width-100 height-100"
                   style="object-fit: cover;">
              <div class="intro1_text_and_logo text-center width-100">
                <div class="intro1_logo d-flex justify-center">
                  <div data-aos="fade-up"
                       data-aos-delay="1000"
                       data-aos-duration="1000">
                    <v-img
                      width="200"
                      position="center"
                      :src="require('~/assets/images/raknroll-logo.png')"
                      :lazy-src="require('~/assets/images/raknroll-logo.png')"
                      alt="RAK'N'ROLL logo"
                      contain>
                    </v-img>
                  </div>
                </div>
                <div class="intro1_text_header"
                     data-aos="fade-up"
                     data-aos-delay="1500"
                     data-aos-duration="1000">
                  <span>Test header for slide 2</span>
                </div>
                <div class="intro1_text_first pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2000"
                     data-aos-duration="1000">
                  <span>Lorem ipsum dolor sim mant totams eaque expedita minus nemo sapiente?</span>
                </div>
                <div class="intro1_text_second pt-5"
                     data-aos="fade-up"
                     data-aos-delay="2500"
                     data-aos-duration="1000">
                  <span>Lorem ipsum dolor sit amet, conset laborum maiores modi provicusandae, repellat, sint totam vel voluptatum. Aspernatur doloribus eaque expedita minus nemo sapiente?</span>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
  name: "Intro",
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      mounted: false,
    }
  },
  mounted() {
    this.mounted = true
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
}
</script>

<style scoped>
.intro1_background {
  height: 100vh;
}

.intro1_text_and_logo {
  padding-right: 20vw;
  padding-left: 20vw;
  position: absolute;
  top: 20%;
}

.intro1_text_header {
  font-size: 50px;
}

.intro1_text_first {
  font-size: 30px;
}

.intro1_text_second {
  font-size: 24px;
}
</style>
