const path = require("path");
const common = require("./webpack.common");
const postcss = require("./postcss.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminGifsicle = require("imagemin-gifsicle");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminJpegTran = require("imagemin-jpegtran");

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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    imageFiles,
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
      },
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
              postcssOptions: {
                plugins: postcss.postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
});
