<template>
  <div>
    <Intro></Intro>
    <Recommended></Recommended>
    <CounterSection></CounterSection>
    <div style="height: 1500px;" class="vzgooo">
    </div>
  </div>
</template>
<script>

  import Intro from '~/components/Intro'
  import Recommended from '~/components/Recommended'
  import CounterSection from '~/components/CounterSection'

  export default {
    components: {
      Intro,
      Recommended,
      CounterSection,
    },

  }
</script>
<style scoped>

</style>
