<template>
  <div id="testimonials" class="container container-padding">
    <div class="testimonials_top_section d-flex justify-space-between align-center">
      <div class="testimonials_top_section_header d-flex align-center">
        <div>
          <hr class="testimonials_top_section_header_hr">
        </div>
        <div class="ml-4">
          <span>{{ $t('menuLinks.testimonials') }}</span>
        </div>
      </div>
    </div>
    <Rating></Rating>
  </div>
</template>

<script>
import Rating from '~/components/Rating'

export default {
  name: "testimonials",
  components: {
    Rating
  }
}
</script>

<style scoped>
#testimonials {
  margin-top: 9vw;
}

.testimonials_top_section_header_hr {
  width: 8vw;
  border: 0.075vw solid #ffffff;
  background-color: #ffffff;
}

.testimonials_top_section_header {
  font-size: 3.5vw;
  width: 100%;
}
</style>
