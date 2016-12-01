# autobuild-fontend-boilerplate
前端自动化构建模版



快速度开始
===
- run`npm install`
- run`npm run start` to get develop server start
- run`npm run build` to release resource to html

 

Directory structure
===

```sh
assets/
    |-- css/ #css file
    |-- js/ #js file
    |-- images /#images
    |-- index.html
src/
    |-- css/      #stylus file
    |-- images/
    |-- js/     #es6 files
    |-- index.html 
tasks/
    |-- webpack.config.js/ #webpack config
    |-- webpack.production.config.js/        #webpack config for production
.babelrc  #for babel config
package.json # npm config
```

Tips
===
本教程假设你已经安装了node环境,推荐版本为v4.6.2