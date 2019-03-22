// see: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// next.config.js
const withTM = require("@weco/next-plugin-transpile-modules");

const webpack = (config, { dev, isServer, defaultLoaders }) => {
  /*
  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules\/some-es6-package/,
    use: [
      defaultLoaders.babel,
      {
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {
                debug: true,
                forceAllTransforms: true,
                targets: {
                  ie: "11"
                }
              }
            ]
          ]
        }
      }
    ]
  });
  */

  return config;
};

const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript(
  withTM({ webpack, transpileModules: ["some-es6-package"] })
);
