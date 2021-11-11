<template>
  <div>
    <Intro></Intro>
    <CashbackProductsSection></CashbackProductsSection>
    <CatalogSection></CatalogSection>
    <OurAdvantages></OurAdvantages>
    <div style="height: 1500px;" class="vzgooo">
    </div>
  </div>
</template>
<script>
import Intro from '~/components/Intro'
import OurAdvantages from '~/components/OurAdvantages'
import CatalogSection from '~/components/CatalogSection'
import CashbackProductsSection from '~/components/CashbackProductsSection'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'home',
  data() {
    return {
      language: this.$i18n.locale,
    }
  },
  mounted() {
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
  },
  async asyncData({store, i18n}) {
    await store.dispatch('home/getData', {
      language: i18n.locale
    });
  },
  components: {
    Intro,
    OurAdvantages,
    CatalogSection,
    CashbackProductsSection,
  },
}
</script>
<style scoped>
</style>
