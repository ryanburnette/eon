'use strict';

var fs = require('fs');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var { merge } = require('webpack-merge');

// asset override for eon
// currently works by using project assets if [project]/src/js/main.js exists
// otherwise uses theme assets
// will need to improve this approach
var _eonPath;
if (fs.existsSync(path.resolve(__dirname, '../../src/js/main.js'))) {
  console.log('==> eon: using *project* assets');
  _eonPath = path.resolve(__dirname, '../../src');
} else {
  console.log('==> eon: using *theme* assets');
  _eonPath = path.resolve(__dirname, './src');
}

function eonPath(p) {
  return path.join(_eonPath, p);
}

var config = {
  entry: {
    main: eonPath('js/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../../static'),
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

if (fs.existsSync(path.resolve(__dirname, '../../webpack.common.js'))) {
  config = merge(
    config,
    require(path.resolve(__dirname, '../../webpack.common.js'))
  );
}

module.exports = config;
