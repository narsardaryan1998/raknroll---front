<template>
  <div>
    <kinesis-container
      event="scroll">
      <div data-aos="flip-down" data-aos-duration="1000">
        <kinesis-element
          class="c-home_hero-primary_image_container"
          tag="img"
          :src="'https://cdn.crello.com/api/media/medium/275136968/stock-photo-glass-beer-foam-plate-red'"
          :strength="100"
          type="translate"/>
      </div>
    </kinesis-container>
  </div>
</template>
<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  mounted() {
    AOS.init({})
  }
}
</script>

<style scoped>
.ggtt {
  padding-left: 150px;
}

.c-home_hero-primary_image_container {
  margin-left: 15vw;
  width: 36.5625vw;
}
</style>
