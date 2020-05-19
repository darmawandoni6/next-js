const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const optimizedImages = require("next-optimized-images");
const withImages = require("next-images");

const webpack = require("webpack");
const DotEnv = require("dotenv");
const path = require("path");

module.exports = withPlugins(
  [
    // [
    //   optimizedImages,
    //   {
    //     inlineImageLimit: 8192,
    //     imagesFolder: "images",
    //     imagesName: "[name]-[hash].[ext]",
    //     handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
    //     optimizeImages: true,
    //     optimizeImagesInDev: false,
    //     mozjpeg: {
    //       quality: 80,
    //     },
    //     optipng: {
    //       optimizationLevel: 3,
    //     },
    //     pngquant: false,
    //     gifsicle: {
    //       interlaced: true,
    //       optimizationLevel: 3,
    //     },
    //     webp: {
    //       preset: "default",
    //       quality: 75,
    //     },
    //   },
    // ],
    [withCss],
    [withSass],
    [withImages],
  ],
  {
    webpack: (config) => {
      config.plugins.push(new webpack.EnvironmentPlugin(process.env));
      config.resolve.alias = {
        ...config.resolve.alias,
        "@actions": path.resolve("src/store/actions"),
        "@components": path.resolve("src/components"),
        "@containers": path.resolve("src/containers"),
        "@configs": path.resolve("src/configs"),
        "@helpers": path.resolve("src/helpers"),
        "@images": path.resolve("src/assets/images"),
        "@styles": path.resolve("src/assets/styles"),
        "@reducers": path.resolve("src/store/reducers"),
      };
      return config;
    },
  }
);
