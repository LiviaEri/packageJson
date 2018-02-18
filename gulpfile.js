var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('./scss/style.scss').pipe(sass()).pipe(autoprefixer()).pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.watch('./scss/**', ['css']); 
});