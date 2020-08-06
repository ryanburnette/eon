'use strict';

var fs = require('fs');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: getContext(),
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

// use theme as context,
// but use project as context if user adds ./src/css/ and ./src/js/
function getContext() {
  if (fs.existsSync(path.resolve(__dirname, '../../src/js/main.js'))) {
    console.log('arch hugo theme: using custom project assets context');
    return path.resolve(__dirname, '../../src');
  }
  console.log('arch hugo theme: using default theme assets context');
  return path.resolve(__dirname, './src');
}
