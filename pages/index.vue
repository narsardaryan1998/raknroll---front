<template>
  <div>
    <Intro></Intro>
<!--    <BeerSection></BeerSection>-->
    <Recommended></Recommended>
<!--    <div style="height: 1500px;"></div>-->
  </div>
</template>
<script>

import Intro from '~/components/Intro'
// import BeerSection from '~/components/BeerSection'
import Recommended from '~/components/Recommended'

export default {
  components: {
    Intro,
    // BeerSection,
    Recommended,
  },
}
</script>
<style scoped>

</style>
