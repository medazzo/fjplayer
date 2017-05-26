    var webpack = require('webpack');
    var path = require('path');

    console.error("############################################");
    console.warn(" Building in Production Mode ");
    console.error("############################################");

    var config = {
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
                        presets: ["es2015"]
                    },
                    exclude: [
                        path.resolve("./node_modules"),
                        path.resolve("./bower_components"),
                        path.resolve("./tests")
                    ]
                },
                { test: /\.png$/, loader: "file-loader?name=img/[name].png" },
                { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
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
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
            ]
        },
        resolve: {
            modules: [
                path.join(__dirname, "src"),
                "node_modules"
            ],
            extensions: [".js", ".json", ".jsx", ".css"],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: true,
                compress: {
                    warnings: true, // Suppress uglification warnings
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    screw_ie8: true
                },
                output: {
                    comments: false,
                },
                exclude: [/\.min\.js$/gi] // skip pre-minified libs
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({ "global.GENTLY": false })
        ],
        node: {
            __dirname: true,
        },
        devtool: 'cheap-module-source-map',
        stats: 'minimal',
        context: __dirname,
        target: "web"
    };

    module.exports = config;