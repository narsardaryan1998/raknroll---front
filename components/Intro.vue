<template>
  <div class="intro1_background width-100">
    <v-img
      position="center"
      class="width-100 height-100"
      :src="require('~/assets/images/test-new.jpg')"
      :lazy-src="require('~/assets/images/test-new.jpg')">
      <kinesis-container
        event="move">
        <div class="d-flex justify-lg-space-between">
          <div class="intro1_background_parallax_crayfish white--text">
            <kinesis-element
              tag="div"
              :strength="30"
              type="depth">
              <v-img
                position="center"
                class="width-100 height-100"
                :src="require('~/assets/images/crayfish-transprent.png')"
                :lazy-src="require('~/assets/images/crayfish-transprent.png')"
                cover>
              </v-img>
            </kinesis-element>
          </div>
          <div class="intro1_background_parallax_roll white--text">
            <kinesis-element
              tag="div"
              :strength="25"
              type="depth">
              <v-img
                position="center"
                class="width-100 height-100"
                :src="require('~/assets/images/roll.png')"
                :lazy-src="require('~/assets/images/roll.png')"
                cover>
              </v-img>
            </kinesis-element>
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
  data() {
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
.intro1_background_parallax_crayfish {
  padding-top: 22vh;
  margin-left: -50px;
  width: 800px;
}
.intro1_background_parallax_roll {
  width: 500px;
  padding-top: 22vh;
  margin-right: -50px;
}

.intro1_background {
  height: 100vh;
}
</style>
