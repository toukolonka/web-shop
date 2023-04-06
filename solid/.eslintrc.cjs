/* eslint-disable no-undef */
module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
    },
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    'overrides': [
    ],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
    },
    'plugins': [
      'react',
    ],
    'rules': {
      'semi': [2, 'always'],
      'indent': ['error', 2],
      'react/prop-types': 0,
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always',
      ],
      'arrow-spacing': [
        'error', { 'before': true, 'after': true },
      ],
      'no-console': 'warn',
      'comma-dangle': ['error', 'only-multiline'],
      'quotes': [
        'error',
        'single'
      ],
    },
  };
  