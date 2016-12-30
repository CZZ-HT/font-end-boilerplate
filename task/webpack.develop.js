
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = require('./env.js');
var config = require('./config.js');
var _ = require('lodash');

var entry = {};
var pages = [];

_.forEach(config,function(moduleObj,moduleName){
    var entryJS = moduleObj.path+'index.js';
    var entryCSS = moduleObj.path+'index.css';
    var entryHTML = env.srcPath+'page/'+moduleName+'.html';
    entry[moduleName] = [entryJS,entryCSS];
    pages.push(new HtmlWebpackPlugin({
        filename:moduleObj.html,
        template:entryHTML,
        chunks:moduleObj.chunk,
        hash:false
    }));
});

entry.flexible = './src/common/flexible.js';

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
            test: /\.(htm|html)$/i,
            loader:'html-withimg-loader?min=false'
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
        path:env.buildFolder,
        filename: 'js/[name].js',　　//打包后的文件名
        publicPath:env.publicPath
    },
    devServer:{
        contentBase:'./dist',
        devtool: 'eval',
        hot: true,
        inline: true,    
        port: env.port,
        host:env.host,
        noInfo:true
    },
    //devtool: "#source-map",
    resolve: {
        extensions: ["", ".js"]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'flexible',
            filename:'js/flexible.js',
            chunks:['flexible']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'js/vendor.js',
            chunks:['index','choose','member']
        })
    ].concat(pages)
};