const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')


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
        from: 'resources',
        to: 'resources'
      }]),
      new CopyWebpackPlugin([{
        from: 'favicon.ico',
        to: 'favicon.ico'
      }]),
      new WebpackShellPlugin({
        onBuildEnd:{
          scripts: ['node extract-code.js'],
          blocking: false,
          parallel: true
        }
      }),
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
