<template>
  <div>
    <Intro></Intro>
<!--    <BeerSection></BeerSection>-->
    <Recommended></Recommended>
    <CounterSection></CounterSection>
    <div style="height: 1500px;"></div>
  </div>
</template>
<script>

import Intro from '~/components/Intro'
// import BeerSection from '~/components/BeerSection'
import Recommended from '~/components/Recommended'
import CounterSection from '~/components/CounterSection'

export default {
  name: "Home",
  components: {
    Intro,
    // BeerSection,
    Recommended,
    CounterSection,
  },
}
</script>
<style scoped>

</style>
