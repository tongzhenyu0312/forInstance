module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[hash:6].[ext]',
              outputPath: 'images'
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


