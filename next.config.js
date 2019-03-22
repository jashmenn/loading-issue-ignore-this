// see: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// next.config.js

const webpack = (config, { dev, isServer }) => {
  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules\/@remirror/,
    use: {
      loader: "babel-loader",
      options: {
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
  });

  return config;
};

const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({ webpack });
