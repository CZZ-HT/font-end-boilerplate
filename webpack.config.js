
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
		member:["./app/member/main.jsx","./app/member/main.css"]
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css!postcss')
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