var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var plugins = [];

console.error("############################################");
console.warn(" Building in Production Mode ");
console.error("############################################");


// for jquery
plugins.push(new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
}));
/*plugins.push(new UglifyJsPlugin({ minimize: true }));*/

var config = {
    entry: {
        fjplayer: "./src/index.js"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'fjplayer.min.js',
        publicPath: "/assets/",
        library: 'fjplayer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                    strict: false,
                    _with: false
                }
            },
            {
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
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    plugins: plugins,
    devtool: 'nosources-source-map',
    stats: 'minimal',
    context: __dirname,
    target: "web"
};

module.exports = config;