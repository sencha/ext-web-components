
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: './lib',
    filename: 'yourlib.js',
    libraryTarget: 'var',
    library: 'EntryPoint'
  }
};