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
build/
    |-- index/
            |-- index.css
            |-- index.js
    |-- other/
            |--other.css
            |--other.js
client/
    |-- common/      #css and js file
    |-- images/      # resource
    |-- index/       #index page entry
    |-- other/      # ... other page entry
tasks/
    |-- webpack.hot.update.js/ #webpack hmr config
    |-- webpack.production.config.js/        #webpack config for production
.babelrc  #for babel config
package.json # npm config
```

Tips
===
本教程假设你已经安装了node环境,推荐版本为v4.6.2

npm install --save-dev autoprefixer-loader babel-core babel-loader babel-preset-es2015 css-loader extract-text-webpack-plugin file-loader style-loader stylus-loader webpack-dev-server webpack

npm install --save jquery