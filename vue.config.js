const packageName = require('./package.json').name;
module.exports = {
  devServer: {
    port: 7200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `microFrqr`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  }
};