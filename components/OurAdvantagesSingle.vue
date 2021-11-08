<template>
  <div class="col-6 our-advantages-single"
       data-aos="fade-right"
       :data-aos-delay="params.delay"
       data-aos-duration="1500">
    <div class="row">
      <div class="col-2">
        <v-img class="our-advantages-single_image"
               position="right"
               :src="params.image"
               :lazy-src="params.image">
        </v-img>
      </div>
      <div class="col-10">
        <span class="our-advantages-single_text_header">{{ params.header }}</span>
      </div>
    </div>
    <div class="row mt-0">
      <div class="col-10 offset-2 pt-0">
        <span class="our-advantages-single_text_description">{{ params.description }}        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['params'],
  name: "OurAdvantages"
}
</script>

<style scoped>
.our-advantages-single_text_header {
  font-size: 39px;
  line-height: normal;
  transition: .5s;
}

.our-advantages-single_text_header:hover {
  color: #B71C1C;
  transition: .5s;
}

.our-advantages-single_text_description {
  font-size: 17px;
}

.our-advantages-single_image {
  width: 85%;
}
</style>
