const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  var browserprofile = true
  var treeshake = false
  var watchprofile = 'yes'
  var buildprofile = 'desktop'
  var buildenvironment = 'development'
  var buildverbose = 'no'
  var isProd = false

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {


    return {
      mode: 'development',
      //devtool: (mode === 'development') ? 'inline-source-map' : false,
      devtool: false,
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
        //filename: "[name].[chunkhash:20].js"
      },
      plugins: [
        new HtmlWebpackPlugin({template: "index.html",hash: true,inject: "body"}),
        new ExtWebpackPlugin({
          framework: 'components',
          port: port,
          emit: false,
          browser: browserprofile,
          treeshake: treeshake,
          watch: watchprofile,
          profile: buildprofile, 
          environment: buildenvironment, 
          verbose: buildverbose,
          theme: 'theme-kitchensink',
          script: './extract-code.js',
          packages: [
            'font-ext', 
            'ux', 
            'd3',
            'pivot-d3',
            'font-awesome', 
            'exporter',
            'pivot', 
            'calendar', 
            'charts',
            'treegrid'
          ]
        }),
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
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
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
      devServer: {
        contentBase: 'build',
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: port,
        disableHostCheck: false,
        compress: isProd,
        inline:!isProd,
        stats: {
          assets: false,
          children: false,
          chunks: false,
          hash: false,
          modules: false,
          publicPath: false,
          timings: false,
          version: false,
          warnings: false,
          colors: {
            green: '\u001b[32m'
          }
        }
      }
    }
})
}
