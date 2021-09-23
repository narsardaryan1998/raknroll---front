<template>
  <v-app dark>
    <!--    <Intro></Intro>-->
    <div style="height: 132px;"
         data-aos="fade-down"
         data-aos-duration="1000"
         data-aos-delay="1000"
         data-aos-once="true">
      <Header></Header>
    </div>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import AOS from 'aos'

export default {
  data() {
    return {
      components: {
        Header,
        Intro,
      },
      mounted() {
        AOS.init({})
      },
    }
  }
}
</script>
