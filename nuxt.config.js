import colors from 'vuetify/es5/util/colors'
import i18n from './config/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Тестовый seo текст | Rak'n'Roll | raknroll.com.ua",
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:image', property: 'og:image', content: '/favicon.ico'},
      {hid: 'og:image:height', property: 'og:image:height', content: '300'},
      {hid: 'og:image:width', property: 'og:image:width', content: '400'},
      {hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg'},
      {name: 'msapplication-TileColor', content: '#040404'},
      {name: 'theme-color', content: '#040404'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
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
      {src: "//code-ya.jivosite.com/widget/PX8nR394WB"},
    ]
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
    '@nuxtjs/axios',
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
