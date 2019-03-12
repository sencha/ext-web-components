const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  var browserprofile
  var watchprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  if (buildenvironment == 'production') {
    browserprofile = false
    watchprofile = 'no'
  }
  else {
    if (env.browser == undefined) {env.browser = true}
    browserprofile = JSON.parse(env.browser) || true
    watchprofile = env.watch || 'yes'
  }
  const isProd = buildenvironment === 'production'
  var buildprofile = env.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = env.verbose || process.env.npm_package_extbuild_defaultverbose
  if (buildprofile == 'all') { buildprofile = '' }
  if (env.treeshake == undefined) {env.treeshake = false}
  var treeshake = env.treeshake ? JSON.parse(env.treeshake) : false
  //var basehref = env.basehref || '/'
  var mode = isProd ? 'production': 'development'
  var outputFolder = 'build'

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {


    return {
      mode: mode,
      devtool: (mode === 'development') ? 'inline-source-map' : false,
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, './build'),
        filename: "[name].js"
        //filename: "[name].[chunkhash:20].js"
      },
      plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html",hash: true,inject: "body"}),
        new ExtWebpackPlugin({
          framework: 'components',
          toolkit: 'modern',
          theme: 'theme-kitchensink',
          profile: buildprofile, 
          environment: buildenvironment,
          treeshake: treeshake,
          port: port,
          emit: true,
          browser: browserprofile,
          watch: watchprofile,
          verbose: buildverbose,
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
        // new CopyWebpackPlugin([
        //   {from: 'copy/extjs',to: 'extjs'},
        //   {from: 'copy/resources',to: 'resources'},
        //   {from: 'copy/favicon.ico',to: 'favicon.ico'}
        // ]),
      ],
      module: {
        rules: [
          { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] },
          {
            test: /\.(html)$/,
            use: { loader: 'html-loader' }
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ]
      },
      stats: 'none',
      optimization: {
        noEmitOnErrors: true
      },
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
