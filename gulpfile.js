var gulp = require('gulp');
var inject = require('gulp-inject');
var env = require('./task/env.js');

 
gulp.task('index', function () {
	gulp.src('./src/page/decorate.html')
	  .pipe(inject(gulp.src('./dist/js/flexible.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->'}))
	  .pipe(inject(gulp.src(['./dist/js/vendor.js','./dist/js/decorate.js','./dist/css/decorate.css'], {read: false})))
	  .pipe(gulp.dest('./dist'));
});