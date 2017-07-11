var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var merge = require('webpack-merge');
var config = require('./webpack.base.conf');

// add hot-reload related code to entry chunks
Object.keys(config.entry).forEach(function (name) {
    config.entry[name] = ['./task/client.es6'].concat(config.entry[name])
});

module.exports = merge(config, {
    
    module: {
        rules:[
        {
            test:/\.css/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }
            ]
        }
        ]
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: 'js/[name].js',
        //libraryTarget: "umd", // universal module definition
        publicPath:'/'
    },
      // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env': '"development"'
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename:'home.html',
            template: path.resolve(__dirname,'../src/home.html'),
            inject: true
        })
    ]
});