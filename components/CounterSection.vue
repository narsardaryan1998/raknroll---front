<template>
  <div data-aos="fade-up"
       data-aos-duration="1000"
       data-aos-once="true"
       class="container counter-section container-padding text-center">
    <div class="row"
         data-aos="fade-right"
         data-aos-once="true"
         data-aos-delay="1000"
         data-aos-duration="1000">
      <div class="col-md-3 col-sm-6 counter-section_numbers pb-0">
        <countTo :startVal='0' :endVal='500' :duration='3000'></countTo>
      </div>
      <div class="col-md-3 col-sm-6 counter-section_numbers pb-0">
        <countTo :startVal='0' :endVal='998' :duration='3000'></countTo>
      </div>
      <div class="col-md-3 col-sm-6 counter-section_numbers pb-0">
        <countTo :startVal='0' :endVal='800' :duration='3000'></countTo>
      </div>
      <div class="col-md-3 col-sm-6 counter-section_numbers pb-0">
        <countTo :startVal='0' :endVal='658' :duration='3000'></countTo>
      </div>
    </div>
    <div class="row mt-0"
         data-aos="fade-right"
         data-aos-once="true"
         data-aos-delay="1500"
         data-aos-duration="1000">
      <div class="col-md-3 col-sm-6 pt-0">
        <span class="counter-section_text">Даз в неделю поставки продуктов</span>
      </div>
      <div class="col-md-3 col-sm-6 pt-0">
        <span class="counter-section_text">Даз в неделю поставки продуктов</span>
      </div>
      <div class="col-md-3 col-sm-6 pt-0">
        <span class="counter-section_text">Даз в неделю поставки продуктов</span>
      </div>
      <div class="col-md-3 col-sm-6 pt-0">
        <span class="counter-section_text">Даз в неделю поставки продуктов</span>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "CounterSection",
  components: {
    countTo,
  },
  mounted() {
    AOS.init({})
  },
}
</script>

<style scoped>
.counter-section {
  font-family: 'Caveat', cursive;
  background: url("~/assets/caounter-section-background.png") repeat-x;
}

.counter-section_numbers {
  font-size: 6vw;
}

.counter-section_text {
  font-size: 1.3vw;
}
</style>
