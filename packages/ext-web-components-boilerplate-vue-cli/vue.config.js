const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'build',
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '1962',
    disableHostCheck: false,
    compress: false,
    inline: true,
    stats: 'none',
  },
  outputDir: path.join(__dirname, 'build'),
  configureWebpack: {
    plugins: [
            new ExtWebpackPlugin({
        framework: 'web-components',
        toolkit: 'modern',
        emit: 'yes',
        browser: 'no',
        packages: [],
        profile: '',
        verbose: 'no',
        treeshake:'no',
        environment: 'development'
      }),
    ]
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
           args[0].push({
             from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
             to: './webcomponents-bundle.js',
           });
           return args;
      });
  }
}
