var gulp = require('gulp'), ts = require('gulp-typescript'), ngAnnotate = require('gulp-ng-annotate');

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
  gulp.src(['./typings/**/*.d.ts', './wwwroot/ngApp/**/*.d.ts','./wwwroot/retApp/**/*.tsx'])
  .pipe(ts(tsConfig))
  .pipe(gulp.dest('./wwwroot/retApp'));
});

gulp.task('tsx:watch', ['tsx:compile'], function(){
  gulp.watch('./wwwroot/retApp/**/*.tsx', ['tsx:compile']);
});

//jspm bundle ngApp/app wwwroot/bundle.angular.min.js --minify --no-mangle
