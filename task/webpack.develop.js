
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
    entry: {
    	index:['./src/js/index.js','./src/css/index.css'],
        vender:['./src/js/common/flexible.js','./src/js/lib/zepto.js']
    },
    module: {
		loaders:[
         {
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000&name=images/[name].[ext]'
        }]
    },
    output: {
    	path:path.resolve(__dirname, "../dist"),
        filename: 'js/[name].js',　　//打包后的文件名
        publicPath:'/assets/'
    },
    //devtool: "#source-map",
    resolve: {
        extensions: ["", ".js"]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            filename: "js/common.js"
        })
    ]
};