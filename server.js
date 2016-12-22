// require 加载 browser-sync 模块
var bs = require("browser-sync").create();
var config = require('./task/config.js');
// .init 启动服务器
bs.init({
	proxy: {
        target: "http://localhost:" + config.port,
    },
    baseDir:"./dist",
 
    files:["dist/css/*.css", "dist/js/*.js","dist/*.html"]
});

// 现在请BS，而不是方法
// 主Browsersync模块出口
bs.reload("*.html");
