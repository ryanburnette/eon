'use strict';

var { merge } = require('webpack-merge');
var common = require('./webpack.common');
var fs = require('fs');
var path = require('path');

var config = merge(common, {
  mode: 'production'
});

if (fs.existsSync(path.resolve(__dirname, '../../webpack.production.js'))) {
  config = merge(
    config,
    require(path.resolve(__dirname, '../../webpack.production.js'))
  );
}

module.exports = config;
