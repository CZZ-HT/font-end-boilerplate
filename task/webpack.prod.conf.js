var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./env.js');
var htmlPlugins = env.htmlPlugins;

module.exports = {
    entry: require('./config.js'),
    module: {
        loaders:[
        {
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        },
        {
            test: /\.html$/,
            loader: 'html-loader?minimize=false'
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
            test: /\.(png|jpg|gif)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000&name=images/[name].[ext]'
        }]
    },
    output: {
        path:env.assetsRoot,
        filename: 'js/[name].js',　　//打包后的文件名
        publicPath:'/'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.common.js',
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor','js/vendor.js'),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.NoErrorsPlugin()
    ].concat(htmlPlugins)
}