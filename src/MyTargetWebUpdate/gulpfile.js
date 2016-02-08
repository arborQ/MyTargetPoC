/// <binding BeforeBuild='all:compile' />
var gulp = require('gulp'),
ts = require('gulp-typescript'),
ngAnnotate = require('gulp-ng-annotate'),
less = require('gulp-less'),
concatCss = require('gulp-concat-css'),
ugly = require('gulp-minify-css'),
jade = require('gulp-jade'),
jspm = require('jspm'),
htmlUgly = require('gulp-minify-html'),
autoprefixer = require('gulp-autoprefixer')
;
var sourceDir = './sources';
var targetDir = './wwwroot/dest';
var bundleDir = './wwwroot/bundles';
var tsConfig = require('./tsconfig.json').compilerOptions;

gulp.task('ts:compile', function(){
  gulp.src(['./typings/**/*.d.ts', sourceDir + '/**/*.ts'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest(targetDir));
});

gulp.task('ts:watch', ['ts:compile'], function(){
  gulp.watch(sourceDir + '/**/*.ts', ['ts:compile']);
});

gulp.task('tsx:compile', function(){
  gulp.src(['./typings/**/*.d.ts', sourceDir + '/**/*.d.ts', sourceDir + '/**/*.tsx'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest(targetDir));
});

gulp.task('tsx:watch', ['tsx:compile'], function(){
  gulp.watch(sourceDir + '/**/*.tsx', ['tsx:compile']);
});

gulp.task('less:compile', function(){
  gulp.src([sourceDir + '/**/*.less'])
   .pipe(less())
   .pipe(concatCss('site.min.css'))
   .pipe(autoprefixer())
   .pipe(ugly())
  .pipe(gulp.dest(bundleDir));
});

gulp.task('less:watch', ['less:compile'], function(){
  gulp.watch(sourceDir + '/**/*.less', ['less:compile']);
});

gulp.task('jade:compile', function(){
  gulp.src(sourceDir + '/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest(targetDir));
});

gulp.task('jade:watch', ['jade:compile'], function(){
  gulp.watch(sourceDir + '/**/*.jade', ['jade:compile']);
});

gulp.task('html:compile', function(){
  gulp.src(sourceDir + '/**/*.html')
  .pipe(htmlUgly())
  .pipe(gulp.dest(targetDir));
});

gulp.task('html:watch', ['html:compile'], function(){
  gulp.watch(sourceDir + '/**/*.html', ['html:compile']);
});

gulp.task('build:angular', function () {
    jspm.install(true, { lock: true });
    jspm.setPackagePath('.');
    jspm.bundleSFX('dest/application.angular/app', bundleDir + '/bundle.angular.sfx.js', { mangle: false, minify : true });
});

gulp.task('all:watch', ['jade:watch', 'less:watch', 'ts:watch', 'tsx:watch', 'html:watch'] , function(){});
gulp.task('all:compile', ['jade:compile', 'less:compile', 'ts:compile', 'tsx:compile', 'html:compile'] , function(){});
//jspm bundle ngApp/app wwwroot/bundle.angular.min.js --minify --no-mangle
