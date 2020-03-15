const merge = require('webpack-merge');
const common = require('./webpack.common');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist'
    },
    mode: "development"
});