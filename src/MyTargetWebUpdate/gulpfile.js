/// <binding BeforeBuild='all:compile' />
var gulp = require('gulp'),
ts = require('gulp-typescript'),
ngAnnotate = require('gulp-ng-annotate'),
less = require('gulp-less')
concatCss = require('gulp-concat-css'),
ugly = require('gulp-minify-css'),
jade = require('gulp-jade'),
jspm = require('jspm'),
autoprefixer = require('gulp-autoprefixer')
;

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
  gulp.src(['./typings/**/*.d.ts', './wwwroot/ngApp/**/*.d.ts','./wwwroot/rApp/**/*.ts?'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest('./wwwroot/rApp'));
});

gulp.task('tsx:watch', ['tsx:compile'], function(){
  gulp.watch('./wwwroot/rApp/**/*.ts?', ['tsx:compile']);
});

gulp.task('less:compile', function(){
  gulp.src(['./wwwroot/less/**/*.less', '!./wwwwroot/bower_components/**/*.less'])
   .pipe(less())
   .pipe(concatCss('site.min.css'))
   .pipe(autoprefixer())
   .pipe(ugly())
  .pipe(gulp.dest('./wwwroot'));
});

gulp.task('less:watch', ['less:compile'], function(){
  gulp.watch('./wwwroot/**/*.less', ['less:compile']);
});

gulp.task('jade:compile', function(){
  gulp.src('./wwwroot/ngApp/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./wwwroot/ngApp'));
});

gulp.task('jade:watch', ['jade:compile'], function(){
  gulp.watch('./wwwroot/ngApp/**/*.jade', ['jade:compile']);
});

gulp.task('build', function () {
    jspm.install(true, { lock: true });
    jspm.setPackagePath('.');
    jspm.bundleSFX('ngApp/app', 'wwwroot/bundle.angular.sfx.js', { mangle: false, minify : true });
});

gulp.task('all:watch', ['jade:watch', 'less:watch', 'ts:watch', 'tsx:watch'] , function(){});
gulp.task('all:compile', ['jade:compile', 'less:compile', 'ts:compile', 'tsx:compile'] , function(){});
//jspm bundle ngApp/app wwwroot/bundle.angular.min.js --minify --no-mangle
