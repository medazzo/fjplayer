var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
var path = require('path');
var config = {};

console.error('############################################');
console.warn(' Building in Production Mode ');
console.error('############################################');

config = {
    entry: {
        fjplayer: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fjplayer.min.js',
        publicPath: '/dist/',
        library: 'fjplayer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            },
            exclude: [
                path.resolve('./node_modules'),
                path.resolve('./bower_components'),
                path.resolve('./tests')
            ]
        },
        { test: /\.png$/, use: ['file-loader?name=img/[name].png'] },
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
        },
        { test: /bootstrap\/js\//, use: ['imports?jQuery=jquery'] },
        {
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
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({ 'global.GENTLY': false })
    ],
    node: {
        __dirname: true
    },
    devtool: 'cheap-module-source-map',
    stats: 'minimal',
    context: __dirname,
    target: 'web'
};

module.exports = config;
