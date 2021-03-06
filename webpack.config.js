const path = require('path');
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader" }
    ]
  }
};