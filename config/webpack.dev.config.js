
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
var APP_DIR = path.resolve(__dirname, '../src/app');

module.exports = {
    entry: './src/app/App.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[name].[chunkhash:8].js'
    },
    module:{
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loader : 'babel-loader'
          }
      ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['./dist'],{ root: path.resolve(__dirname , '..')}),
        new HtmlWebpackPlugin({template: './config/index.html', title: 'Webpack default title'})
    ]
};