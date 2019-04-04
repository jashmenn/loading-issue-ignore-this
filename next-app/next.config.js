// see: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// next.config.js
const withTM = require("@weco/next-plugin-transpile-modules");

const webpack = (config, { dev, isServer, defaultLoaders }) => {
  return config;
};

const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript(webpack);
