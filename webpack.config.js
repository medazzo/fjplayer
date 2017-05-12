var webpack = require('webpack');
var path = require('path');
var plugins = [];

console.error("############################################");
console.error(" Building in Development Mode ");
console.error("############################################");


var config = {
    entry: {
        fjplayer: "./src/index.js"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'fjplayer.js',
        publicPath: "/dist/",
        library: 'fjplayer',
        libraryTarget: 'umd',
        pathinfo: true,
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
            path.resolve(__dirname, "./node_modules"),
            path.resolve(__dirname, "./src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    plugins: [new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"developpment"'
        })
    ],
    devtool: 'inline-source-map',
    stats: 'verbose',
    context: __dirname,
    target: "web",
    devServer: {
        contentBase: path.join(__dirname, '/demo/'),
        compress: true,
        port: 9000
    }
};

module.exports = config;