<template>
  <div class="intro1_background width-100">
    <v-img
      position="center"
      class="width-100 height-100"
      :src="require('~/assets/header_background3.png')"
      :lazy-src="require('~/assets/header_background3.png')"
      cover>
      <kinesis-container
        event="scroll">
        <div class="intro1_header white--text">
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
        <div class="intro1_subheader font-caveat white--text">
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
        <div class="intro1_information1 font-caveat">
          <div class="d-flex justify-start">
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
        <div class="intro1_information2 font-caveat">
          <div class="d-flex justify-start">
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
      </kinesis-container>
    </v-img>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Intro",
  data(){
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
}
</script>

<style scoped>
.intro1_header {
  padding-top: 22vh;
  font-family: 'Tangerine', cursive;
  font-weight: 400;
  letter-spacing: -0.08em;
  margin-left: 52vw;
  font-size: 155px;
}

.intro1_subheader {
  margin-left: 52vw;
  letter-spacing: 0.1em;
  font-size: 50px;
}

.intro1_information1 {
  letter-spacing: -0.01em;
  font-size: 29px;
  margin-left: 65vw;
}

.intro1_information2 {
  letter-spacing: -0.01em;
  font-size: 29px;
  margin-left: 65vw;
}

.intro1_information_icon img {
  width: 36px;
}

.intro1_background {
  height: 100vh;
}
</style>
