const appVersion = require('./package.json').version

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'air-et-terre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['plyr/dist/plyr.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-plyr'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  loading: '~/components/loading.vue',

  env: {
    version: appVersion
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // router: {
  //   mode: 'hash'
  // },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  server: {
    port: 3010, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  workbox: {
    workboxURL: '/workbox/workbox-sw.js',
    // navigateFallback: '/404.html',
    // publicPath: '/',
    config: {
      modulePathPrefix: '/workbox/'
    }
    // preCaching: ['index.html', '/workbox/workbox-sw.js'],
    // runtimeCaching: [],
    // cachingExtensions: '@/plugins/workbox-range-request.js',
    // cacheAssets: true,
    // offline: true
  },

  router: {
    prefetchLinks: false
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  }
}
