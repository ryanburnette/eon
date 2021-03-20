'use strict';

var { merge } = require('webpack-merge');
var common = require('./webpack.common');
var fs = require('fs');
var path = require('path');

var config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map'
});

if (fs.existsSync(path.resolve(__dirname, '../../webpack.development.js'))) {
  config = merge(
    config,
    require(path.resolve(__dirname, '../../webpack.development.js'))
  );
}

module.exports = config;
