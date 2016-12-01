var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
 
module.exports = {
	entry: {
		index:["./src/js/index.es6","./src/css/style.styl"],
		vender:['jquery']
	},
	module: {
		loaders: [{
			test: /\.es6$/,
			exclude: [node_modules_dir],
			loader: 'babel'
		}, {
			test:/\.styl$/,
			exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus')
		},
		{
			test:/\.html/,
			loader:'html-loader'
		},{
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
	},
	devtool: 'eval-source-map',
	output: {
		path: path.resolve(__dirname , "../assets"),
		publicPath:"/assets/",
		filename: "js/[name].js?v=[hash:6]"
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new ExtractTextPlugin("css/[name].css?v=[hash:6]"),
	    new HtmlWebpackPlugin({
	      	chunks: ['index'],
	      	template:'./src/index.html'
	    })
  	]
}