import colors from 'vuetify/es5/util/colors'
import i18n from './config/i18n'

export default {
  // loading: '@/components/LoadingBar.vue',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - raknroll-front',
    title: 'raknroll-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Brygada+1918&display=swap'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fleur+De+Leah&family=Lobster&family=Tangerine&display=swap" rel="stylesheet'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/style.css',
    '@/assets/styles/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-awesome-swiper', mode: 'client'},
    {src: '~/plugins/vue-zoom-on-hover', ssr: false},
    {src: '~/plugins/vue-modaltor'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'uk',
        vueI18nLoader: false,
        locales: [
          {
            code: 'uk',
            name: 'UK'
          },
          {
            code: 'en',
            name: 'EN'
          },
          {
            code: 'ru',
            name: 'RU'
          },
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'https://raknroll.ua/'
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
    height: '4px',
    throttle: 0
  },

  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'https://raknroll.ua',
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          register: {
            url: '/api/auth/register',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'data',
          },
          logout: {
            url: '/api/auth/logout',
            method: 'get',
            propertyName: 'token',
          },
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      }
    }
  }
  //
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       {
  //         path: '/products/:slug',
  //         name: 'products',
  //         component: resolve(__dirname, 'pages/products.vue')
  //       }
  //     )
  //   }
  // }

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: '/products/:slug/:page',
  //       components: {
  //         default: resolve(__dirname, 'pages/products')
  //       },
  //       chunkNames: {
  //         modal: 'components/products'
  //       }
  //     })
  //   }
  // }
}
