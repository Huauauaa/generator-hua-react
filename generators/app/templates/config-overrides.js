const {
  override,
  overrideDevServer,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');

const addCustomize = () => config => {
  return config;
};
const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  };
};
module.exports = {
  webpack: override(
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      localIdentName: '[local]--[hash:base64:5]',
      modifyVars: {
        hack: `true; @import "var.less";`,
      },
      javascriptEnabled: true,
    }),

    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addCustomize(),
  ),
  devServer: overrideDevServer(devServerConfig()),
};
