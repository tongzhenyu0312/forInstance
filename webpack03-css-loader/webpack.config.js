module.exports = {
  module: {
    rules: [
      // 写法一：最详细，可配置多个loader，可针对每个loader进行配置
      // {
      //   test: /\.css$/, // 一般就是一个正则表达式，用于匹配我们需要处理的文件类型
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {},
      //     }
      //   ]
      // },
      // 写法二：不支持配置loader
      // {
      //   test: /\.css$/,
      //   use: ['css-loader']
      // },
      // 写法三：最简单，不支持任何配置
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
    ]
  }
}