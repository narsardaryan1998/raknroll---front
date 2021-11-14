<template>
  <section id="parallaxOurShop">
    <div class="parallaxOurShop_header-section background-fixed inset-shadow-from-top">
      <v-img
        position="bottom"
        class="width-100 height-100"
        :src="require('~/assets/parralax-section-header-background.jpg')"
        :lazy-src="require('~/assets/parralax-section-header-background.jpg')"
        cover>
      </v-img>
    </div>
    <div class="parallaxOurShop_second-section background-fixed">
      <v-img
        class="width-100 height-100"
        src="https://giffiles.alphacoders.com/119/11986.gif"
        lazy-src="https://giffiles.alphacoders.com/119/11986.gif"
        cover>
      </v-img>
    </div>
  </section>

</template>

<script>
export default {
  name: "ParallaxOurShop"
}
</script>

<style scoped>
#parallaxOurShop {
  margin-top: 10vh;
}

.parallaxOurShop_header-section {
  height: 25vh;
}

.parallaxOurShop_second-section {
  height: 80vh;
}
</style>
