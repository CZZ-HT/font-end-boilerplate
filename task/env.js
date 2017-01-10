
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config.js');
var htmlPlugins = [];
var exlude = ['vendor']
// https://github.com/ampedandwired/html-webpack-plugin

for(name in config){
	name !== 'vendor' && htmlPlugins.push(
		new HtmlWebpackPlugin({
            filename: name+'.html',
            template: './src/pages/'+name+'.html',
            inject: true,
            chunks:[name,'vendor']
        })
	)
}
 

module.exports = {
    assetsRoot: path.resolve(__dirname, '../dist'),
    htmlPlugins:htmlPlugins
}
