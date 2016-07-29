var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: __dirname + '/index.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, exclude:/node_modules/, loader: 'style-loader!css-loader' },
      { test: /\.(otf|eot|svg|ttf|woff)\??/, exclude:/node_modules/, loader: 'url-loader?limit=8192'},
      { test: /\.(png|jpg)$/, exclude:/node_modules/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js'),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
