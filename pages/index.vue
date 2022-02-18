<template>
  <div>
    <Intro></Intro>
    <CashbackProductsSection></CashbackProductsSection>
    <CatalogSection></CatalogSection>
    <OurAdvantages></OurAdvantages>
  </div>
</template>
<script>
import Intro from '~/components/Intro'
import OurAdvantages from '~/components/OurAdvantages'
import CatalogSection from '~/components/CatalogSection'
import CashbackProductsSection from '~/components/CashbackProductsSection'

export default {
  name: 'home',
  data(){
    return {
      frontBaseUrlHttps: process.env.FRONT_BASE_URL_HTTPS,
    }
  },
  async asyncData({store, i18n}) {
    await store.dispatch('home/getData', {
      language: i18n.locale
    });
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: this.frontBaseUrlHttps.slice(0, -1) + this.$nuxt.$route.path
        }
      ]
    }
  },
  components: {
    Intro,
    OurAdvantages,
    CatalogSection,
    CashbackProductsSection,
  }
}
</script>
