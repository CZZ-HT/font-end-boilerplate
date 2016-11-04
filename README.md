# autobuild-fontend-boilerplate
前端自动化构建模版

Quick start develop your webapp with react,less,etc.
===
- run`npm install`
- run`npm start` to get develop server start(eg:webpack-dev-server)
- run`npm build ` to build files to the website root

Deploy to production environment
===
- run`npm install --production`
- run`npm install pm2 -g`(more instructions in [pm2 documention](https://github.com/Unitech/PM2))
- run`pm2 start app.js --name <Project Name>` to deploy

Directory structure
===

```sh
app/
    |-- __tests__/  #client unit tests
    |-- asset/      #images,fonts,public css and so on
    |-- error/      #error page's entry js and css
    |-- vendor/     #third party libraries
    |-- index/      #index page's entry js and css
    |-- .../        #more your own page's entry js and css,like index page
public/
    |-- index.html  #index page's template
    |-- *.html      #more your own page's template
    |-- assets/
    		|--/images/
.babelrc
.gitignore
package.json
README.md
webpack.config.js
webpack.production.config.js
 
```


