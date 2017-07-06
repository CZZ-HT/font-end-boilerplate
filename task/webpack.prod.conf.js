var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
 
 

module.exports = {
    entry: {
        home:'./src/home.es6'
    },
    module: {
        rules:[
            {
                test: /\.es6$/,
                exclude: [node_modules_dir],
                loader: "babel-loader",
            },{
                test:/\.css/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader","postcss-loader"]
                })
            }
        ]
    },
    //devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: 'js/[name][hash:7].js',
        //libraryTarget: "umd", // universal module definition
        publicPath:'http://www.a.com/assets/'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name].[contenthash].css"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
}