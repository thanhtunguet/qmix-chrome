const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    oxford: './src/oxford.tsx',
    cambridge: './src/cambridge.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
};
