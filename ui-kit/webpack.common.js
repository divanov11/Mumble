const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fse = require("fs-extra");

const svgSprite = new CopyPlugin({
  patterns: [
    {
      from: "./images/icons/sprite.svg",
      to: "images/icons",
    },
  ],
});

let htmlFilesPlugins = fse
  .readdirSync("./static")
  .filter(function (file) {
    return file.endsWith(".html");
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./static/${page}`,
    });
  });

const commonPlugins = htmlFilesPlugins;
commonPlugins.push(svgSprite);

module.exports = {
  entry: {
    main: "./scripts/app.js",
    vendor: "./scripts/vendor.js",
  },
  plugins: commonPlugins,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-srcsets-loader",
          options: {
            interpolate: true,
            attrs: [
              "a:link",
              "img:src",
              ":srcset",
              ":data-src",
              ":data-srcset",
            ],
          },
        },
      },
    ],
  },
};
