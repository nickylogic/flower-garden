const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './web/src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'web/dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },    
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    // directories where to look for modules
    modules: [
      "node_modules",
      path.resolve(__dirname, "assets"),
      path.resolve(__dirname, "src")
    ],
    extensions: [".js",".css",".vue"]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
