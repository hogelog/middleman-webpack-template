var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    site: "./source/javascripts/site.js",
  },
  output: {
    filename: "javascripts/[name].bundle.js",
    path: path.resolve(__dirname, ".tmp/dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"],
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("stylesheets/[name].bundle.css"),
  ]
};
