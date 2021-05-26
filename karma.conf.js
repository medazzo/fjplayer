// Karma configuration
// Generated on Mon May 01 2017 00:53:58 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: [ 'mocha', 'chai'],
        files: [
            'tests/*.spec.js'
        ],
        exclude: [],
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ],
        preprocessors: {
            'tests/*.spec.js': ['webpack']
        },
        // webpack configuration
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            stats: 'errors-only',
            noInfo: true
        },

        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text-summary'}
            ]
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        htmlReporter: {
            outputFile: 'tests/units.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        },
        client: {
            captureConsole: true,
            mocha: {
                bail: true
            }
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};