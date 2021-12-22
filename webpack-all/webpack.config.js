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
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: "[hash*10].[ext]"
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(less|css|html|js|jpg|png|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpack({}) 
    ],

    devServer: {
        port: 8088,
        compress: true,
        static: false,
        open: true
    }
}