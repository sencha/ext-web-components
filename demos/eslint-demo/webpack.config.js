const path = require('path')

module.exports = function (env) {
  return {
    mode: 'development',
    devtool: false,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './build'),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        }
      ]
    },
    plugins: [],
    node: false
  }
}
