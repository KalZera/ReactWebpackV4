const webpack = require('webpack');
const webpackCli = require('webpack-cli');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./ex/index.jsx"],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};