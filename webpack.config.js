const path = require('path');
// const webpackNodeExternals = require('webpack-node-externals');

const {
  NODE_ENV = 'development',
} = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: {
    'options': './src/options.js',
    'popup': './src/popup.js',
    'cambridge': './src/cambridge.js',
    'oxford': './src/oxford.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('extension', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg|eot|woff|woff2|ttf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
  },
  devtool: 'source-map',
  target: 'web',
  // externals: [
  //   webpackNodeExternals(),
  // ],
};
