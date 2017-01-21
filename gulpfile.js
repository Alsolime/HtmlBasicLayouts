
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var minifyHTML = require('gulp-minify-html');

// Define file sources
var sassMain = ['Html5LayoutSass/sass/style.scss'];  
var sassSources = ['Html5LayoutSass/sass/**/*.scss']; // Any .scss file in any sub-directory  
var scriptsSources = ['Html5LayoutSass/scripts/*.js']; // Any .js file in scripts directory
var htmlSources = ['Html5LayoutSass/*.html'];

var cssSources = ['Html5LayoutSass/css/'];  
var jsSources = ['Html5LayoutSass/js/'];

// Console log
gulp.task('hello', function() {  
  console.log("Hello, world!");
});

//Compile Sass
gulp.task('styles', function () {
    gulp.src(sassMain)
        .pipe(sass({
            outputStyle: 'nested' // Style of compiled CSS nested|compact|expanded|compressed
        }).on('error', sass.logError))
        .pipe(gulp.dest('Html5LayoutSass/css/'));
});

// Task to concatenate and uglify js files
gulp.task('concat', function() {  
    gulp.src(scriptsSources) // use scriptsSources
        .pipe(concat('script.js')) // Concat to a file named 'script.js'
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('Html5LayoutSass/js')); // The destination for the concatenated and uglified file
});

//Mimify html
gulp.task('html', function() {  
  gulp.src(htmlSources)
    .pipe(minifyHTML())
    .pipe(gulp.dest('Html5LayoutSass/dist'));
});

//Server
gulp.task('webserversass', function () {
    gulp.src('Html5LayoutSass')
        .pipe(webserver({
            livereload: true,
            // directoryListing: true,
            open: true
        }));
});

gulp.task('webserverhtml5', function () {
    gulp.src('Html5Layout')
        .pipe(webserver({
            livereload: true,
            // directoryListing: true,
            open: true
        }));
});

gulp.task('webserverhtml', function () {
    gulp.src('HtmlLayout')
        .pipe(webserver({
            livereload: true,
            // directoryListing: true,
            open: true
        }));
});

//Watch task
gulp.task('watch', function () {
    // gulp.watch(cssSources, ['styles']);
    gulp.watch(sassSources,['styles']); 
    gulp.watch(scriptsSources,['concat']); 
});

//Default
gulp.task('layoutsass', ['styles', 'concat', 'webserversass', 'watch']);
gulp.task('layouthtml5', ['webserverhtml5']);
gulp.task('layouthtml', ['webserverhtml']);

//Default
// gulp.task('default', ['styles', 'concat', 'webserversass', 'watch']);
gulp.task('default', ['layoutsass']);
