<template>
  <div style="position: relative">
    <kinesis-container
      event="scroll">
      <div data-aos="fade-right"
           data-aos-duration="1000"
           data-aos-once="true">
        <div class="c-home_hero-primary_image_container">
          <kinesis-element
            tag="img"
            :src="'https://c1.wallpaperflare.com/preview/191/915/648/beer-pouring-glass-drink.jpg'"
            :strength="80"
            type="translate"/>
        </div>
      </div>
      <div class="animate__animated animate__fadeInUpBig animate__delay-1s animate__slow"
           style="position: relative">
        <kinesis-element
          class="c-home_hero-secondary_image_container animate__animated animate__slideInBottom"
          tag="img"
          :src="'https://foodandtravel.mx/wp-content/uploads/2021/02/Pescados-y-mariscos-a-domicilio-por.jpg'"
          :strength="180"
          type="translate"/>
      </div>
      <div class="intro1_header">
        <kinesis-element
          tag="div"
          :strength="120"
          type="translate">
          <span class="font-bartender">
            <span data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="2700">R</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2300">A</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2400">K</span>
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
                   data-aos-delay="3000">O</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="1500">L</span>
             <span data-aos="zoom-in"
                   data-aos-once="true"
                   data-aos-duration="1000"
                   data-aos-delay="2100">L</span>
          </span>
        </kinesis-element>
      </div>
      <div class="intro1_information">
        <kinesis-element
          tag="div"
          :strength="160"
          type="translate">
          <div class="d-flex justify-end">
            <div class="intro1_information_icon pt-2">
              <img src="~/assets/icons/icons8-marker-64.png" alt="Account"/>
            </div>
            <div class="ml-2">
              <span><span class="white--text">Украина, Киев,</span> <br> Харьковское шоссе <br> 17 А</span>
            </div>
          </div>
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
.c-home_hero-primary_image_container {
  margin-left: 15vw;
  margin-top: 1vw;
  width: 36.5625vw;
}

.c-home_hero-primary_image_container img {
  width: 100%;
}

.c-home_hero-secondary_image_container {
  margin-left: 34.5vw;
  margin-top: -12.125vw;
  width: 44.0625vw;
  transform: translate3d(0px, 0px, 0px);
}

.intro1_header {
  position: absolute;
  letter-spacing: -0.1em;
  right: 16.875vw;
  top: 8.25vw;
  font-size: 9.875vw;
  color: #8E2E21 !important;
}

.intro1_information {
  font-family: 'Russo One', sans-serif;
  position: absolute;
  letter-spacing: -0.01em;
  right: 16.875vw;
  top: 20.25vw;
  font-size: 30px;
  color: #8E2E21 !important;
}

.intro1_information_icon img {
  width: 35px;
}
</style>
