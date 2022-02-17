const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // webpack本身支持watch
  // watch: true, 
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin()]
}