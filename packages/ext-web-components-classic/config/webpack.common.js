const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        //'demo/index' : './src/demo/index.js',
        //'ext-web-components-modern-with-runtime': './imports.js',
        'index': './imports.js',
        //'ext-web-components-modern-no-runtime-docapp': './src/mainDocApp.js',

        // 'ext-panel': './src/components/ext-panel.component.js',
        // 'ext-toolbar': './src/components/ext-toolbar.component.js',
        // 'ext-button': './src/components/ext-button.component.js',
        // 'ext-searchfield': './src/components/ext-searchfield.component.js',
        // 'ext-treelist': './src/components/ext-treelist.component.js',
        // 'ext-container': './src/components/ext-container.component.js',
        // 'ext-tabpanel': './src/components/ext-tabpanel.component.js',
        // 'ext-list': './src/components/ext-list.component.js',
        // 'ext-textareafield': './src/components/ext-textareafield.component.js',

        //'lib/ce-modal-window/index': './src/components/ce-modal-window/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'TDD Challenge',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // use the html loader
            {
                test: /.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },
            // use the css loaders (first load the css, then inject the style)
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.(woff|woff2|ttf|png|gif|jpg|jpeg|svg|xml|json)$/,
                use: [ 'url-loader' ]
            }
        ]
    },
    optimization: {
        splitChunks: {
          automaticNameDelimiter: '_',
            chunks: 'all',

            //chunks (chunk) {
            //  console.log(chunk.name)
            //  return true
            //  // exclude `my-excluded-chunk`
            //  //return chunk.name !== 'my-excluded-chunk';
            //},
            cacheGroups: {
                vendors: {
                    test: /[\/]node_modules[\/]/,
                    priority: -10
                },
            }
        }
    }
};