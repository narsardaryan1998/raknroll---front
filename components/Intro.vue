<template>
  <div class="intro1_background width-100">
    <v-img
      position="center"
      class="width-100 height-100"
      :src="require('~/assets/images/testbacktest (1).png')"
      :lazy-src="require('~/assets/images/testbacktest (1).png')"
      data-aos="fade-right"
      data-aos-duration="1500">
      <div class="d-none d-md-block">
        <kinesis-container
          event="move">
          <div class="position-relative">
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
      </div>
      <div class="d-md-none d-block">
        <kinesis-container
          event="scroll">
          <div class="position-relative">
            <div class="intro1_background_parallax_crayfish white--text">
              <kinesis-element
                tag="div"
                :strength="120"
                type="rotate">
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
                :strength="180"
                type="rotate">
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
      </div>
    </v-img>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
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
  margin-left: -100px;
  width: 800px;
}
.intro1_background_parallax_roll {
  position: absolute;
  top: 22vh;
  width: 500px;
  right: -50px;
}

.intro1_background {
  height: 100vh;
}
</style>
