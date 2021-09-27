<template>
  <div class="beer-section">
    <kinesis-container
      event="scroll">
<!--      <div class="beer-section_bottle"-->
<!--           data-aos-duration="1000"-->
<!--           data-aos-delay="1000"-->
<!--           data-aos-once="true"-->
<!--           data-aos="fade-right">-->
<!--        <kinesis-element-->
<!--          tag="div"-->
<!--          :strength="30"-->
<!--          type="translate">-->
<!--          <v-img-->
<!--            :src="require('~/assets/Untitled-111.png')"-->
<!--            :lazy-src="require('~/assets/Untitled-111.png')"-->
<!--            alt="Snail"-->
<!--            contain>-->
<!--          </v-img>-->
<!--        </kinesis-element>-->
<!--      </div>-->
    </kinesis-container>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "BeerSection",
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
.beer-section {
  position: relative;
  height: 600px;
}

.beer-section_bottle {
  /*position: absolute;*/
  /*left: 0;*/
  width: 30vw;
}
</style>
