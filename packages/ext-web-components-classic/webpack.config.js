const path = require('path')

module.exports = {
  entry: './imports.js',
  output: {
    filename: 'ewc-classic-material.js',
    path: path.resolve(__dirname, 'runtime')
  }
}