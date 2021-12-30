const {resolve} = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {},

    plugins: [
        new HtmlWebpack()
    ],

    mode: 'development',
    
    devServer: {
        port: '8085',
        compress: true,
        open: true
    }
}