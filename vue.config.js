const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/service/',
  transpileDependencies: true,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: 'http://ah1to.online:8081/api'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '@/assets/styles/_variables.sass'`
      }
    }
  }
})
