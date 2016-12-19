// require 加载 browser-sync 模块
var bs = require("browser-sync").create();

// .init 启动服务器
bs.init({
    baseDir:"./dist",
    server: "./dist",
    files:["dist/css/*.css", "dist/js/*.js"]
});

// 现在请BS，而不是方法
// 主Browsersync模块出口
bs.reload("*.html");
