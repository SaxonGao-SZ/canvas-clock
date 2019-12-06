var path =  require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT = path.resolve(__dirname, '../');
var SRC = `${ROOT}/src`;
var SRC_INDEX = `${SRC}/index.js`;
var DIST = `${ROOT}/dist/`;
console.log(ROOT);
console.log(SRC);
console.log(SRC_INDEX);
console.log(DIST);

var webpackConfig = {
  module: {},
  entry: SRC_INDEX,
  //devtool: '#source-map',
  output: {
    path: DIST,
    filename: 'convasTimer.js'
  },
  devServer: {
    contentBase: DIST,
    openPage: '/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'canvasTimer',
      template: path.join(ROOT, 'index.html')
    })
  ]

}
module.exports = webpackConfig;