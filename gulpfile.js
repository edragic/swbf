var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('assets/scss/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('public/css/'));
});

gulp.task('default', function() {
	gulp.watch( 'assets/scss/*.scss', ['sass']);
});
