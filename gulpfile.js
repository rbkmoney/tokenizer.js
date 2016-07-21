const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('build', () => {
    return browserify({
        entries: 'src/bootstrap.js',
        extensions: ['.js'],
        debug: true
    }).transform("babelify").bundle()
        .pipe(source('tokenizer.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['build'], () => {
    return gulp.src('dist/tokenizer.js')
        .pipe(rename('tokenizer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'uglify']);
