const autoprefixer = require("autoprefixer");

exports.postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("postcss-hexrgba"),
  autoprefixer,
];

exports.postCSSAutoPrefixer = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [autoprefixer],
    },
  },
};
