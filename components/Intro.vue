<template>
  <div class="intro1_background width-100">
    <v-img
      position="center"
      class="width-100 height-100"
      :src="require('~/assets/images/test-new.jpg')"
      :lazy-src="require('~/assets/images/test-new.jpg')"
      cover>
      <kinesis-container
        event="move">
        <div class="d-flex justify-lg-space-between">
          <div class="intro1_header white--text">
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
          <div class="intro1_header1 white--text">
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
.intro1_header {
  padding-top: 22vh;
  margin-left: -50px;
  width: 800px;
}
.intro1_header1 {
  width: 500px;
  padding-top: 22vh;
  margin-right: -50px;
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
