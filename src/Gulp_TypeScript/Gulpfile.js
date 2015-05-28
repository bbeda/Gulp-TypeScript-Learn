/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var typeScript = require('gulp-typescript');
var sourceMaps = require('gulp-sourcemaps');

gulp.task("typescript", function () {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(typeScript({
            target: 'ES3'
        }));
    return tsResult.js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('wwwroot/app'));
});

gulp.task('default', function () {
    // place code for your default task here
});