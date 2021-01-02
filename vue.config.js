const path = require('path');

module.exports = {
  configureWebpack: {
    output: {
      filename: 'build.js',
      path: path.resolve(__dirname, './dist'),
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
    },
  },
};
