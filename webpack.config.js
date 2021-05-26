
var config = {};
var webpack = require('webpack');
var path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

console.error('############################################');
console.error(' Building in Development Mode ');
console.error('############################################');

config = {
    entry: {
        fjplayer: './src/index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fjplayer.js',
        publicPath: '/dist/',
        library: 'fjplayer',
        libraryTarget: 'umd',
        pathinfo: true,
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
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
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    plugins: [
        new ESLintPlugin(),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.DefinePlugin({ 'global.GENTLY': false })
    ],
    node: {
        __dirname: true
    },
    devtool: 'source-map',
    stats: 'verbose',
    context: __dirname,
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, '/demo/'),
        compress: true,
        port: 9000
    }
};

module.exports = config;
