var gulp = require('gulp'),
ts = require('gulp-typescript'),
ngAnnotate = require('gulp-ng-annotate');

var tsConfig = require('./tsconfig.json').compilerOptions;

gulp.task('ts:compile', function(){
  gulp.src(['./typings/**/*.d.ts','./wwwroot/ngApp/**/*.ts'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest('./wwwroot/ngApp'));
});

gulp.task('ts:watch', ['ts:compile'], function(){
  gulp.watch('./wwwroot/ngApp/**/*.ts', ['ts:compile']);
});

gulp.task('tsx:compile', function(){
  gulp.src(['./typings/**/*.d.ts', './wwwroot/ngApp/**/*.d.ts','./wwwroot/retApp/**/*.ts?'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest('./wwwroot/retApp'));
});

gulp.task('tsx:watch', ['tsx:compile'], function(){
  gulp.watch('./wwwroot/retApp/**/*.ts?', ['tsx:compile']);
});

gulp.task('less:compile', function(){
  var c = require('gulp-concat-css');
  gulp.src('./wwwroot/less/**/*.less')
   .pipe(require('gulp-less'))
  //.pipe(c('site.min.css'))
  // .pipe(require('gulp-minify-css'))
  .pipe(gulp.dest('./wwwroot'))
});

//jspm bundle ngApp/app wwwroot/bundle.angular.min.js --minify --no-mangle
