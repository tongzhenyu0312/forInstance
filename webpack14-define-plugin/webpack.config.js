const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'), // HtmlWebpackPlugin生成的index.html中的script.src路径 依赖output.path的定义
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
    new webpack.DefinePlugin({
      BASE_URL: '"./"',
    })
  ],
};
