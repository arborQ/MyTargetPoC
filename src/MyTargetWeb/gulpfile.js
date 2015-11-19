var gulp = require('gulp');

gulp.task('angular:copy', function(){
  gulp.src('./src/angular/**/*.*')
  .pipe(gulp.dest('./wwwroot/angular'));
});

gulp.task('angular:watch', ['angular:copy'], function(){
  gulp.watch('./src/angular/**/*.*', ['angular:copy']);
});
