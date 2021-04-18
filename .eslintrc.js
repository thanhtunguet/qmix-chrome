module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    webextensions: true,
    node: true,
  },
  globals: {
    nameof: true,
  },
  rules: {
    'no-console': 'error',
    'no-shadow': 'off',
    'no-array-constructor': 'error',
    'no-useless-return': 'error',
    'no-useless-computed-key': 'error',
    'no-cond-assign': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-else-return': 'error',
    'no-useless-constructor': 'error',
    'no-eq-null': 'error',
    'no-return-await': 'error',
    'no-unreachable': 'error',
    'no-useless-rename': 'error',
    'no-useless-concat': 'error',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
};
