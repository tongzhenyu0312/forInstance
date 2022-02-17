module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
      //   // targets: "> 0.01%, not dead, last 2 version",
        useBuiltIns: 'entry',
        corejs: 3,
      }
    ]
  ],
}