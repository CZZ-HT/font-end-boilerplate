var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//console.log(process.env.NODE_ENV)
module.exports = {
	entry: {
		member:["./app/member/main.jsx","./app/member/main.css"],
		vendor: ["react", "react-dom"],
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
    	new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        new CommonsChunkPlugin({
        	name:'vendor'
        }),
	    new webpack.optimize.OccurenceOrderPlugin(true),
    	new webpack.optimize.UglifyJsPlugin({
    		compress: {
                warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
    	}),
    	//new webpack.BannerPlugin("Copyright Flying xxx inc."),
    	new HtmlWebpackPlugin({
	      	template: __dirname + "/app/member/index.html"
	    }),
	    new ExtractTextPlugin("css/[name]-[hash:6].css")
  	],
	output: {
		path: __dirname + "/public/",
		filename: "js/[name]-[hash:6].js"
	}
}