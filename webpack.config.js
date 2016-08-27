const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: '[name].js',
    publicPath: "/assets/",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'x'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-flow-strip-types'],
      },
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }],
  },
}
