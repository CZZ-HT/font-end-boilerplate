var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var merge = require('webpack-merge');
var config = require('./webpack.base.conf.js'); 


module.exports = merge(config, {
    module: {
        rules:[
        {
            test:/\.css/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader","postcss-loader"]
            })
        }
        ]
    },
    output: {
        filename: 'js/[name]-[hash:8].js',
        //libraryTarget: "umd", // universal module definition
        publicPath:'/'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env': '"production"'
        }),
        new ExtractTextPlugin({
            filename: "css/[name]-[contenthash:8].css"
        }),
        new OptimizeCSSPlugin({
          cssProcessorOptions: {
            safe: true
          }
        }),
        new CleanWebpackPlugin("dist",{
            root:path.resolve(__dirname,"..")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['manifest']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/home.html')
            ,minify:false
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
});