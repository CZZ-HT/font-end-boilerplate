
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot:true,
		port:3000
	},
	entry: {
		member:["./app/member/main.jsx","./app/member/main.less"]
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css|less$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
		}]
	},
	postcss:[autoprefixer()],
	plugins: [
    	new HtmlWebpackPlugin({
	      template: __dirname + "/app/member/index.html"
	    }),
	    new webpack.HotModuleReplacementPlugin(),
	    new ExtractTextPlugin("/css/[name]-[hash:6].css")
  	],
	output: {
		path: __dirname + "/public/js/",
		filename: "[name]-[hash:6].js"
	}
}