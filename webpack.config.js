var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'source-map',
  entry: path.join(__dirname +  '/client/' + 'index.jsx'),
  output: {
    path: path.join(__dirname + '/client/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }  
};

module.exports = config;