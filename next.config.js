// see: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})