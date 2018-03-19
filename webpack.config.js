const webpack = require('webpack');
const webpackCli = require('webpack-cli');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./ex/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};