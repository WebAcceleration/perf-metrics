const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackBaseConfig = require('./webpack.base');
const settings = require('./webpack.settings');
const { BROWSERSLIST_ENV } = process.env;
const isLegacyBundle = BROWSERSLIST_ENV === 'legacy';
const isModernBundle = BROWSERSLIST_ENV === 'modern';

const configureOutputPath = () => {
  if (isLegacyBundle) {
    return settings.paths.dist.browser.legacy;
  }

  if (isModernBundle) {
    return settings.paths.dist.browser.modern;
  }

  return settings.paths.dist.base;
};

const configureJsMinimizer = () => ({
  parallel: true,
  sourceMap: true
});

const configureOptimization = () => ({
  minimizer: [
    isModernBundle
      ? new TerserPlugin(configureJsMinimizer())
      : new UglifyJsPlugin(configureJsMinimizer())
  ]
});

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: settings.entries.base,
  output: {
    path: configureOutputPath(),
    filename: settings.filename,
    library: settings.libraryName,
    libraryTarget: 'umd'
  },
  // TODO:
  // https://stackoverflow.com/questions/40993427/webpack-exporting-an-es6-bundle
  optimization: configureOptimization()
});
