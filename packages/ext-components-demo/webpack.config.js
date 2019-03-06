const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')

module.exports = function (env) {
  return {
    mode: 'development',
    devtool: false,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './build'),
      //filename: 'bundle.js'
      filename: "[name].js"
    },
    plugins: [
      new HtmlWebpackPlugin({template: "index.html",hash: true,inject: "body"}),
      new CopyWebpackPlugin([
        {from: 'copy/extjs',to: 'extjs'},
        {from: 'copy/resources',to: 'resources'},
        {from: 'copy/favicon.ico',to: 'favicon.ico'}
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.css$/,
          use: [
              'style-loader', 
              'css-loader'
          ]
        }
      ]
    }
  }
}
