const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'), // HtmlWebpackPlugin生成的index.html中的script.src路径 依赖output.path的定义
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlPlugin({template: './public/index.html'}),
    new VueLoaderPlugin(),
  ],
}