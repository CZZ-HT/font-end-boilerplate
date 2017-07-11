var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var merge = require('webpack-merge');
var config = require('./webpack.base.conf.js');

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
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
        ]
    },
    output:{
        publicPath:'/'
    },
    devServer: {
      contentBase: path.join(__dirname, "../dist"),
      compress: true,
      host:'192.168.1.133',
      hot:true,
      quiet:true,
      port: 9000
    },
      // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env': '"development"'
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/home.html')
        })
    ]
});

 
 