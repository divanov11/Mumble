const path = require("path");
const common = require("./webpack.common");
const postcss = require("./postcss.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    before: function (app, server) {
      server._watch("./static/**/*.html");
    },
    contentBase: path.join(__dirname, "static"),
    hot: true,
    port: 3300,
    host: "localhost",
    disableHostCheck: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          postcss.postCSSAutoPrefixer,
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postcss.postCSSPlugins } },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
});
