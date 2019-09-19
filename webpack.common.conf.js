const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
//修改成 const CleanWebpackPlugin  = require('clean-webpack-plugin')就报错
console.log(process.env.NODE_ENV)
module.exports = {
  mode: process.env.NODE_ENV ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash:8].js',
    path: path.resolve(__dirname, '../dist')
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
    new HTMLWebpackPlugin({
      title: 'webpack开发环境配置',
      template: './src/index.html',
    })
  ]
}