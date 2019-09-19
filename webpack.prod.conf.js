const commonConfig = require('./webpack.common.conf.js')
const merge = require('webpack-merge')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')   //用来压缩优化js文件的
const ExtractTextPlugin = require('extract-text-webpack-plugin') //extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
const extractSass = new ExtractTextPlugin({ filename: '[name].[hash].css'})
module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  devtool: 'source-map',     //用作调试

  plugins: [
    new UglifyJSPlugin(),
    extractSass,
  ]
})



 