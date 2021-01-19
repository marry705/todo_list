module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'import/extensions': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
