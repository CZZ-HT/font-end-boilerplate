// require 加载 browser-sync 模块
var bs = require("browser-sync").create();
var env = require('./task/env.js');
// .init 启动服务器
bs.init({
	// proxy: {
 //        target: "http://192.168.1.122:" + env.port,
 //    },
 	server:'./dist',
    baseDir:"./dist",
 
    files:["dist/css/*.css", "dist/js/*.js","dist/*.html"]
});

// 现在请BS，而不是方法
// 主Browsersync模块出口
bs.reload("*.html");
