<template>
  <div>
    <Intro></Intro>
    <CashbackProductsSection></CashbackProductsSection>
    <CatalogSection></CatalogSection>
    <OurAdvantages></OurAdvantages>
    <ParallaxOurShop></ParallaxOurShop>
  </div>
</template>
<script>
import Intro from '~/components/Intro'
import OurAdvantages from '~/components/OurAdvantages'
import CatalogSection from '~/components/CatalogSection'
import CashbackProductsSection from '~/components/CashbackProductsSection'
import ParallaxOurShop from '~/components/ParallaxOurShop'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'home',
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
    ParallaxOurShop,
  },
}
</script>
