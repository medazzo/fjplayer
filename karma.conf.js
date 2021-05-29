const webpackConfig = require('./webpack.prod.config');
const karmaConfig = {
    basePath: '',
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    debugMode: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    client: {
        clearContext: false, // leave Jasmine Spec Runner output visible in browser
        jasmine: {
            random: true,
            seed: '4321',
            oneFailurePerSpec: true,
            failFast: true,
            timeoutInterval: 90000 // 70 sec instead of 5000ms
        }
    },
    proxies: {
        '/demo/video': 'http://localhost:9876/base/demo/video',
        '/dist/': 'http://localhost:9876/base/demo/dist'
    },
    files: [
        {pattern: 'src/**/*.js', watched: true},
        {pattern: 'demo/videos/*.mp4', included: false, served: true},
        {pattern: 'dist/*.woff*', included: false, served: true},
        {pattern: 'dist/*.ttf', included: false, served: true}
    ],
    preprocessors: {
        'src/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['coverage', 'progress', 'kjhtml'],
    coverageReporter: {
        // specify a common output directory
        dir: 'build/reports/coverage',
        instrumenterOptions: {
            istanbul: { noCompact: true }
        },
        reporters: [
            // reporters not supporting the `file` property
            { type: 'html', subdir: 'report-html' },
            { type: 'lcov', subdir: 'report-lcov' },
            // reporters supporting the `file` property, use `subdir` to directly
            // output them in the `dir` directory
            { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
            { type: 'text', subdir: '.', file: 'text.txt' },
            { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
        ]
    },
    specReporter: {
        showSpecTiming: true
    },
    reportSlowerThan: 25
};

module.exports = function (config) {
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    karmaConfig.logLevel = config.LOG_INFO;
    config.set(karmaConfig);
};