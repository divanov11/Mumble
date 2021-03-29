const path = require("path");
const common = require("./webpack.common");
const postcss = require("./postcss.config");
const { merge } = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminJpegTran = require("imagemin-jpegtran");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const fse = require("fs-extra");

let htmlFiles = fse
  .readdirSync("./static")
  .filter(function (file) {
    return file.endsWith(".html");
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./static/${page}`,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    });
  })[0];

const imageFiles = new ImageminPlugin({
  plugins: [
    imageminJpegTran({
      progressive: true,
    }),
    imageminGifsicle({
      interlaced: false,
    }),
    imageminPngquant({
      floyd: 0.5,
      speed: 2,
    }),
    imageminSvgo({
      plugins: [
        {
          removeTitle: true,
        },
        {
          convertPathData: false,
        },
      ],
    }),
  ],
});

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    htmlFiles,
    imageFiles,
    new FaviconsWebpackPlugin("./images/hero/hero-mobile.png"),
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          postcss.postCSSAutoPrefixer,
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              options: { postcssOptions: { plugins: postcss.postCSSPlugins } },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contentHash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
});
