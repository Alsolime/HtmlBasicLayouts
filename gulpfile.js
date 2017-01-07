
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    gulp.src('Html5LayoutSass/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Html5LayoutSass/./css/'))
});

//Watch task
gulp.task('default', ['styles'], function () {
    gulp.watch('Html5LayoutSass/sass/**/*.scss', ['styles']);
});