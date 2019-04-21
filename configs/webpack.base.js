const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = require('./webpack.settings');

const configureBabelLoader = () => ({
  test: /\.(ts|js)x?$/,
  loader: 'babel-loader',
  exclude: file => /node_modules/.test(file)
});

const configureResolve = () => ({
  extensions: ['.ts', '.tsx', '.js', '.json']
});

module.exports = {
  amd: false,
  entry: {},
  output: {},
  resolve: configureResolve(),
  module: {
    rules: [configureBabelLoader()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: settings.paths.template
    })
  ]
};
