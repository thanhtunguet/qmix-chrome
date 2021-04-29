const dotenv = require('dotenv');
const path = require('path');
const {EnvironmentPlugin} = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const WebpackObfuscator = require('webpack-obfuscator');

dotenv.config();

const srcPath = path.resolve(__dirname, 'src');

const config = {
  mode: process.env.NODE_ENV || 'development',
  plugins: [new EnvironmentPlugin(['NODE_ENV'])],
  entry: {
    background: path.join(srcPath, 'background.tsx'),
    cambridge: path.join(srcPath, 'cambridge.tsx'),
    oxford: path.join(srcPath, 'oxford.tsx'),
    options: path.join(srcPath, 'options.tsx'),
  },
  output: {
    path: path.resolve('extension', 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      'manifest.json': path.resolve(__dirname, 'extension', 'manifest.json'),
      'package.json': path.resolve(__dirname, 'package.json'),
    },
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
  externals: {
    jquery: '$',
    'popper.js': 'Popper',
  },
  devtool: this.mode === 'development' ? 'source-map' : false,
};

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

if (config.mode !== 'development') {
  config.plugins.push(new WebpackObfuscator({}, []));
}

module.exports = config;
