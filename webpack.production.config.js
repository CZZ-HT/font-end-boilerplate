var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//console.log(process.env.NODE_ENV)
module.exports = {
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
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
			loader: ExtractTextPlugin.extract('style', 'css!postcss')
		}]
	},
	postcss:[autoprefixer()],
	plugins: [
    	new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
	    new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin(),
    	new webpack.BannerPlugin("Copyright Flying xxx inc."),
    	new HtmlWebpackPlugin({
	      template: __dirname + "/app/index.tmpl.html"
	    }),
	    new ExtractTextPlugin("[name]-[hash:6].css")
  	],
	output: {
		path: __dirname + "/public",
		filename: "[name]-[hash:6].js"
	}
}