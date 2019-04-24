const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      // new CopyWebpackPlugin([
      //   {from: 'copy/extjs',to: 'extjs'},
      //   {from: 'copy/resources',to: 'resources'},
      //   {from: 'copy/favicon.ico',to: 'favicon.ico'}
      // ]),
    ]
  }
}