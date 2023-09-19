const gulp = require('gulp');
// const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('styles/custom-styles.scss')
        .pipe(sass())
        .pipe(concat('custom-styles.css.liquid'))
        .pipe(gulp.dest('assets/'))
});

gulp.task('watch', function () {
    gulp.watch('styles/**/*.scss', gulp.series('sass'))
    // themeKit.command('watch', {
    //     env: 'development'
    // })
})