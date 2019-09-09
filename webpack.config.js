const {resolve} = require("path");
module.exports = {
  entry: {
    "cambridge": "./src/cambridge.tsx",
    "oxford": "./src/oxford.tsx",
    "options": "./src/options.tsx",
    "background": "./src/background.tsx",
  },
  plugins: [],
  output: {
    path: resolve("extension", "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
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
  mode: process.env.NODE_ENV,
  devtool: "source-map",
};
