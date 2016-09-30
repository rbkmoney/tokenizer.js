module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'browserify'],
        browsers: ['Chrome'],
        files: [
            'tests/**/*.test.js'
        ],
        preprocessors: {
            'tests/**/*.test.js': [ 'browserify' ]
        },
        reporters: ['mocha'],
        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }
    });
};
