const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    performance: { hints: false },
    plugins:[
    //    new CompressionPlugin()
    //    new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [

            {
                test: /\.(jpe?g|ico|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader'
            },

            // {
            //     test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            //     loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            // },

            //{test: /\.(css)$/, loader: 'css-loader'},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
//            {test: /\.svg$/, loader: 'svg-inline-loader'},

            // {
            //     test: /\.(woff(2)?|ttf|eot|svg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'fonts/'
            //         }
            //     }]
            // }


        ]
    }
}
