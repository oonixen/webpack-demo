const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    stats: {
        children: false
    },
    externals: {
        path: PATHS
    },
    performance: {
        hints: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: PATHS.src
    },
    plugins: [
        new HtmlWebpackPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}