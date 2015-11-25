var gulp = require('gulp'), ts = require('gulp-typescript'), ngAnnotate = require('gulp-ng-annotate');

gulp.task('ts:compile', function(){
  gulp.src(['./typings/**/*.d.ts','./wwwroot/ngApp/**/*.ts'])
  .pipe(ts({ target : 'es6', module: 'commonjs' }))
  //.pipe(ngAnnotate())
  .pipe(gulp.dest('./wwwroot/ngApp'));
});

gulp.task('ts:watch', ['ts:compile'], function(){
  gulp.watch('./wwwroot/ngApp/**/*.ts', ['ts:compile']);
});

//jspm bundle ngApp/app wwwroot/bundle.angular.min.js --minify --no-mangle
