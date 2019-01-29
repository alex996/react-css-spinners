module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      }
    ]
  }
}
