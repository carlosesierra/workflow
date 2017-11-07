var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload

var SOURCEPATHS = {
  sassSource : 'src/scss/*.scss'
}
var APPPATH = {
  root : 'app/',
  css : 'app/css',
  js : 'app/js',
  scss: 'src/scss'
}

gulp.task('sass', function(){
  return gulp.src(SOURCEPATHS.sassSource)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(APPPATH.css));
});

gulp.task('serve', ['sass'], function(){
  browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {
    server: {
      baseDir : APPPATH.root
    }
  })
});

gulp.task('watch', function () {
    gulp.watch(APPPATH.scss + '/*.scss', ['sass']);
});

gulp.task('default', ['serve','watch']);
