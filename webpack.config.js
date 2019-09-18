const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
//修改成 const CleanWebpackPlugin  = require('clean-webpack-plugin')就报错
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    host: 'localhost',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'webpack开发环境配置',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}