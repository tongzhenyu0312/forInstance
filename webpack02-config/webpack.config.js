const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build-by-config.js',
    path: path.resolve(__dirname, 'dist') // 注意此处必须使用绝对路径
  }
}