var pages = [
    'index','choose','search','mystore','member',
    'chuangke','orders','mywealth','fans','school',
    'decorate','goods','orderdetails','charity',
    'collection','invite','logistics',
    'newscontent','orderconfirm','recommend','withdrawal'
];

var env = {
    buildFolder: "build/",
    distFolder: "dist/",
    publicPath:'/assets/',
    vendorPath: "./src/vendor/",
    pagePath: "./src/page/",
    hmrPath: "/hmr/",
    port:8000,
    host:'0.0.0.0'
};

var entry = {};

pages.forEach(function(page){
    entry[page]=['./src/bundle/'+page+'/index.js','./src/bundle/'+page+'/index.css'];
});

env.entry = entry;


module.exports=env;
