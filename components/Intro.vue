<template>
  <div class="intro1_background">
    <kinesis-container
      event="scroll">
      <div class="snail1"
           data-aos="fade"
           data-aos-duration="1000"
           data-aos-once="true">
        <kinesis-element
          tag="div"
          :strength="80"
          type="rotate">
          <v-img
            :src="require('~/assets/snail1.png')"
            :lazy-src="require('~/assets/snail1.png')"
            alt="Snail"
            contain>
          </v-img>
        </kinesis-element>
      </div>
      <div class="intro1_header">
        <kinesis-element
          tag="div"
          :strength="120"
          type="translate">
          <span>
            <span data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="2700">R</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2300">a</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2400">k</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="1500">'</span>
            <span data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="1900">N</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2300">'</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="1800">R</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="3000">o</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="1500">l</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2100">l</span>
          </span>
        </kinesis-element>
      </div>
      <div class="intro1_subheader">
        <div data-aos="fade-left"
             data-aos-duration="1000"
             data-aos-delay="800"
             data-aos-once="true"
             v-html="$t('introSubheader.first')">
        </div>
        <div data-aos="fade-left"
             data-aos-duration="1000"
             data-aos-delay="1100"
             data-aos-once="true">
          {{ $t('introSubheader.second') }}
        </div>
      </div>
      <div class="intro1_information1">
        <div class="d-flex justify-end">
          <div class="intro1_information_icon pt-2">
            <div data-aos="fade-left"
                 data-aos-duration="1000"
                 data-aos-delay="1400"
                 data-aos-once="true">
              <img src="~/assets/icons/icons8-marker-641.png" alt="Location"/>
            </div>
          </div>
          <div class="ml-2">
              <span>
                <div data-aos="fade-left"
                     data-aos-duration="1000"
                     data-aos-delay="1400"
                     data-aos-once="true">
                <span class="red--text text--darken-4">{{ $t('informationPart1.first') }}</span>
              </div>
                  <div data-aos="fade-left"
                       data-aos-duration="1000"
                       data-aos-delay="1600"
                       data-aos-once="true">
                    <span>{{ $t('informationPart1.second') }}</span>
                  </div>
              </span>
          </div>
        </div>
      </div>
      <div class="intro1_information2">
        <div class="d-flex justify-end">
          <div class="intro1_information_icon pt-2">
            <div data-aos="fade-left"
                 data-aos-duration="1000"
                 data-aos-delay="1800"
                 data-aos-once="true">
              <img src="~/assets/icons/icons8-clock-64.png" alt="Time"/>
            </div>
          </div>
          <div class="ml-2">
              <span>
                <div data-aos="fade-left"
                     data-aos-duration="1000"
                     data-aos-delay="1800"
                     data-aos-once="true">
                <span class="red--text text--darken-4">{{ $t('informationPart12.first') }}</span> <span>10:00-22:00</span>
              </div>
                  <div data-aos="fade-left"
                       data-aos-duration="1000"
                       data-aos-delay="2000"
                       data-aos-once="true">
                    <span class="red--text text--darken-4">{{ $t('informationPart12.second') }}</span> <span>10:00-21:30</span>
                  </div>
              </span>
          </div>
        </div>
      </div>
      <div class="krevetka1"
           data-aos="fade"
           data-aos-duration="1000"
           data-aos-once="true">
        <kinesis-element
          tag="div"
          :strength="24"
          type="rotate">
          <v-img
            :src="require('~/assets/krevetka.png')"
            :lazy-src="require('~/assets/krevetka.png')"
            alt="Ice"
            contain>
          </v-img>
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "animate.css"

export default {
  name: "Intro",
  components: {
    KinesisContainer,
    KinesisElement,
  },
  mounted() {
    AOS.init({})
  },
}
</script>

<style scoped>
.c-home_hero-primary_image_container img {
  width: 100%;
}

.intro1_subheader {
  font-family: 'Caveat', cursive;
  margin-left: 53.875vw;
  letter-spacing: 0.2em;
  font-size: 2.875vw;
  margin-top: -2vw;
  color: white;
}

.intro1_header {
  margin-top: -5vw;
  font-family: 'Tangerine', cursive;
  font-weight: 400;
  letter-spacing: -0.08em;
  margin-left: 53.875vw;
  font-size: 7.875vw;
  color: white;
}

.intro1_information1 {
  font-family: 'Caveat', cursive;
  letter-spacing: -0.01em;
  font-size: 1.475vw;
  margin-right: 15vw;
}

.intro1_information2 {
  font-family: 'Caveat', cursive;
  letter-spacing: -0.01em;
  font-size: 1.475vw;
  margin-right: 15vw;
}

.intro1_information_icon img {
  width: 1.8vw;
}

.intro1_background {
  /*background-attachment: fixed;*/
  width: 100%;
  position: relative;
  height: 100vh;
  background-image: url("~/assets/header_background.png");
  filter: blur(8);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.snail1 {
  transform: rotate(280deg) !important;
  padding-top: 10vw;
  margin-left: 25.25vw;
  width: 6vw;
}

.krevetka1 {
  transform: rotate(5deg) !important;
  margin-left: 11vw;
  margin-top: -6vw;
  width: 25vw;
}
</style>
