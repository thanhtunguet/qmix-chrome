const {resolve} = require('path');
const nameof = require('ts-nameof');
const WebpackObfuscator = require('webpack-obfuscator');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const mode = process.env.NODE_ENV || 'development';

let plugins = [new webpack.EnvironmentPlugin({})];

if (mode !== 'development') {
  plugins = [...plugins, new WebpackObfuscator({}, [])];
}

module.exports = {
  mode,
  plugins,
  externals: [],
  devtool: mode === 'development' ? 'source-map' : undefined,
  entry: {
    cambridge: './src/cambridge.tsx',
    oxford: './src/oxford.tsx',
    options: './src/options.tsx',
    background: './src/background.tsx',
  },
  output: {
    path: resolve('extension', 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => {
            return {
              before: [nameof],
            };
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
};
