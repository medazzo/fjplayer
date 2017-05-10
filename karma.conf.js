// Karma configuration
// Generated on Mon May 01 2017 00:53:58 GMT+0200 (CEST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'mocha', 'chai', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            'tests/*.spec.js',
            {
                pattern: 'demo/img/*.png',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'demo/img/*.jpg',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'demo/css/*.css',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'demo/videos/*.mp4',
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: 'demo/vtt/*.vtt',
                watched: false,
                included: false,
                served: true
            }
        ],

        proxies: {
            '/demo/': '/base/demo/'
        },

        captureTimeout: 60000,

        // list of files to exclude
        exclude: [],

        // Which plugins to enable plugins: ["karma-sinon", "karma-chai", "karma-mocha", "karma-jasmine", "karma-requirejs"],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "tests/*.spec.js": ["webpack"]
        },
        // webpack configuration
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            stats: "errors-only"
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'verbose', 'html'],

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
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}