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
  devServe: {
    /*
    必须配置的项
    服务启动的目录，默认是根目录
    */
    contentBase: './dist',     
    hot: true,
  /*
  下面是可配置的项
    host：指定使用一个host，默认是localhost
    port：设置端口号
    historyApiFallback: 当使用HTML5 api时，
    任意的404响应都可以需要被替代为index.html，通过设置true,启动
  */
    
    host: 'localhost',
    port: 8000,
    historyApiFallback: { disableDotRule: true },
    // 出现错误时是否在浏览器上出现遮罩层提示
    overlay: true,
    /**
     * 在 dev-server 的两种不同模式之间切换
     *   默认情况下，应用程序启用内联模式 inline
     *   设置为 false，使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息
     */
    inline: true,
    /**
     * 统计信息，枚举类型，可供选项：
     *      "errors-only": 只在发生错误时输出
     *      "minimal": 只在发生错误或有新的编译时输出
     *      "none": 没有输出
     *      "normal": 标准输出
     *      "verbose": 全部输出
     */
    stats: "errors-only",
    // 设置接口请求代理，更多 proxy 配置请参考 https://github.com/chimurai/http-proxy-middleware#options
    proxy: {
      '/api/': {
        changeOrigin: true,
        // 目标地址
        target: 'http://localhost:3000',
        // 重写路径
        pathRewrite: {
          '^/api/': '/'
        }
      }
    }

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'webpack开发环境配置',
      template: './public/index.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}