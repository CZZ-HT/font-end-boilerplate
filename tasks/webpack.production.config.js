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
			loader:'html-loader',
			query: {
		      minimize: false
		    }
		},{
            test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=20480&name=images/[name].[ext]'
        }]
	},
	output: {
		path: path.resolve(__dirname , "../assets"),
		publicPath:"/assets/",
		filename: "js/[name].min.js?v=[hash:6]"
	},
	resolve: {
        extensions: ["", ".js", ".json", ".es6"]
    },
	plugins: [
		new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
		new webpack.optimize.DedupePlugin(),
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
	    new webpack.HotModuleReplacementPlugin(),
	    new ExtractTextPlugin("css/[name].min.css?v=[hash:6]"),
	    new HtmlWebpackPlugin({
	      	chunks: ['index'],
	      	template:'./src/index.html'
	    })
  	]
}