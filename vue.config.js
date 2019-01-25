const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: {
    name: 'gank',
    devtool: 'source-map',
    plugins: [new BundleAnalyzerPlugin()]
  }
};
