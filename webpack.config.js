
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		//publicPath:"http://localhost:3000/public",
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot:true,
		port:3000
	},
	entry: {
		main:[__dirname + "/app/main.jsx",__dirname+"/app/main.css"]
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
	      template: __dirname + "/app/index.tmpl.html"
	    }),
	    new webpack.HotModuleReplacementPlugin(),
	    new ExtractTextPlugin("[name]-[hash:6].css")
  	],
	output: {
		path: __dirname + "/public",
		filename: "[name]-[hash:6].js"
	}
}