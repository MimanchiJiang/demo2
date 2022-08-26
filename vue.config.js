// const { defineConfig } = require('@vue/cli-service')
module.exports = ({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dem2Website/'//这里写展示页面的仓库名称
    : '/',
  transpileDependencies: true,
  lintOnSave: false
})
