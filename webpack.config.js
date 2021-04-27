const {resolve} = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

dotenv.config();

const mode = process.env.NODE_ENV || 'development';

let plugins = [new webpack.EnvironmentPlugin({})];

if (process.env.NODE_ENV === 'development') {
  plugins.push(new BundleAnalyzerPlugin());
}

if (mode !== 'development') {
  plugins = [...plugins, new WebpackObfuscator({}, [])];
}

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  mode,
  plugins,
  externals: [],
  devtool: mode === 'development' ? 'source-map' : false,
  entry: {
    cambridge: path.join(srcPath, 'cambridge.tsx'),
    oxford: path.join(srcPath, 'oxford.tsx'),
    options: path.join(srcPath, 'options.tsx'),
    background: path.join(srcPath, 'background.tsx'),
  },
  output: {
    path: resolve('extension', 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: require('./babel.config'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    alias: {
      src: resolve(__dirname, 'src'),
      'package.json': resolve(__dirname, 'package.json'),
      'manifest.json': resolve(__dirname, 'extension', 'manifest.json'),
    },
  },
};
