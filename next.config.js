const withImages = require("next-images");

module.exports = withImages({
  esModule: true,
  webpack: (config, { dev }) => {
    //    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
    config.node = { fs: "empty", module: "empty" };
    return config;
  },
});
