import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import connect from 'gulp-connect';
import eslint from 'gulp-eslint';
import karma from 'karma';

const config = {
    dist: 'dist'
};

gulp.task('lint', () => {
    return gulp.src('src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('browserifyTokenizer', ['lint'], () => {
    return browserify({
        entries: 'src/tokenizer.js',
        extensions: ['.js'],
        debug: true
    }).transform('babelify').bundle()
        .pipe(source('tokenizer.js'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('browserifyTokenizerProvider', ['lint'], () => {
    return browserify({
        entries: 'src/tokenizerProvider.js',
        extensions: ['.js'],
        debug: true
    }).transform('babelify').bundle()
        .pipe(source('tokenizerProvider.js'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('uglify', ['browserifyTokenizer', 'browserifyTokenizerProvider'], () => {
    return gulp.src([`${config.dist}/tokenizer.js`, `${config.dist}/tokenizerProvider.js`])
        .pipe(uglify())
        .pipe(gulp.dest(config.dist));
});

gulp.task('copyStatic', () => {
    return gulp.src(['src/rpc/provider.html', 'src/tokenizerConfig.json'])
        .pipe(gulp.dest(config.dist));
});

gulp.task('test', done => {
    const KarmaServer = karma.Server;
    new KarmaServer({
        configFile: `${__dirname}/karma.conf.js`
    }, done).start();
});

gulp.task('connectDist', () => {
    connect.server({
        root: 'dist',
        host: '127.0.0.1',
        port: 7000
    });
});

gulp.task('watch', () => {
    gulp.watch('src/**/*', ['build', 'copyStatic']);
});

gulp.task('build', ['uglify', 'copyStatic']);
gulp.task('develop', ['build', 'connectDist', 'watch']);
gulp.task('default', ['build']);
