var path = require('path');
var dir_js = path.resolve(__dirname, 'src/js');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'main.js'),
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    { loader: 'babel-loader', test: dir_js },
    { loader: "style!css", test: /\.css$/  },
    ]
  },
  devServer: {
    contentBase: __dirname,
  }
};
