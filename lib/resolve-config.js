const {isNil, castArray} = require('lodash');
const skipCiOptions = new Set(['message', false]);
const skipCiDefaultOption = 'message';

module.exports = ({assets, message, skipCi}) => ({
  assets: isNil(assets)
    ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
    : assets
    ? castArray(assets)
    : assets,
  message,
  skipCi:
    skipCiOptions.has(skipCi) || (typeof skipCi === 'object' && Boolean(skipCi.pushOption))
      ? skipCi
      : skipCiDefaultOption,
});
