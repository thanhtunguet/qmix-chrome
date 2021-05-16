module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
    'macros',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
  ],
};
