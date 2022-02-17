module.exports = {
  devtool: 'source-map',
  // entry: ["@babel/polyfill","./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     [
            //       '@babel/preset-env',
            // targets没有生效，原因不明，不多做纠结，使用.browserslistrc可以生效
            //       { targets: '> 0.001%, not dead, last 2 version' },
            //     ],
            //   ],
            // },
          },
        ],
      },
    ],
  },
};
