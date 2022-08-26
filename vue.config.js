// const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo2Website/'
    : '/',
  transpileDependencies: true,
  lintOnSave: false
})
