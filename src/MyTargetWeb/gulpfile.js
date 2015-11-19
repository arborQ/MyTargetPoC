var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('angular:clean', function(){
  return gulp.src('./wwwroot/src', {read: false})
        .pipe(clean());
});

gulp.task('angular:copy', ['angular:clean'], function(){
  gulp.src(['./typings/**/*.d.ts', './src/angular/**/*.*'])
  .pipe(ts({module : 'commonjs'}))
  .pipe(ngAnnotate())
  .pipe(gulp.dest('./wwwroot/src'));
});

gulp.task('core:clean', function(){
  return gulp.src('./wwwroot/core', {read: false})
        .pipe(clean());
});

gulp.task('core:copy', ['core:clean'], function(){
  gulp.src(['./src/core/**/*.*'])
  .pipe(ts({module : 'commonjs'}))
  // .pipe(ngAnnotate())
  .pipe(gulp.dest('./wwwroot/core'));
});

gulp.task('angular:watch', ['angular:copy', 'core:copy'], function(){
  gulp.watch('./src/**/*.*', ['angular:copy', 'core:copy']);
});
