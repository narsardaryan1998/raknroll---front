<template>
  <v-app dark>
    <transition name="fade">
      <Loading1 v-show="loading"></Loading1>
    </transition>
    <Header></Header>
    <MobileHeader></MobileHeader>
    <v-main>
      <nuxt/>
    </v-main>
    <CartModal></CartModal>
    <Footer></Footer>
    <a class="scroll-up" v-if="showScrollToTopButton" @click="scrollToTop">
      <span class="left-bar"></span>
      <span class="right-bar"></span>
      <svg width="40" height="40">
        <line class="top" x1="0" y1="0" x2="120" y2="0"/>
        <line class="left" x1="0" y1="40" x2="0" y2="-80"/>
        <line class="bottom" x1="40" y1="40" x2="-80" y2="40"/>
        <line class="right" x1="40" y1="0" x2="40" y2="1200"/>
      </svg>
    </a>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
import MobileHeader from '~/components/MobileHeader'
import Footer from '~/components/Footer'
import CartModal from '~/components/CartModal'
import Loading1 from '~/components/Loading1'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      loading: true,
      frontBaseUrlHttps: process.env.FRONT_BASE_URL_HTTPS,
      showScrollToTopButton: false
    }
  },
  mounted() {
    document.documentElement.setAttribute('lang', this.$i18n.locale)
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'G-78KZMHS9EK');

    window.scrollTo(0, 0);
    AOS.init({
      once: true,// whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    })
    this.$nextTick(() => {
      setTimeout(() => this.loading = false, 500)
    })
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY
      if (this.windowTop > 10) {
        this.showScrollToTopButton = true
      } else {
        this.showScrollToTopButton = false
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
  components: {
    Header,
    MobileHeader,
    Footer,
    CartModal,
    Loading1,
  },
  jsonld() {
    return [
      {
        "@context": "http://www.schema.org",
        "@type": "WebSite",
        "name": "Rak'n'Roll",
        "url": this.frontBaseUrlHttps
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rak'n'Roll",
        "url": this.frontBaseUrlHttps,
        "logo": this.frontBaseUrlHttps + "_nuxt/img/raknroll-logo.e8b9583.png",
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+38 (096) 599 - 09 - 09",
          "contactType": "sales",
          "areaServed": "UA",
          "availableLanguage": ["Russian", "Ukrainian"]
        }, {
          "@type": "ContactPoint",
          "telephone": "+38 (093) 599 - 09 - 09",
          "contactType": "sales",
          "areaServed": "UA",
          "availableLanguage": ["Ukrainian", "Russian"]
        }]
      }

    ];
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true})

    return {
      title: this.$t('seo.title.main'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description.main')
        },
        ...i18nHead.meta
      ],
      link: [
        {
          rel: 'alternate',
          href: this.frontBaseUrlHttps.slice(0, -1) + this.$nuxt.$route.path,
          hreflang: this.$i18n.locale,
        }
      ]
    }
  },
}
</script>
