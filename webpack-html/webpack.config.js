const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [

        ]
    },

    plugins: [
        new HtmlWebpack({}) 
    ]
}