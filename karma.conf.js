
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
        {pattern: 'test-context.js', watched: true},
        {pattern: 'demo/videos/*.mp4', included: false, served: true},
        {pattern: 'dist/*.woff*', included: false, served: true},
        {pattern: 'dist/*.ttf', included: false, served: true}
    ],
    preprocessors: {
        'test-context.js': ['webpack', 'coverage']
    },
    webpack: {
        module: {
            rules: [
                {
                    test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }, { test: /\.png$/, use: ['file-loader?name=img/[name].png'] },
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]
                }, {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/octet-stream'
                    }
                },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader'] },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'svg+xml'
                    }
                }
            ]
        },
        watch: true
    },
    reporters: ['coverage', 'progress', 'kjhtml'],
    specReporter: {
        showSpecTiming: true
    },
    reportSlowerThan: 25,
    coverageReporter: { type: 'html', dir: 'coverage/' }

};

module.exports = function (config) {
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    karmaConfig.logLevel = config.LOG_INFO;
    config.set(karmaConfig);
};