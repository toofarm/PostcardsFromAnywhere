var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.jpg'],
        alias: {
            // bind version of jquery-ui
            "jquery-ui": "jquery-ui/jquery-ui.js",
            // bind to modules;
            modules: path.join(__dirname, "node_modules"),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
              }
            ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                    ]
            },
            {
                rules: [{
                    test: /\.scss$/,
                    use: [{
                            loader: "style-loader" // creates style nodes from JS strings 
            }, {
                            loader: "css-loader" // translates CSS into CommonJS 
            }, {
                            loader: "sass-loader" // compiles Sass to CSS 
            },
            ]
        }]
        }
        ]
    }
}
