const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   hot: false,
  // },
  output: {
    path: path.resolve(__dirname, 'dist'), // HtmlWebpackPlugin生成的index.html中的script.src路径 依赖output.path的定义
  },
  plugins: [new HtmlPlugin({
    template: './public/index.html'
  })]
}