import colors from 'vuetify/es5/util/colors'
import i18n from './config/i18n'
const axios = require('axios')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Доставка роллов киев | Суши бесплатная доставка | Rak'n'Roll | raknroll.com.ua",
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'raknroll.com.ua'},
      {hid: 'og:url', property: 'og:url', content: process.env.frontBaseUrlHttps},
      {hid: 'og:image', property: 'og:image', content: process.env.BASE_URL + 'images/raknroll-logo.png'},
      {hid: 'og:image:height', property: 'og:image:height', content: '300'},
      {hid: 'og:image:width', property: 'og:image:width', content: '400'},
      {hid: 'og:image:type', property: 'og:image:type', content: 'image/png'},
      {name: 'msapplication-TileColor', content: '#040404'},
      {name: 'theme-color', content: '#040404'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests'}
    ],
    link: [
      {hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.ico'},
      {rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32.ico'},
      {rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16.ico'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Brygada+1918&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fleur+De+Leah&family=Lobster&family=Tangerine&display=swap" rel="stylesheet'},
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-78KZMHS9EK",
        async: true
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/style.css',
    '@/assets/styles/animations.css',
    '@/assets/styles/responsive.css',
    '@/assets/styles/static.css',
    '@/assets/styles/font.css',
    '@/assets/styles/customCloseButton.css',
    '@/assets/styles/customHamburgerButton.css',
    'vuetify/dist/vuetify.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-awesome-swiper', mode: 'client'},
    {src: '~/plugins/v-mask'},
    {src: '~/plugins/vue-infinite-scroll.js', ssr: false},
    {src: '~/plugins/jsonld'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/moment',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'uk',
        vueI18nLoader: false,
        locales: [
          {
            code: 'uk',
            name: 'UK',
            iso: 'uk-UK'
          },
          // {
          //   code: 'en',
          //   name: 'EN'
          // },
          {
            code: 'ru',
            name: 'RU',
            iso: 'ru-RU'
          },
        ],
        vueI18n: i18n,
        baseUrl: process.env.BASE_URL
      }
    ]
  ],

  sitemap: {
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    hostname: process.env.FRONT_BASE_URL_HTTPS,
    path: '/sitemap.xml',
    gzip: true,
    exclude: [
      '/cart',
    ],
    cacheTime: 1000 * 60 * 15,
    i18n: {
      locales: ['uk', 'ru'],
      routesNameSeparator: '___'
    },
    routes: async () => {
      const { data } = await axios.get(process.env.BASE_URL + 'api/products/slugs')
      return data.map((slug) => `/product/show/${slug}`)
    }
  },

  robots: [
    {
      UserAgent: 'Googlebot',
      Allow: '/',
    },
    {
      UserAgent: '*',
      Allow: '/',
    },
    {
      Host: process.env.FRONT_BASE_URL_HTTPS,
      Sitemap: process.env.FRONT_BASE_URL_HTTPS + 'sitemap.xml',
    }
  ],

  moment: {
    locales: ['ru'],
    defaultTimezone: 'EET'
  },
  axios: {
    baseURL: process.env.BASE_URL
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    color: '#B71C1C',
    height: '5px',
    throttle: 0
  },
}
