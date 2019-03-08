
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig[0], {
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})