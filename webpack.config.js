const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtool: 'eval-source-map',
  entry:  {
    'bundle': path.resolve(__dirname, 'src/index'),
    // 'jquery/bundle': 'jquery'
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          // TODO: Set up production/dev env configs
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap'
        }),
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: __dirname + '/src/index.tmpl.html'
    // }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['jquery/bundle', 'manifest']
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    publicPath: '/build/'
  },
  performance: {
    hints: false
  }
}