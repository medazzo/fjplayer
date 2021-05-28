// Karma configuration
// Generated on Mon May 01 2017 00:53:58 GMT+0200 (CEST)

const src = './src/**/*.js',
    srcCov = '**/src/**/*.js',
    tests = './tests/**/*.spec.js';

const karmaConfig = {
    basePath: './',
    frameworks: ['mocha'],
    proxies: {
        '/demo/videos/berber_pub.mp4': '/base/demo/videos/berber_pub.mp4',
        '/dist/20fd1704ea223900efa9fd4e869efb08.woff2': '/base/dist/20fd1704ea223900efa9fd4e869efb08.woff2',
        '/dist/f691f37e57f04c152e2315ab7dbad881.woff': '/base/dist/f691f37e57f04c152e2315ab7dbad881.woff',
        '/dist/1e59d2330b4c6deb84b340635ed36249.ttf': '/base/dist/1e59d2330b4c6deb84b340635ed36249.ttf'
    },
    files: [
        src,
        tests,
        {pattern: './demo/img/*', watched: false, included: false, served: true},
        {pattern: './demo/videos/*', watched: false, included: false, served: true}
    ],
    preprocessors: {
        src: ['webpack', 'coverage'],
        tests: ['webpack']
    },
    debugMode: true,
    webpack: require('./webpack.config.js'),
    reporters: ['coverage', 'html'],
    browsers: ['Chrome'],
    client: {
        captureConsole: false,
        mocha: {
            timeout: 10000 // 10 seconds - upped from 2 seconds
        }
    },
    specReporter: {
        showSpecTiming: true
    },
    colors: true,
    reportSlowerThan: 25,
    autoWatch: true,
    coverageReporter: {
        dir: 'coverage',
        reporters: [
            { type: 'text' },
            { type: 'text-summary' },
            { type: 'html' }
        ]
    },
    htmlReporter: {
        outputFile: 'tests/units.html',
        // Optional
        pageTitle: 'Unit Tests',
        subPageTitle: 'A sample project description',
        groupSuites: true,
        useCompactStyle: true
    }
};

karmaConfig.preprocessors[src] = ['webpack'];
karmaConfig.preprocessors[srcCov] = ['coverage'];
karmaConfig.preprocessors[tests] = ['webpack'];

module.exports = function (config) {
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    karmaConfig.logLevel = config.LOG_INFO;
    config.set(karmaConfig);
};