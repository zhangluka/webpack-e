const loaderUtils = require('loader-utils');
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('bobby', options.user)
    return callback(null, result);
  }, 0)
  return source.replace(/test for custom webpack loader/g, `test for custom webpack loader (modified by ${options.user})`);
}