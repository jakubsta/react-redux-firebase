const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './index.js',
  },
  output: {
    path: './bin',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'x']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
}
