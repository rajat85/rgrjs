module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-react',
              'babel-preset-stage-0'
            ].map(require.resolve)
          }
        }
      }
    ]
  }
}
