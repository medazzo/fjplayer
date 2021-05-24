var webpack = require('webpack');
var path = require('path');
var plugins = [];

    console.error("############################################");
    console.warn(" Building in Production Mode ");
    console.error("############################################");

    var config = {
        optimization: {
            minimize: true
        },
        entry: {
            fjplayer: "./src/index.js"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'fjplayer.min.js',
            publicPath: "/dist/",
            library: 'fjplayer',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                },
                exclude: [
                    path.resolve("./node_modules"),
                    path.resolve("./bower_components"),
                    path.resolve("./tests")
                ]
            },
            { test: /\.png$/, use: ["file-loader?name=img/[name].png"] },
            { test: /\.less$/, use: ["style-loader","css-loader","less-loader"] },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            { test: /bootstrap\/js\//, use: ['imports?jQuery=jquery'] },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: [ 'url-loader?limit=10000&mimetype=application/font-woff' ]},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [ 'url-loader?limit=10000&mimetype=application/octet-stream' ]},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [ 'file-loader'] },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [ 'url-loader?limit=10000&mimetype=image/svg+xml'] }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "./node_modules"),
            path.resolve(__dirname, "./src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
        },
        node: {
            __dirname: true,
        },
        devtool: "source-map",
        stats: 'minimal',
        context: __dirname,
        target: "web"
    };

module.exports = config;
