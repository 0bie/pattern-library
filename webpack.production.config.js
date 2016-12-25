'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry:  './index.js',
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json",
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/app/index.tmpl.html"
    // }),
    new webpack.optimize.UglifyJsPlugin({
    comporessor: {
      warnings: false
    }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    })
  ]
}