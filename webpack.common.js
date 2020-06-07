'use strict';

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var crypto = require('crypto');

var version = require('./package.json').version;
var hash = crypto.createHash('md5').update(version).digest('hex');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: `[name]-${hash}.js`
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `style-${hash}.css`
    })
  ],
  resolve: {
    alias: {
      bulma: path.resolve(__dirname, 'node_modules/bulma'),
      'sass-mediaqueries': path.resolve(
        __dirname,
        'node_modules/sass-mediaqueries/_media-queries.scss'
      )
    }
  }
};
