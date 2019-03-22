// see: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// next.config.js

const webpack = (config, { dev, isServer }) => {
  console.log("config: ", config);

  config.module.rules.push({
    test: /\.esm.js$/,
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

  console.log("config.module.rules: ", config.module.rules);

  return config;
};

const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({ webpack });
