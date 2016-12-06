var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		main:[__dirname + "/app/main.js",'./app/main.css'],
		vender:['jquery']
	}, //已多次提及的唯一入口文件
	module: {//在配置文件里添加JSON loader
	    loaders: [
	      {
	        test: /\.css$/,
	        exclude: /node_modules/,
	        loader: ExtractTextPlugin.extract("style","css")
	      },
	      {
	        test: /\.png$/,
	        exclude: /node_modules/,
	        loader: "url?limit=1000&name=[path][name].[ext]"
	      }
	    ]
	},
	devtool: 'source-map',//配置生成Source Maps，选择合适的选项
	output: {
		path: __dirname + "/public", //打包后的文件存放的地方
		filename: "[name].js", //打包后输出文件的文件名,
		//publicPath:'/build/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			filename:'vender.js',
			name:'vender'
		}),
        new ExtractTextPlugin("[name].css")
    ]
}