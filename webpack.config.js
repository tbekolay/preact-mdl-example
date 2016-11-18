var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/main.tsx',
    output: {
        path: './dist',
        filename: 'main.js',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
            { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=8192&mimetype=application/font-woff&name=./[hash].[ext]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./[hash].[ext]'
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    plugins: [
        require('webpack-fail-plugin'),
        new HtmlWebpackPlugin({title: "preact-mdl example"})
    ],
    postcss: function(webpack) {
        return [
            require('postcss-nested'),
            require('autoprefixer'),
        ];
    }
}
