const webpack = require('webpack');
const writeFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/src/index.js",
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
        exclude: /node_modules/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: __dirname + "/src/index.tmpl.html"
    // }),
    new writeFilePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    outputPath: __dirname + "/build"
  }
}