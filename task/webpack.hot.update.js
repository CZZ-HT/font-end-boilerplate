var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
   
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var config = require('./config.js');
module.exports = {
    entry: config.entry,
    module: {
        loaders: [{
            test: /\.(es6|jsx)$/,
            exclude: [node_modules_dir],
            loader: "babel"
        },{
            test: /\.styl$/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus')
        },{
            test: /\.css$/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css')
        },{
            test: /\.(ttf|eot|svg|woff)$/,
            loader: "file?limit=10000"
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'file?limit=25000'
        }]
    },
    devtool: "#eval-source-map",
    resolve: {
        extensions: ["", ".js", ".es6",".styl"]
    },
    output: {
        path: path.join(__dirname, "../build"),
        filename: "[name]/[name].js",
        publicPath: 'http://127.0.0.1:8080/build/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            filename: "[name]/common.js"
        }),
        new ExtractTextPlugin("[name]/[name].css")
    ]
}