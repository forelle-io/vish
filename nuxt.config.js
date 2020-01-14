module.exports = {
  head: {
    title: 'forelle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'}
    ]
  },
  css: [
    '~assets/css/reset.css',
    '~assets/css/icons.css'
  ],
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/pwa'
  ],
  plugins: ['~plugins/ElementIO', '~plugins/VueMask'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  axios: {
    proxy: true
  },
  // proxy: {
  // }
}

