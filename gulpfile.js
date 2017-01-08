
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');


gulp.task('styles', function () {
    gulp.src('Html5LayoutSass/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Html5LayoutSass/./css/'));
        // .pipe(webserver.reload());
});

//Server
gulp.task('webserver', function () {
    gulp.src('Html5LayoutSass')
        .pipe(webserver({
            livereload: true,
            // directoryListing: true,
            open: true
        }));
});

//Watch task
gulp.task('watch', function () {
    gulp.watch('Html5LayoutSass/sass/**/*.scss', ['styles']);
});

//Default
gulp.task('default', ['styles', 'webserver', 'watch']);
