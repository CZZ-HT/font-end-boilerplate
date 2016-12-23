#Frontend Scaffold

yet another new efficient and painless scaffold for frontend develop

Start to work
===

1. clone to your local disk `git clone https://github.com/bjtqti/font-end-boilerplate`
2. run `npm install`
3. run `npm start` to start,just simple and clean

Release to publish
===

1. run `npm run build`
2. check your all the pages and related css,jss in the "dist" directory

Directory Structure
===

```sh
src/
    |-- vendor/ #third party libraries like 'jquery'
    |-- asset/ #images,fonts and so on
    |-- common/ #js in common use
    |-- bundle/
        |-- index/ #index page's bundle
            |-- script/ #partial js of index page
            |-- stylesheet/ #partial css of index page
            |-- index.js #entry js
            |-- index.css #entry css
        |-- .../  #more your own page
    |-- page/ #page's html
dist/
    |-- images/
    |-- css/#dist css come here
    |-- js/ #dist js come here
    |--index.html #dist index.html
    |-- .../ #more dist pages
task/
    |-- config/
        |-- page.json #define page's path and other setup
        |-- vendor.json #define third party libraries
    |-- environment.js  #define page build's env variables
    |-- vendor-css.js   #third party library's css compile
    |-- webpack-inject.js #inject compiled js and css into pages
    |-- webpack.develop.js #compile source code and vendors for develop
    |-- webpack.production.js #compile source code and vendors for production
    |-- webpack.hot-update.js #compile source code and vendors for develop in HMR
server.js # 
```

