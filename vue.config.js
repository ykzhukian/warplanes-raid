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
  chainWebpack: config => {
    config.module
      .rule('image')
      .test(/\.(png|jpe?g|gif)$/i)
      .use('file-loader')
        .loader('file-loader')
        .end()
  }
};
