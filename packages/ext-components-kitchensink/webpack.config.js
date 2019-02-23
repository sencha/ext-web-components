const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env) {
  return {
    mode: 'development',
    //devtool: (mode === 'development') ? 'inline-source-map' : false,
    devtool: false,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './build'),
      filename: 'bundle.js'
    },
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        hash: true,
        inject: "body"
      }),
      new CopyWebpackPlugin([{
        from: 'extjs',
        to: 'extjs'
      }]),
      new CopyWebpackPlugin([{
        from: 'src',
        to: 'src'
      }]),
      new CopyWebpackPlugin([{
        from: 'resources',
        to: 'resources'
      }]),
      new CopyWebpackPlugin([{
        from: 'favicon.ico',
        to: 'favicon.ico'
      }]),
    ]
  }
}
