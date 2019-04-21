const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base');
const settings = require('./webpack.settings');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [settings.entries.dev],
  output: {
    path: settings.paths.dist.base,
    filename: 'pm.js',
    library: settings.libraryName,
    libraryTarget: 'umd'
  },
  watch: true,
  devServer: {
    port: 3000,
    contentBase: settings.paths.dist.base,
    inline: true,
    open: true
  }
});
