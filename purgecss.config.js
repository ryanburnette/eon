'use strict';

module.exports = {
  content: ['../../public/**/*.html', '../../public/**/*.js'],
  css: ['../../public/**/*.css'],
  output: '../../public/',
  keyframes: true,
  whitelist: [
    'utterances',
    'utterances-container',
    'disqus',
    'disqus-container'
  ],
  whitelistPatterns: []
};
