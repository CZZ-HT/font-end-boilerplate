var express = require("express");
var webpack = require("webpack");
var path = require('path')
var app = express();
var webpackConfig = require("./task/webpack.dev.conf.js");
var compiler = webpack(webpackConfig);


var devMiddleware = require('webpack-dev-middleware')(compiler, {
	  contentBase: webpackConfig.output.path,
  	publicPath: webpackConfig.output.publicPath,
  	//hot: true,
    //stats: { colors: true },
  	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	//lazy: true,
	//path:'/hmr',
	log: () => {}
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(express.static('./dist'));
app.use(hotMiddleware)
app.use(devMiddleware)

app.listen(4000, function () {
  console.log("Listening on port 4000!");
});