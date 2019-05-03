const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  function get(it, val) {if(env == undefined) {return val} else if(env[it] == undefined) {return val} else {return env[it]}}

  var profile     = get('profile',     '')
  var environment = get('environment', 'development')
  var treeshake   = get('treeshake',   'no')
  var browser     = get('browser',     'yes')
  var watch       = get('watch',       'yes')
  var verbose     = get('verbose',     'no')
  if (environment == 'production') {
    browser = 'no'
    watch = 'no'
  }
  const isProd = environment === 'production'
  //const mode = isProd ? 'production': 'development'
  const outputFolder = 'build'
  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new HtmlWebpackPlugin({template: "./src/index.html",hash: true,inject: "body"}),
      new ExtWebpackPlugin({
        framework: 'webcomponents',
        toolkit: 'modern',
        theme: 'theme-material',
        emit: 'yes',
        script: './extract-code.js',
        port: port,
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
        ],
        profile: profile,
        environment: environment,
        treeshake: treeshake,
        browser: browser,
        watch: watch,
        verbose: verbose
      }),
      // new CopyWebpackPlugin([
      //   {from: 'copy/extjs',to: 'extjs'},
      //   {from: 'copy/resources',to: 'resources'},
      //   {from: 'copy/favicon.ico',to: 'favicon.ico'}
      // ]),
    ]
    return {
      mode: environment,
      devtool: (environment === 'development') ? 'inline-source-map' : false,
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, outputFolder),
        filename: "[name].js"
        //filename: "[name].[chunkhash:20].js"
      },
      plugins: plugins,
      module: {
        rules: [
          { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] },
          { test: /\.(html)$/,use: { loader: 'html-loader' } },
          { test: /\.css$/,use: ['style-loader','css-loader'] }
        ]
      },
      stats: 'none',
      optimization: { noEmitOnErrors: true },
      node: false,
      devServer: {
        contentBase: outputFolder,
        hot: !isProd,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: port,
        disableHostCheck: false,
        compress: isProd,
        inline:!isProd,
        stats: 'none'
      }
    }
  })
}
