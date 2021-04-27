module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'macros',
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
  ],
};
