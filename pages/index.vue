<template>
  <div>
    <Intro></Intro>
    <h1>{{ aaa }}</h1>
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
      baseUrl: process.env.BASE_URL
    }
  },
  async asyncData() {
    const aaa = 99999999999999;

      return {aaa}
    // await store.dispatch('home/getData', {
    //   language: i18n.locale
    // });
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: this.baseUrl.slice(0, -1) + this.$nuxt.$route.path
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
