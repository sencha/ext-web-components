const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'dist',
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({}),
    new ExtWebpackPlugin({
      framework: 'web-components',
      toolkit: 'modern',
      theme: 'theme-material',
      emit: 'yes',
      script: '',
      packages: [],
      profile: '',
      environment: 'development',
      treeshake: 'no',
      browser: 'no',
      watch: 'yes',
      verbose: 'no'
    }),
    new CopyWebpackPlugin([{
        from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
        to: './webcomponents-bundle.js'
    }])
  ]
};
