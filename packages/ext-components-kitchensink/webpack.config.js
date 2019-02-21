const path = require('path');

module.exports = function (env) {
  return {
    mode: 'development',
    //devtool: (mode === 'development') ? 'inline-source-map' : false,
    devtool: false,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      libraryTarget: 'var',
      library: 'EntryPoint'
      //umdNamedDefine: true
//      globalObject: `(typeof self !== 'undefined' ? self : this)`
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
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



  //   module: {
  //     rules: [{
  //         test: /\.js$/,
  //         include: [path.resolve(__dirname, "./src/app")],
  //         exclude: /node_modules/,
  //         use: {
  //             loader: 'babel-loader',
  //             options: {
  //                 presets: ['env']
  //             }
  //         }
  //     }]
  // },
  plugins: [
   ]




  }
}
