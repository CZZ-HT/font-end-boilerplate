var webpack = require('webpack'),
    path = require('path');

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var config = require('./config.js');

 
var entry = config.entry;
 
 
module.exports = {
    entry: entry,
    module: {
        loaders: [{
            test: /\.(es6|jsx)$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        },{
            test: /\.styl$/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus')
        }, {
            test: /\.css$/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
    },
    resolve: {
        extensions: ["", ".js", ".es6",".styl"]
    },
    output: {
        path: "./build",
        filename: "[name]/[name].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
        }),
        new ExtractTextPlugin("[name]/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            filename: "[name]/common.js"
        })
    ]
}