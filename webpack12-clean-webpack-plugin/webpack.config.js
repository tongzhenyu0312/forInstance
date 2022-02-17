const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    // filename: 'main.[hash:4].js',
    filename: 'main.[hash:6].js',
    path: path.resolve(__dirname, 'dist'), // CleanWebpackPlugin正常工作必须依赖output.path的定义
  },
  plugins: [new CleanWebpackPlugin()],
};
