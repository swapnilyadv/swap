module.exports = {
  // ...existing config...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};