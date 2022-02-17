const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          globOptions: { // 经常用来忽略html文件，以避免与htmlwebpackplugin生成的文件冲突
            ignore: ['**/kpi.png'] // 注意格式
          }
        },
      ],
    }),
  ],
};
