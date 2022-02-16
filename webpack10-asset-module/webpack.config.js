module.exports = {
  module: {
    rules: [
      // file-loader
      // {
      //   test: /\.png$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'images/[name].[hash:8][ext]',
      //   }
      // },
      // url-loader
      // {
      //   test: /\.png$/,
      //   type: 'asset/inline',
      // },
      // url-loader(limit)
      {
        test: /\.png$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          }
        }
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
