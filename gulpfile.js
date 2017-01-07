
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');


gulp.task('styles', function () {
    gulp.src('Html5LayoutSass/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Html5LayoutSass/./css/'))
});

//Server
gulp.task('webserver', function () {
    gulp.src('Html5LayoutSass')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

//Watch task
gulp.task('default', ['styles'], function () {
    gulp.watch('Html5LayoutSass/sass/**/*.scss', ['styles']);
});
