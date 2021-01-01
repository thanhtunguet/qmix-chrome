const {resolve} = require('path');
const nameof = require('ts-nameof');

module.exports = {
  entry: {
    cambridge: './src/cambridge.tsx',
    oxford: './src/oxford.tsx',
    options: './src/options.tsx',
    background: './src/background.tsx',
  },
  output: {
    path: resolve('extension', 'build'),
    publicPath: '',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    alias: {
      src: resolve(__dirname, 'src'),
    },
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
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
};
