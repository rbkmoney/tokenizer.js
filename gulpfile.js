const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

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

gulp.task('connect', () => {
    connect.server({
        root: 'dist',
        host: '127.0.0.1',
        port: 7000
    });
});

gulp.task('docker', ['build', 'uglify', 'connect']);
gulp.task('default', ['build', 'uglify']);
