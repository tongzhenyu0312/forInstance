module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[name].[hash:12].[ext]',
              outputPath: 'images',
              limit: 60*1024
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            }
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
