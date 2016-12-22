
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');
var entry = config.entry;
var htmls = [];

for(var key in entry){
    htmls.push(new HtmlWebpackPlugin({
        filename:key+'.html',
        template:'./src/page/'+key+'.html',
        chunks:[key,'vendor'],
        hash:false
    }))
}

//entry.vendor = ['zepto'];

module.exports = {
    entry: entry,
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
        }, 
        {
            test: /\.(svg|eot|ttf|woff)[\?\#]?/,
            exclude: [node_modules_dir],
            loader: 'file?name=font/[name].[ext]'
        },
        {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000&name=images/[name].[ext]'
        }]
    },
    output: {
        path:config.distFolder,
        filename: 'js/[name].js',　　//打包后的文件名
        publicPath:config.publicPath
    },
    devServer:{
        contentBase: './dist',
        devtool: 'eval',
        hot: true,
        inline: true,    
        port: config.port,
        host:config.host
    },
    //devtool: "#source-map",
    resolve: {
        extensions: ["", ".js"]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "js/vendor.js"
        })
    ].concat(htmls)
};