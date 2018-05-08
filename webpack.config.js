const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("postcss-nested"),
                require("autoprefixer")
              ]
            }
          }
        ]
      },
      { test: /\.ico$/, use: "file-loader?name=[name].[ext]" },
      { test: /\.(png|jpg|gif)$/, use: "url-loader?limit=8192" },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
          "url-loader?limit=8192&mimetype=application/font-woff&name=./[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader?name=./[hash].[ext]"
      },
      { test: /\.tsx?$/, use: "ts-loader" }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ title: "preact-mdl example" })],
  mode: 'none'
};
