'use strict';

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: `[name].js`
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
      filename: `style.css`
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
