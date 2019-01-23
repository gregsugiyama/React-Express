var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var uglify = new UglifyJsPlugin({
  uglifyOptions: {
    mangle: {
      keep_fnames: true
    }
  }
});

var optimizeStyle = new OptimizeCssAssetsPlugin();

module.exports = {
  optimization: {
    minimizer: [uglify]
  },
  plugins: [optimizeStyle]
};
