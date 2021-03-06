const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './js/app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
};