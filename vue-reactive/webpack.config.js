const {resolve} = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    mode: "development",
    plugins: [
        new HtmlWebpack() 
    ],

    devServer: {
        port: 8086,
        compress: true,
        static: false,
        open: true
    }
}