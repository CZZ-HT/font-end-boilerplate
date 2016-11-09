var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var plugins = [
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
	    new ExtractTextPlugin("css/[name]-[hash:6].css")
  	];
["/app/member/index.html"].forEach(function(item){
	plugins.push(new HtmlWebpackPlugin({
      	template: __dirname + item
    }))
});

module.exports = {
	entry: {
		member:["./app/member/main.jsx","./app/member/main.less"],
		vendor: ["react", "react-dom"],
	},
	module: {
		loaders:[{
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
	plugins: plugins,
	output: {
		path: __dirname + "/public/",
		filename: "js/[name]-[hash:6].js"
	}
}