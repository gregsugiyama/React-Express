var webpack = require("webpack");
var HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

var stylePlugin = new ExtractTextPlugin("style.css");

var APP_DIR = path.resolve(__dirname, "src");
var BUILD_DIR = path.resolve(__dirname, "public");

module.exports = {
  entry: [APP_DIR + "/components/App.jsx"],
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }
    ]
  },
  plugins: [htmlPlugin, stylePlugin]
};
