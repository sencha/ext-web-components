const path = require('path')

module.exports = {
  entry: './imports.js',
  output: {
    filename: 'ewc-modern-material.js',
    path: path.resolve(__dirname, 'runtime')
  }
}