
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
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
			loader: 'babel'
			// query: {
			// 	presets: ['es2015', 'react']
			// }
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}]
	},
	plugins: [
    	new HtmlWebpackPlugin({
	      template: __dirname + "/app/index.tmpl.html"
	    }),
	    new webpack.HotModuleReplacementPlugin()
  	],
	output: {
		path: __dirname + "/public",
		filename: "[name]-[hash:6].js"
	}
}