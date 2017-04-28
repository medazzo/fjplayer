module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            './tests/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            "./tests/*.spec.js": ["webpack"]
        },
        // webpack configuration
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            stats: "verbose"
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeWithoutSecurity'],
        customLaunchers: {
            ChromeWithoutSecurity: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity
    });
};