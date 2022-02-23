const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SmileCorporation/pageVue/'
    : '/',
    // devServer: {
    //   historyApiFallback: {
    //     rewrites: [{ from: /\//, to: '/404.html' }],
    //   },
    // },
})
