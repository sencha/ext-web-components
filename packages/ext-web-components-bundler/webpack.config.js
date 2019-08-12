const path = require('path');
const webpack = require('webpack');
//const ImportHttpWebpackPlugin = require('import-http/webpack')

module.exports = function(env) {
    function get(it, val) {if(env == undefined) {return val;} else if(env[it] == undefined) {return val;} else {return env[it];}}
    var environment = get('environment', 'development');

    return {
        mode: environment,
        context: path.join(__dirname, './'),
        entry: {
            ewc: './manifestewc-grid.js',
            css: './manifestcss.js'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].' + environment + '.js'
        },
        // plugins: [
        //     new ImportHttpWebpackPlugin()
        // ],
        module: {
            rules: [
                {
                    test: /\.exec\.js$/,
                    use: [ 'script-loader' ]
                },
                {
                    test: /\.(ttf|eot|svg|woff|woff2|gif)$/,
                    loaders: [
                      'url-loader'
                    ]
                },

                {
                    test: /\.(wxff(2)?|gxf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },

                {
                    test: /\.(css|scss)$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                }
            ]
        },
    }
}
