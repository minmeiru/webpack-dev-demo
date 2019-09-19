
const commonConfig = require('./webpack.common.conf.js')

const merge = require('webpack-merge')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host: 'localhost',
    port: 9000,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'webpack开发环境配置',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})